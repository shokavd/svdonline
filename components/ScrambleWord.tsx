"use client";
import React, { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01";

export function ScrambleWord({
  text,
  delay = 0,
  className,
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayed, setDisplayed] = useState(
    text.split("").map((c) => (c === " " || c === "." ? c : CHARS[0])).join("")
  );
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    let raf: number;
    let frame = 0;
    const totalFrames = text.replace(/[\s.]/g, "").length * 3 + 10;
    const started = Date.now() + delay;

    const update = () => {
      if (Date.now() < started) { raf = requestAnimationFrame(update); return; }

      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " " || text[i] === ".") {
          out += text[i];
        } else if (i < (frame / totalFrames) * text.length) {
          out += text[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayed(out);
      frame++;

      if (frame >= totalFrames) {
        setDisplayed(text);
        done.current = true;
        return;
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  return <span className={className} style={style}>{displayed}</span>;
}
