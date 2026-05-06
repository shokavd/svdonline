import Image from "next/image";
import Link from "next/link";
import { getFeaturedTools, TOOLS } from "../../lib/tools";
import { getT, type Locale } from "../../lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
    openGraph: { title: t.meta.siteTitle, description: t.meta.siteDescription, url: "https://svdonline.com", siteName: "SVD Online", type: "website" },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[var(--accent)]" : "text-[var(--border)]"}>★</span>
      ))}
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  const featured = getFeaturedTools();

  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--background)]">
              <Image src="/shoka.jpg" alt="Shoka van Dooren" width={176} height={176} className="w-full h-full object-cover" priority />
            </div>
          </div>
          <div>
            <p className="text-[var(--accent)] font-medium mb-2">{t.home.greeting}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 leading-tight">
              {t.home.headline.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h1>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">{t.home.subheadline}</p>
            <div className="flex gap-3 mt-6">
              <Link href={`/${locale}/tools`} className="bg-[var(--accent)] text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                {t.home.browseTools}
              </Link>
              <Link href={`/${locale}/about`} className="border border-[var(--border)] text-[var(--foreground)] font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--card)] transition-colors text-sm">
                {t.home.aboutMe}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)] border-y border-[var(--border)] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">{t.home.topPicksTitle}</h2>
            <p className="text-[var(--muted)] mt-1">{t.home.topPicksSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {featured.map((tool) => {
              const loc = locale === "nl" && tool.nl ? tool.nl : null;
              return (
                <Link key={tool.slug} href={`/${locale}/tools/${tool.slug}`} className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] hover:shadow-sm transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">{tool.name}</h3>
                        <span className="text-xs text-[var(--muted)] bg-[var(--border)] px-2 py-0.5 rounded-full">{t.tools.categories[tool.category]}</span>
                      </div>
                    </div>
                    <StarRating rating={tool.rating} />
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{loc ? loc.tagline : tool.tagline}</p>
                  <p className="text-xs text-[var(--muted)] mt-3 font-medium">{tool.pricing}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/tools`} className="text-[var(--accent)] font-medium hover:underline text-sm">
              {t.home.seeAllTools(TOOLS.length)}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-8 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{t.home.trustTitle}</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">{t.home.trustPara1}</p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">{t.home.trustPara2}</p>
            <Link href={`/${locale}/about`} className="text-[var(--accent)] font-semibold hover:underline text-sm">{t.home.moreAboutMe}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
