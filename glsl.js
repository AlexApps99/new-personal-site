// GLSL source

// Thanks https://gist.github.com/strangerintheq/27b8fc4e53432d8b9284364713ce8608
const VERT_SRC = `#version 300 es
precision highp float;
void main() {
    float x = float((gl_VertexID & 1) << 2) - 1.0;
    float y = float((gl_VertexID & 2) << 1) - 1.0;
    gl_Position = vec4(x, y, 0, 1);
}`;

const COMMON_SRC = `#version 300 es
precision highp float;

#define N  ivec2( 0,  1)
#define E  ivec2( 1,  0)
#define S  ivec2( 0, -1)
#define W  ivec2(-1,  0)
#define NE ivec2( 1,  1)
#define SE ivec2( 1, -1)
#define SW ivec2(-1, -1)
#define NW ivec2(-1,  1)

uniform vec2 resolution;
`;

// TODO scale is distorted
const ADVECT_SRC = COMMON_SRC + `
layout(location = 0) out vec2 flowData;
layout(location = 1) out vec4 image;
uniform float step;
uniform sampler2D flowDataI;
uniform sampler2D imageI;
// Position and velocity
uniform vec4 mouse;
vec4 sampl(sampler2D tex, vec2 coord) {
    if (coord.x >= 0. && coord.y >= 0. && coord.x <= 1. && coord.y <= 1.) {
        return texture(tex, coord);
    } else {
        return vec4(0., 0., 0., 1.);
    }
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    if (step == 0.) {
        // Init image to thingy
        image = vec4(vec3(mod(uv.x, 0.1) > 0.05 ^^ mod(uv.y, 0.1) > 0.05 ? 1. : 0.), 1.);
    } else {
        vec4 data = sampl(flowDataI, uv);

        vec2 advected = uv - data.xy * step;
        // Step 1: Advect flow for momentum
        image = vec4(sampl(imageI, advected).xy, 0., 1.);
        vec2 o = sampl(flowDataI, advected).xy;

        // Step 2: Add external forces
        if (length(mouse.xy - uv) < 0.05) {
            o += 250. * mouse.zw;
        }

        flowData = o;
    }
}`;

// This contains the state of each cell
// XY: Velocity
const UNDIVERGE_SRC = COMMON_SRC + `
layout(location = 0) out vec2 flowData;
uniform sampler2D flowDataI;
vec2 get(ivec2 coord, ivec2 res, ivec2 X) {
    ivec2 p = coord + X;
    if (p.x > 0 && p.y > 0 && p.x + 1 < res.x && p.y + 1 < res.y) {
        return texelFetch(flowDataI, p, 0).xy;
    } else {
        return vec2(0.);
    }
}
void main() {
    ivec2 coord = ivec2(gl_FragCoord.xy);

    // Step 3: Remove divergence (multiple iterations)
    // f'[x,y] = f[x,y] + (dot(f[x-1,y-1] + f[x+1,y+1], {1,1}) +
    //                dot(f[x-1,y+1] + f[x+1,y-1], {1,-1}) * {1,-1} +
    //                (f[x-1,y] + f[x+1,y] - f[x,y-1] - f[x,y+1]) * {2,-2} +
    //                f[x,y] * -4) * 1/8
    // TODO define boundary cases inside function T
    ivec2 res = ivec2(resolution);
    #define T(X) get(coord, res, X)
    //#define T(X) texelFetch(flowDataI, coord + X, 0).xy
    vec4 data = texelFetch(flowDataI, coord, 0);
    flowData = data.xy + (
        dot(T(SW) + T(NE), vec2(1.)) +
        dot(T(NW) + T(SE), vec2(1., -1.)) * vec2(1., -1.) +
        (T(W) + T(E) - T(S) - T(N)) * vec2(2., -2.) +
        data.xy * -4.
    ) * .125;
    #undef T
}`;

const SCREEN_SRC = COMMON_SRC + `
#define TAU 6.283185307179586
out vec4 fragColor;
uniform sampler2D imageI;
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec4 data = texture(imageI, uv);
    fragColor = vec4(hsv2rgb(vec3(atan(data.y, data.x) / TAU, 1., length(data.xy))), data.a);

    //vec3 col = 0.5 + 0.5*cos(1.4+uv.xyx+vec3(0,2,4));
    //fragColor = vec4(col,1.0);
}
`;

function compileShader(gl, src, type=gl.FRAGMENT_SHADER) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader);
  } else {
    return shader;
  }
}

function linkShaders(gl, ...shaders) {
  const program = gl.createProgram();
  for (const shader of shaders) {
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program);
  } else {
    program.createUniform = function (type, name) {
      const locatio = gl.getUniformLocation(program, name);
      if (locatio == null) {
        console.warn("uniform" + type + " " + name + " does not exist");
        return () => {};
      }
      return function () {
        gl['uniform' + type](locatio, ...arguments);
      }
    };
    return program;
  }
}
