"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "en" ? "nl" : "en";
  const newPath = pathname.replace(`/${locale}`, `/${other}`);

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <span className={locale === "en" ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>EN</span>
      <span className="text-[var(--border)]">|</span>
      <Link href={newPath} className={locale === "nl" ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"}>NL</Link>
    </div>
  );
}
