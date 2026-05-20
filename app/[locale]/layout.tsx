import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import MagneticCursor from "../../components/MagneticCursor";
import CookieBanner from "../../components/CookieBanner";
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
  const isNL = locale === "nl";

  return (
    <>
      <MagneticCursor />
      <SiteHeader
        locale={locale as Locale}
        nav={{
          tools: t.nav.tools,
          about: t.nav.about,
          workWithMe: t.nav.workWithMe,
          tryTidify: t.nav.tryTidify,
        }}
      />

      <main className="flex-1">{children}</main>

      <footer style={{ background: "var(--dark)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand + contact */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm select-none"
                  style={{ background: "var(--accent)", color: "#fff" }}>
                  S
                </span>
                <span className="font-bold" style={{ color: "var(--foreground)" }}>SVD Online</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--dark-muted)" }}>
                {isNL
                  ? "AI-automatisering en eerlijke toolreviews door Shoka van Dooren, gevestigd in Nederland."
                  : "AI automation workflows and honest tool reviews by Shoka van Dooren, based in the Netherlands."}
              </p>
              <a href="mailto:contact@svdonline.com"
                className="inline-block mt-3 text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--accent)" }}>
                contact@svdonline.com
              </a>

              {/*
                Social links, uncomment when ready:
                <div className="flex items-center gap-4 mt-5">
                  <a href="https://linkedin.com/in/YOUR-HANDLE" ...>LinkedIn</a>
                  <a href="https://instagram.com/svdonline" ...>Instagram</a>
                </div>
              */}

              {/* Legal identifiers */}
              <p className="text-[11px] mt-5 leading-relaxed" style={{ color: "var(--dark-muted)", opacity: 0.7 }}>
                KvK: 98794671 · BTW: NL005354685B30
                <br />
                {isNL ? "Prijzen excl. BTW (21%)" : "Prices excl. VAT (21%)"}
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--foreground)" }}>
                {isNL ? "Navigeren" : "Navigate"}
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: "var(--dark-muted)" }}>
                <li><Link href={`/${locale}/tools`} className="hover:text-[var(--foreground)] transition-colors">{t.nav.tools}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-[var(--foreground)] transition-colors">{t.nav.about}</Link></li>
                <li><Link href={`/${locale}/work-with-me`} className="hover:text-[var(--foreground)] transition-colors">{t.nav.workWithMe}</Link></li>
                <li><Link href={`/${locale}/contact`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Contact" : "Contact"}</Link></li>
                <li><Link href={`/${locale}/onboarding`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Onboarding" : "Onboarding"}</Link></li>
                <li><Link href={`/${locale}/faq`} className="hover:text-[var(--foreground)] transition-colors">FAQ</Link></li>
                <li>
                  <a href="https://tidifyai.com" target="_blank" rel="noopener noreferrer"
                    className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5">
                    Tidify AI
                    <span style={{ color: "var(--accent)", fontSize: "11px" }}>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--foreground)" }}>
                {isNL ? "Juridisch" : "Legal"}
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: "var(--dark-muted)" }}>
                <li><Link href={`/${locale}/privacy`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Privacybeleid" : "Privacy Policy"}</Link></li>
                <li><Link href={`/${locale}/cookies`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Cookiebeleid" : "Cookie Policy"}</Link></li>
                <li><Link href={`/${locale}/terms`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Algemene Voorwaarden" : "Terms of Service"}</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid var(--dark-border)", color: "var(--dark-muted)" }}>
            <p>
              © {new Date().getFullYear()} SVD Online · Shoka van Dooren
              {" · "}
              <Link href={`/${locale}/privacy`} className="hover:text-[var(--foreground)] transition-colors">Privacy</Link>
              {" · "}
              <Link href={`/${locale}/terms`} className="hover:text-[var(--foreground)] transition-colors">{isNL ? "Voorwaarden" : "Terms"}</Link>
            </p>
            <p className="text-left sm:text-right max-w-sm">{t.footer.affiliateNote}</p>
          </div>
        </div>
      </footer>

      <CookieBanner locale={locale} />
    </>
  );
}
