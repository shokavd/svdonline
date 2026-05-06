import Link from "next/link";
import { TOOLS, CATEGORIES } from "../../../lib/tools";
import { getT, type Locale } from "../../../lib/i18n";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[var(--accent)]" : "text-[var(--border)]"}>★</span>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return { title: t.meta.toolsTitle, description: t.meta.toolsDescription };
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);

  const byCategory = CATEGORIES.map((cat) => ({
    category: cat,
    tools: TOOLS.filter((tool) => tool.category === cat),
  })).filter((g) => g.tools.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">{t.tools.pageTitle}</h1>
        <p className="text-[var(--muted)]">{t.tools.pageSubtitle}</p>
      </div>

      <div className="space-y-12">
        {byCategory.map(({ category, tools }) => (
          <div key={category}>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
              {t.tools.categories[category]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => {
                const loc = locale === "nl" && tool.nl ? tool.nl : null;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${locale}/tools/${tool.slug}`}
                    className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{tool.icon}</span>
                      <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">{tool.name}</h3>
                      {tool.featured && (
                        <span className="ml-auto text-xs bg-orange-100 text-[var(--accent)] font-medium px-2 py-0.5 rounded-full">{t.tools.topPick}</span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted)] mb-3 leading-relaxed">{loc ? loc.tagline : tool.tagline}</p>
                    <div className="flex items-center justify-between">
                      <StarRating rating={tool.rating} />
                      <span className="text-xs text-[var(--muted)]">{tool.pricing.split("·")[0].trim()}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
