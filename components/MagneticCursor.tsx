"use client";
import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    let animId: number;
    let isHover = false;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onEnter = () => { isHover = true; };
    const onLeave = () => { isHover = false; };
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      if (dot.current) {
        dot.current.style.left = `${mx}px`;
        dot.current.style.top = `${my}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top = `${ry}px`;
        ring.current.style.width = isHover ? "52px" : "32px";
        ring.current.style.height = isHover ? "52px" : "32px";
        ring.current.style.opacity = isHover ? "0.8" : "0.4";
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: "var(--accent)", boxShadow: "0 0 8px 3px rgba(255,45,138,0.6)" }}
      />
      {/* Outer ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 32, height: 32,
          border: "1px solid rgba(255,45,138,0.4)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
