"use client";

import { RefObject, useEffect, useRef } from "react";

function generateStars(
  count: number,
): { x: number; y: number; z: number; intensity: number }[] {
  const MIN_MAG = 0.05;
  const MIN_MAG_SQUARED = MIN_MAG * MIN_MAG;

  let stars: { x: number; y: number; z: number; intensity: number }[] = [];
  for (let i = 0; i < count; i++) {
    let x, y, z, magSquared;
    do {
      x = Math.random() * 2.0 - 1.0;
      y = Math.random() * 2.0 - 1.0;
      z = Math.random() * 2.0 - 1.0;
      magSquared = x * x + y * y + z * z;
    } while (magSquared < MIN_MAG_SQUARED || magSquared > 1.0);
    // closest stars have intensity of 1.0, furthest have close to zero
    const intensity = (1.0 / magSquared) * MIN_MAG_SQUARED;
    stars.push({ x, y, z, intensity });
  }

  return stars;
}

const PIXEL_DIVIDER: number = 4;
const AVG_SECONDS_PER_METEOR: number = 3;

class MeteorShower {
  activeMeteors: {
    // screen coords between 0 and 1, starts top left
    startPos: [number, number];
    endPos: [number, number];
    // between 0 and 1
    currentProgress: number;
    speed: number;
    brightness: number;
    hue: number;
  }[];

  ctx: CanvasRenderingContext2D | null = null;

  aspectRatio: number = 1.0;

  timeToNextMeteor: number = 0.5;

  timeOfLastTick: number | null = null;

  ref: RefObject<HTMLCanvasElement>;

  hasStopped: boolean = false;

  constructor(ref: RefObject<HTMLCanvasElement>) {
    this.activeMeteors = [];
    this.ref = ref;
  }

  genRandomMeteor(): void {
    // allow starting slightly off-screen
    const startX = Math.random() * 1.1 - 0.05;
    // allow starting off screen, but don't start below the upper half
    const startY = Math.random() - 0.2;
    const deltaX = Math.random() - 0.5;
    const deltaY = Math.random() * 0.5;

    const speed = Math.random() * 0.2 + 0.3;
    const brightness = Math.random() * 0.1 + 0.25;
    const hue = Math.random();

    this.activeMeteors.push({
      startPos: [startX, startY],
      endPos: [startX + deltaX, startY + deltaY],
      currentProgress: 0.0,
      speed,
      brightness,
      hue,
    });
  }

  initCtx(): boolean {
    // create content if none
    if (this.ctx != null && this.ctx.canvas === this.ref.current) {
      return true;
    } else {
      if (this.ref.current == null) {
        this.ctx = null;
      } else {
        this.ctx = this.ref.current.getContext("2d", { alpha: true });
        if (this.ctx != null) {
          return true;
        }
      }
    }
    return false;
  }

  resizeCanvasAndClear(): void {
    if (this.ctx != null) {
      // resize to viewport
      let idealWidth = this.ctx.canvas.clientWidth / PIXEL_DIVIDER;
      let idealHeight = this.ctx.canvas.clientHeight / PIXEL_DIVIDER;
      idealWidth = Math.max(Math.round(idealWidth), 1);
      idealHeight = Math.max(Math.round(idealHeight), 1);
      if (
        idealWidth !== this.ctx.canvas.width ||
        idealHeight !== this.ctx.canvas.height
      ) {
        this.ctx.canvas.width = idealWidth;
        this.ctx.canvas.height = idealHeight;
      }
      this.aspectRatio = idealWidth / idealHeight;

      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }

  render(): void {
    if (!this.initCtx()) {
      return;
    }

    this.resizeCanvasAndClear();

    this.ctx!.lineCap = "round";
    this.ctx!.lineWidth = 2;

    this.activeMeteors.forEach((meteor) => {
      let [startX, startY] = meteor.startPos;
      let [endX, endY] = meteor.endPos;
      startX *= this.ctx!.canvas.width;
      startY *= this.ctx!.canvas.height;
      endX *= this.ctx!.canvas.width;
      endY *= this.ctx!.canvas.height;
      const x = startX + (endX - startX) * meteor.currentProgress;
      const y = startY + (endY - startY) * meteor.currentProgress;
      const hueStr = meteor.hue.toFixed(10) + "turn";
      const gradient = this.ctx!.createLinearGradient(
        startX,
        startY,
        endX,
        endY,
      );
      gradient.addColorStop(0, `hsl(${hueStr} 100% 70% / 0)`);
      const brightnessFactor = 1 - Math.exp(5 * (meteor.currentProgress - 1));
      let lineBrightnessStr = (meteor.brightness * brightnessFactor).toFixed(
        10,
      );
      gradient.addColorStop(
        1,
        `hsl(${hueStr} 100% 70% / ${lineBrightnessStr})`,
      );
      this.ctx!.beginPath();
      this.ctx!.moveTo(startX, startY);
      this.ctx!.lineTo(x, y);
      this.ctx!.strokeStyle = gradient;
      this.ctx!.stroke();

      const r0 = 4;
      const radialGradient = this.ctx!.createRadialGradient(x, y, 0, x, y, r0);
      let radialBrightnessStr = (
        0.5 *
        meteor.brightness *
        brightnessFactor
      ).toFixed(10);
      radialGradient.addColorStop(
        0,
        `hsl(${hueStr} 100% 50% / ${radialBrightnessStr})`,
      );
      radialGradient.addColorStop(1, `hsl(${hueStr} 100% 50% / 0)`);
      this.ctx!.fillStyle = radialGradient;
      this.ctx!.fillRect(x - r0, y - r0, x + r0, y + r0);
    });
  }

  tick(dt: number): void {
    this.activeMeteors.forEach((meteor) => {
      meteor.currentProgress += meteor.speed * dt;
    });
    this.activeMeteors = this.activeMeteors.filter(
      (meteor) => meteor.currentProgress < 1.0,
    );

    this.timeToNextMeteor -= dt;
    if (this.timeToNextMeteor <= 0) {
      this.genRandomMeteor();
      // set next time
      this.timeToNextMeteor =
        -Math.log(1 - Math.random()) * AVG_SECONDS_PER_METEOR;
    }
  }

  setupUpdateLoop(): void {
    let superThis = this;
    function cb() {
      if (!superThis.hasStopped) {
        superThis.updateLoop();
        requestAnimationFrame(cb);
      }
    }
    if (!this.hasStopped) {
      requestAnimationFrame(cb);
    }
  }

  updateLoop(): void {
    if (this.timeOfLastTick == null) {
      this.timeOfLastTick = Date.now();
      this.render();
    } else {
      let timeOfNextTick = Date.now();
      let dt = (timeOfNextTick - this.timeOfLastTick) / 1000;

      this.tick(dt);
      this.render();

      this.timeOfLastTick = timeOfNextTick;
    }
  }

  stopUpdateLoop(): void {
    this.hasStopped = true;
  }
}

export default function Stars() {
  let ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let meteorShower = new MeteorShower(ref);
    meteorShower.setupUpdateLoop();

    return () => meteorShower.stopUpdateLoop();
  }, []);

  return (
    <canvas
      className="fixed top-0 left-0 w-screen h-screen select-none pointer-events-none -z-50 [image-rendering:pixelated]"
      ref={ref}
    />
  );
}
