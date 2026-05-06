import Link from "next/link";
import { notFound } from "next/navigation";
import { getTool, TOOLS } from "../../../../lib/tools";
import { getT, type Locale } from "../../../../lib/i18n";

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  return locales.flatMap((locale) => TOOLS.map((t) => ({ locale, slug: t.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const t = getT(locale as Locale);
  const loc = locale === "nl" && tool.nl ? tool.nl : null;
  return {
    title: `${tool.name} Review — SVD Online`,
    description: loc ? loc.tagline : tool.tagline,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-lg">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[var(--accent)]" : "text-[var(--border)]"}>★</span>
      ))}
    </div>
  );
}

export default async function ToolPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const t = getT(locale as Locale);
  const loc = locale === "nl" && tool.nl ? tool.nl : null;

  const tagline = loc ? loc.tagline : tool.tagline;
  const whyIUseIt = loc ? loc.whyIUseIt : tool.whyIUseIt;
  const pros = loc ? loc.pros : tool.pros;
  const cons = loc ? loc.cons : tool.cons;
  const review = loc ? loc.review : tool.review;
  const affiliateLabel = loc ? loc.affiliateLabel : tool.affiliateLabel;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-sm text-[var(--muted)] mb-8">
        <Link href={`/${locale}/tools`} className="hover:text-[var(--foreground)] transition-colors">{t.toolPage.backToTools}</Link>
        <span className="mx-2">›</span>
        <span>{tool.name}</span>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{tool.icon}</span>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-[var(--foreground)]">{tool.name}</h1>
              {tool.featured && (
                <span className="text-xs bg-orange-100 text-[var(--accent)] font-medium px-2.5 py-1 rounded-full">{t.tools.topPick}</span>
              )}
            </div>
            <p className="text-[var(--muted)] mt-1">{tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <StarRating rating={tool.rating} />
          <span className="text-sm text-[var(--muted)]">{t.toolPage.rating(tool.rating)}</span>
          <span className="w-px h-4 bg-[var(--border)]" />
          <span className="text-sm text-[var(--muted)]">{tool.pricing}</span>
          <span className="w-px h-4 bg-[var(--border)]" />
          <span className="text-sm text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] px-2 py-0.5 rounded-full">{t.tools.categories[tool.category]}</span>
        </div>
      </div>

      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--foreground)]">{affiliateLabel}</p>
          <p className="text-sm text-[var(--muted)] mt-0.5">{tool.pricing}</p>
        </div>
        <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent)] text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap shrink-0">
          {affiliateLabel} →
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{t.toolPage.whyIUseIt}</h2>
        <p className="text-[var(--muted)] leading-relaxed">{whyIUseIt}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">{t.toolPage.prosAndCons}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2"><span>✓</span> {t.toolPage.whatILike}</h3>
            <ul className="space-y-2">
              {pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm text-[var(--muted)]">
                  <span className="text-green-600 shrink-0 mt-0.5">•</span>{pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2"><span>✗</span> {t.toolPage.watchOutFor}</h3>
            <ul className="space-y-2">
              {cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm text-[var(--muted)]">
                  <span className="text-red-400 shrink-0 mt-0.5">•</span>{con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">{t.toolPage.myFullReview}</h2>
        <div>
          {review.split("\n\n").map((para, i) => (
            <p key={i} className="text-[var(--muted)] leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </section>

      <div className="border-t border-[var(--border)] pt-8">
        <p className="text-[var(--foreground)] font-semibold mb-2">{t.toolPage.readyToTry(tool.name)}</p>
        <p className="text-sm text-[var(--muted)] mb-4">{tool.pricing}</p>
        <div className="flex flex-wrap gap-3">
          <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent)] text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
            {affiliateLabel} →
          </a>
          <Link href={`/${locale}/tools`} className="border border-[var(--border)] text-[var(--foreground)] font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--card)] transition-colors text-sm">
            {t.toolPage.seeAllTools}
          </Link>
        </div>
        {tool.hasAffiliate && (
          <p className="text-xs text-[var(--muted)] mt-4">{t.toolPage.affiliateDisclosure}</p>
        )}
      </div>
    </div>
  );
}
