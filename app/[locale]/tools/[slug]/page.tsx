import Link from "next/link";
import { notFound } from "next/navigation";
import { getTool, TOOLS } from "../../../../lib/tools";
import { getT, type Locale } from "../../../../lib/i18n";
import ScrollReveal from "../../../../components/ScrollReveal";

export async function generateStaticParams() {
  const locales = ["en", "nl"];
  return locales.flatMap((locale) => TOOLS.map((t) => ({ locale, slug: t.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const loc = locale === "nl" && tool.nl ? tool.nl : null;
  return {
    title: `${tool.name} Review | SVD Online`,
    description: loc ? loc.tagline : tool.tagline,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-lg">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "var(--accent2)" : "var(--dark-border)" }}>★</span>
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
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="text-sm mb-8 flex items-center gap-2" style={{ color: "var(--dark-muted)" }}>
              <Link
                href={`/${locale}/tools`}
                className="transition-colors hover:text-white"
                style={{ color: "var(--dark-muted)" }}
              >
                {t.toolPage.backToTools}
              </Link>
              <span>›</span>
              <span style={{ color: "var(--foreground)" }}>{tool.name}</span>
            </div>

            {/* Title block */}
            <div className="flex items-start gap-5 mb-6">
              <span className="text-5xl">{tool.icon}</span>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h1 className="text-4xl sm:text-5xl font-black" style={{ color: "var(--foreground)" }}>
                    {tool.name}
                  </h1>
                  {tool.featured && (
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,96,53,0.15)", color: "var(--accent)" }}
                    >
                      {t.tools.topPick}
                    </span>
                  )}
                </div>
                <p className="text-lg" style={{ color: "var(--dark-muted)" }}>{tagline}</p>
              </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-4 flex-wrap">
              <StarRating rating={tool.rating} />
              <span className="text-sm" style={{ color: "var(--dark-muted)" }}>{t.toolPage.rating(tool.rating)}</span>
              <span className="w-px h-4" style={{ background: "var(--dark-border)" }} />
              <span className="text-sm" style={{ color: "var(--dark-muted)" }}>{tool.pricing}</span>
              <span className="w-px h-4" style={{ background: "var(--dark-border)" }} />
              <span
                className="text-sm px-2.5 py-0.5 rounded-full"
                style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)", color: "var(--dark-muted)" }}
              >
                {t.tools.categories[tool.category]}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Affiliate CTA banner */}
      <section style={{ background: "var(--background)" }} className="py-10 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>{affiliateLabel}</p>
                <p className="text-sm" style={{ color: "var(--dark-muted)" }}>{tool.pricing}</p>
              </div>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap shrink-0"
                style={{ background: "var(--accent)", color: "var(--dark)" }}
              >
                {affiliateLabel} →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why I use it */}
      <section style={{ background: "var(--dark)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">My take</p>
            <h2 className="text-2xl font-black mb-5" style={{ color: "var(--foreground)" }}>{t.toolPage.whyIUseIt}</h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: "var(--dark-muted)" }}>{whyIUseIt}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pros & Cons */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Breakdown</p>
            <h2 className="text-2xl font-black mb-8" style={{ color: "var(--foreground)" }}>{t.toolPage.prosAndCons}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            <ScrollReveal delay={0}>
              <div
                className="dark-card rounded-xl p-6 h-full"
                style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
              >
                <h3 className="font-bold mb-4 flex items-center gap-2 text-sm" style={{ color: "#4ADE80" }}>
                  <span>✓</span> {t.toolPage.whatILike}
                </h3>
                <ul className="space-y-3">
                  {pros.map((pro) => (
                    <li key={pro} className="flex gap-2 text-sm" style={{ color: "var(--dark-muted)" }}>
                      <span className="shrink-0 mt-0.5" style={{ color: "#4ADE80" }}>•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div
                className="dark-card rounded-xl p-6 h-full"
                style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
              >
                <h3 className="font-bold mb-4 flex items-center gap-2 text-sm" style={{ color: "#F87171" }}>
                  <span>✗</span> {t.toolPage.watchOutFor}
                </h3>
                <ul className="space-y-3">
                  {cons.map((con) => (
                    <li key={con} className="flex gap-2 text-sm" style={{ color: "var(--dark-muted)" }}>
                      <span className="shrink-0 mt-0.5" style={{ color: "#F87171" }}>•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full review */}
      <section style={{ background: "var(--dark)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Review</p>
            <h2 className="text-2xl font-black mb-8" style={{ color: "var(--foreground)" }}>{t.toolPage.myFullReview}</h2>
            <div className="max-w-3xl">
              {review.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed mb-5" style={{ color: "var(--dark-muted)" }}>{para}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Try it, bottom CTA panel */}
      <section style={{ background: "var(--background)" }} className="py-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Try it</p>
              <p className="text-2xl font-black mb-2" style={{ color: "var(--foreground)" }}>
                {t.toolPage.readyToTry(tool.name)}
              </p>
              <p className="text-sm mb-8" style={{ color: "var(--dark-muted)" }}>{tool.pricing}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm"
                  style={{ background: "var(--accent)", color: "var(--dark)" }}
                >
                  {affiliateLabel} →
                </a>
                <Link
                  href={`/${locale}/tools`}
                  className="font-medium px-6 py-3.5 rounded-xl text-sm transition-colors"
                  style={{ border: "1px solid var(--dark-border)", color: "rgba(255,255,255,0.55)" }}
                >
                  {t.toolPage.seeAllTools}
                </Link>
              </div>
              {tool.hasAffiliate && (
                <p className="text-xs mt-6" style={{ color: "var(--dark-muted)" }}>{t.toolPage.affiliateDisclosure}</p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
