"use strict";

const canvas = document.getElementById("canvas");

canvas.oncontextmenu = e => e.preventDefault();

const ctx = canvas.getContext("webgl2", {
  alpha: false,
  depth: false,
  stencil: false,
  antialias: false,
  failIfMajorPerformanceCaveat: true,
  powerPreference: "high-performance",
  preserveDrawingBuffer: false,
});

const gl = ctx;

gl.getExtension('EXT_color_buffer_float');
gl.getExtension('OES_texture_float_linear');

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //ctx.viewport(0, 0, canvas.width, canvas.height);
};

window.onload = () => {
  window.onresize();
  doobie();
};

let lastm = 0;
let mx = 0;
let my = 0;
let vx = 0;
let vy = 0;

canvas.onmousedown = canvas.onmousemove = canvas.ontouchdown = canvas.onmouseup = e => {
  if (e.buttons & 1) {
    if (lastm != 0) {
      let delta = e.timeStamp - lastm;
      vx = (e.offsetX - mx) / delta;
      vy = (e.offsetY - my) / delta;
    }
  } else {
    vx = 0;
    vy = 0;
  }

  mx = e.offsetX;
  my = e.offsetY;
  lastm = e.timeStamp;
};

const VERT_SHADER = compileShader(ctx, VERT_SRC, ctx.VERTEX_SHADER);
const ADVECT_SHADER = compileShader(ctx, ADVECT_SRC);
const ADVECT = linkShaders(ctx, VERT_SHADER, ADVECT_SHADER);
gl.useProgram(ADVECT);
ADVECT.resolution = ADVECT.createUniform("2f", "resolution");
ADVECT.step = ADVECT.createUniform("1f", "step");
ADVECT.flowDataI = ADVECT.createUniform("1i", "flowDataI");
ADVECT.imageI = ADVECT.createUniform("1i", "imageI");
ADVECT.mouse = ADVECT.createUniform("4f", "mouse");

const UNDIVERGE_SHADER = compileShader(ctx, UNDIVERGE_SRC);
const UNDIVERGE = linkShaders(ctx, VERT_SHADER, UNDIVERGE_SHADER);
gl.useProgram(UNDIVERGE);
UNDIVERGE.resolution = UNDIVERGE.createUniform("2f", "resolution");
UNDIVERGE.flowDataI = UNDIVERGE.createUniform("1i", "flowDataI");

const SCREEN_SHADER = compileShader(ctx, SCREEN_SRC);
const SCREEN = linkShaders(ctx, VERT_SHADER, SCREEN_SHADER);
gl.useProgram(SCREEN);
SCREEN.resolution = SCREEN.createUniform("2f", "resolution");
SCREEN.imageI = SCREEN.createUniform("1i", "imageI");

gl.deleteShader(VERT_SHADER);
gl.deleteShader(ADVECT_SHADER);
gl.deleteShader(UNDIVERGE_SHADER);
gl.deleteShader(SCREEN_SHADER);

function newTexture(x, y, internalFormat=gl.RGBA, format=gl.RGBA, type=gl.UNSIGNED_BYTE, data=null) {
  const targetTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, targetTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, x, y, 0, format, type, data);

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return targetTexture;
}

const x = window.innerWidth;// / 4;
const y = window.innerHeight;// / 4;
const flowData1 = newTexture(x, y, gl.RG32F, gl.RG, gl.FLOAT);

const image1 = newTexture(x, y);
const flowData2 = newTexture(x, y, gl.RG32F, gl.RG, gl.FLOAT);
const image2 = newTexture(x, y);

const fdfb1 = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fdfb1);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, flowData1, 0);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, image1, 0);


const fdfb2 = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fdfb2);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, flowData2, 0);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, image2, 0);


gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, flowData1);
gl.activeTexture(gl.TEXTURE1);
gl.bindTexture(gl.TEXTURE_2D, image1);

gl.useProgram(ADVECT);
ADVECT.resolution(x, y);
ADVECT.step(1 / 60);
ADVECT.flowDataI(0);
ADVECT.imageI(1);
ADVECT.mouse(0, 0, 0, 0);
gl.useProgram(UNDIVERGE);
UNDIVERGE.resolution(x, y);
UNDIVERGE.flowDataI(0);
gl.useProgram(SCREEN);
SCREEN.resolution(x, y);
SCREEN.imageI(0);

let ping = true;
let initted = false;

function flip(change=true) {
  if (change) ping = !ping;
  if (ping) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, fdfb2);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, flowData1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, image1);
  } else {
    gl.bindFramebuffer(gl.FRAMEBUFFER, fdfb1);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, flowData2);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, image2);
  }
}

function doobie() {
  flip(false);
  gl.viewport(0, 0, x, y);
  gl.useProgram(ADVECT);
  if (!initted) {
    ADVECT.step(0);
    initted = true;
  } else {
    ADVECT.step(1 / 60);
  }
  ADVECT.mouse(mx / canvas.width, 1 - (my / canvas.height), vx / canvas.width, -(vy / canvas.height));
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);
  flip();

  gl.useProgram(UNDIVERGE);
  for (let x = 0; x < 8; x++) {
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);
    flip();
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.useProgram(SCREEN);
  SCREEN.resolution(canvas.width, canvas.height);
  gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);
  requestAnimationFrame(doobie);
}
