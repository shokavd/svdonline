"use client";
import { useEffect, useRef } from "react";

const C1 = [255,  45, 138];
const C2 = [255, 179,   0];

export default function HeroBackgroundD() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -1, y: -1, px: -1, py: -1, speed: 0, active: false };
    let colorT = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      // Only compute speed once we have a valid previous position
      mouse.speed = mouse.active
        ? Math.min(Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py), 80)
        : 0;
      mouse.active = true;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const draw = () => {
      const w = W(); const h = H();
      colorT += 0.006;

      // Slow background fade, gives the "paint drying" diffusion effect
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = isLight ? "rgba(255,248,243,0.038)" : "rgba(12,8,16,0.038)";
      ctx.fillRect(0, 0, w, h);

      // Paint only when mouse is on canvas and moving
      if (mouse.x > 0 && mouse.speed > 0.8) {
        // Color interpolates between C1 and C2 based on horizontal position + time
        const mix = (Math.sin(mouse.x * 0.007 + colorT) + 1) / 2;
        const r = Math.round(C1[0] * mix + C2[0] * (1 - mix));
        const g = Math.round(C1[1] * mix + C2[1] * (1 - mix));
        const b = Math.round(C1[2] * mix + C2[2] * (1 - mix));

        const speed = mouse.speed;
        const alpha = isLight ? 0.60 : 0.70;

        // Main paint blob, size grows with speed
        const brushR = Math.min(10 + speed * 2.2, 72);
        const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, brushR);
        grd.addColorStop(0,    `rgba(${r},${g},${b},${alpha})`);
        grd.addColorStop(0.45, `rgba(${r},${g},${b},${alpha * 0.5})`);
        grd.addColorStop(1,    `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, brushR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, Math.min(3 + speed * 0.3, 10), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(alpha + 0.2, 0.92)})`;
        ctx.fill();

        // Stroke segment connecting prev to current, continuous brush stroke
        if (mouse.px > 0 && speed > 2) {
          const strokeR = Math.min(5 + speed * 1.2, 40);
          const linGrd = ctx.createLinearGradient(mouse.px, mouse.py, mouse.x, mouse.y);
          linGrd.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.6})`);
          linGrd.addColorStop(1, `rgba(${r},${g},${b},${alpha * 0.6})`);
          ctx.beginPath();
          ctx.moveTo(mouse.px, mouse.py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = linGrd;
          ctx.lineWidth = strokeR;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
