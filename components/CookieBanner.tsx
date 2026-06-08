"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-notice-seen")) setVisible(true);
    } catch {}
  }, []);

  const dismiss = () => {
    try { localStorage.setItem("cookie-notice-seen", "1"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  const isNL = locale === "nl";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
      style={{
        background: "var(--dark-card)",
        borderTop: "1px solid var(--dark-border)",
        boxShadow: "0 -4px 32px rgba(0,0,0,0.25)",
      }}
    >
      <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--dark-muted)" }}>
        {isNL
          ? <>
              We gebruiken Google Analytics om te begrijpen hoe deze site wordt gebruikt. Geen advertenties, geen profilering.{" "}
              <Link href={`/${locale}/cookies`} className="underline underline-offset-2 transition-colors hover:text-[var(--accent)]">Meer info</Link>.
            </>
          : <>
              We use Google Analytics to understand how this site is used. No ads, no profiling.{" "}
              <Link href={`/${locale}/cookies`} className="underline underline-offset-2 transition-colors hover:text-[var(--accent)]">Learn more</Link>.
            </>
        }
      </p>
      <button
        onClick={dismiss}
        className="shrink-0 font-semibold px-5 py-2 rounded-lg text-xs transition-colors"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        {isNL ? "Begrepen" : "Got it"}
      </button>
    </div>
  );
}
