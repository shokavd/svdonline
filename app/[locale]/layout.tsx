import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { locales, getT, type Locale } from "../../lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getT(locale as Locale);

  return (
    <>
      <header className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="font-bold text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
            SVD Online
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href={`/${locale}/tools`} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t.nav.tools}</Link>
            <Link href={`/${locale}/about`} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t.nav.about}</Link>
            <Link href={`/${locale}/work-with-me`} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t.nav.workWithMe}</Link>
            <LanguageSwitcher locale={locale as Locale} />
            <a
              href="https://tidifyai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t.nav.tryTidify}
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="text-xs">{t.footer.affiliateNote}</p>
        </div>
      </footer>
    </>
  );
}
