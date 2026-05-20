"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import type { Locale } from "../lib/i18n";

export default function SiteHeader({ locale, nav }: {
  locale: Locale;
  nav: { tools: string; about: string; workWithMe: string; tryTidify: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  const navLinks = [
    { href: `/${locale}/tools`, label: nav.tools },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/work-with-me`, label: nav.workWithMe },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? "var(--header-scrolled-bg)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--header-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm select-none shrink-0 transition-all"
              style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 0 12px rgba(255,45,138,0.4)" }}
            >
              S
            </span>
            <span className="font-bold transition-colors" style={{ color: "var(--foreground)" }}>
              SVD Online
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-5 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="transition-colors"
                style={{ color: isActive(href) ? "var(--foreground)" : "var(--muted)", fontWeight: isActive(href) ? 600 : 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(href) ? "var(--foreground)" : "var(--muted)")}>
                {label}
              </Link>
            ))}
            <ThemeToggle />
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}/work-with-me`}
              className="btn-glow font-semibold px-4 py-2 rounded-lg text-sm"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {nav.workWithMe} →
            </Link>
          </nav>

          {/* Mobile: controls + hamburger */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            >
              <span className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--foreground)",
                  transform: menuOpen ? "rotate(45deg) translate(3px,3px)" : "none",
                }} />
              <span className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--foreground)",
                  opacity: menuOpen ? 0 : 1,
                }} />
              <span className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--foreground)",
                  transform: menuOpen ? "rotate(-45deg) translate(3px,-3px)" : "none",
                }} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="sm:hidden px-6 pb-6 pt-2"
            style={{ borderTop: "1px solid var(--header-border)" }}>
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href}
                  className="py-3 text-base font-medium border-b transition-colors"
                  style={{
                    color: isActive(href) ? "var(--accent)" : "var(--foreground)",
                    borderColor: "var(--dark-border)",
                  }}>
                  {label}
                </Link>
              ))}
              <Link
                href={`/${locale}/work-with-me`}
                className="btn-glow font-bold px-5 py-3 rounded-xl text-sm text-center mt-4"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {nav.workWithMe} →
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
