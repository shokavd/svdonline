import Link from "next/link";
import { TOOLS, CATEGORIES } from "../../../lib/tools";
import { getT, type Locale } from "../../../lib/i18n";
import { localeAlternates } from "../../../lib/seo";
import ScrollReveal from "../../../components/ScrollReveal";
import Tilt3D from "../../../components/Tilt3D";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "var(--accent2)" : "var(--dark-border)" }}>★</span>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return {
    title: t.meta.toolsTitle,
    description: t.meta.toolsDescription,
    alternates: localeAlternates(locale, "/tools"),
  };
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);

  const byCategory = CATEGORIES.map((cat) => ({
    category: cat,
    tools: TOOLS.filter((tool) => tool.category === cat),
  })).filter((g) => g.tools.length > 0);

  return (
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Tools</p>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight mb-6"
              style={{ color: "var(--foreground)" }}
            >
              {t.tools.pageTitle}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--dark-muted)" }}>{t.tools.pageSubtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools by category */}
      <section style={{ background: "var(--background)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-16">
          {byCategory.map(({ category, tools }, catIdx) => (
            <div key={category}>
              <ScrollReveal delay={catIdx * 40}>
                <h2
                  className="text-lg font-black mb-6 pb-3"
                  style={{
                    color: "var(--foreground)",
                    borderBottom: "1px solid var(--dark-border)",
                  }}
                >
                  {t.tools.categories[category]}
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool, toolIdx) => {
                  const loc = locale === "nl" && tool.nl ? tool.nl : null;
                  return (
                    <ScrollReveal key={tool.slug} delay={toolIdx * 60}>
                      <Tilt3D intensity={7}>
                        <Link
                          href={`/${locale}/tools/${tool.slug}`}
                          className="dark-card rounded-xl p-5 flex flex-col h-full group block"
                          style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xl">{tool.icon}</span>
                            <h3
                              className="font-semibold transition-colors"
                              style={{ color: "var(--foreground)" }}
                            >
                              {tool.name}
                            </h3>
                            {tool.featured && (
                              <span
                                className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
                                style={{ background: "rgba(255,96,53,0.15)", color: "var(--accent)" }}
                              >
                                {t.tools.topPick}
                              </span>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--dark-muted)" }}>
                            {loc ? loc.tagline : tool.tagline}
                          </p>
                          <div className="flex items-center justify-between">
                            <StarRating rating={tool.rating} />
                            <span className="text-xs" style={{ color: "var(--dark-muted)" }}>
                              {tool.pricing.split("·")[0].trim()}
                            </span>
                          </div>
                        </Link>
                      </Tilt3D>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
