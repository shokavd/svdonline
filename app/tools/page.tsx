import Link from "next/link";
import { TOOLS, CATEGORIES } from "../../lib/tools";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[var(--accent)]" : "text-[var(--border)]"}>★</span>
      ))}
    </div>
  );
}

export const metadata = {
  title: "All Tools — SVD Online",
  description: "Every tool Shoka uses to run her online business. Honest reviews, real experience.",
};

export default function ToolsPage() {
  const byCategory = CATEGORIES.map((cat) => ({
    category: cat,
    tools: TOOLS.filter((t) => t.category === cat),
  })).filter((g) => g.tools.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">All tools</h1>
        <p className="text-[var(--muted)]">Every tool I use to run my online business — tested, paid for, and actually recommended.</p>
      </div>

      <div className="space-y-12">
        {byCategory.map(({ category, tools }) => (
          <div key={category}>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">{category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{tool.icon}</span>
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">{tool.name}</h3>
                    {tool.featured && (
                      <span className="ml-auto text-xs bg-orange-100 text-[var(--accent)] font-medium px-2 py-0.5 rounded-full">Top pick</span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-3 leading-relaxed">{tool.tagline}</p>
                  <div className="flex items-center justify-between">
                    <StarRating rating={tool.rating} />
                    <span className="text-xs text-[var(--muted)]">{tool.pricing.split("·")[0].trim()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
