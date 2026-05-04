import Link from "next/link";
import { notFound } from "next/navigation";
import { getTool, TOOLS } from "../../../lib/tools";

export async function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review — SVD Online`,
    description: tool.tagline,
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

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-[var(--muted)] mb-8">
        <Link href="/tools" className="hover:text-[var(--foreground)] transition-colors">All tools</Link>
        <span className="mx-2">›</span>
        <span>{tool.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{tool.icon}</span>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-[var(--foreground)]">{tool.name}</h1>
              {tool.featured && (
                <span className="text-xs bg-orange-100 text-[var(--accent)] font-medium px-2.5 py-1 rounded-full">Top pick</span>
              )}
            </div>
            <p className="text-[var(--muted)] mt-1">{tool.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <StarRating rating={tool.rating} />
          <span className="text-sm text-[var(--muted)]">{tool.rating}/5</span>
          <span className="w-px h-4 bg-[var(--border)]" />
          <span className="text-sm text-[var(--muted)]">{tool.pricing}</span>
          <span className="w-px h-4 bg-[var(--border)]" />
          <span className="text-sm text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] px-2 py-0.5 rounded-full">{tool.category}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--foreground)]">{tool.affiliateLabel}</p>
          <p className="text-sm text-[var(--muted)] mt-0.5">{tool.pricing}</p>
        </div>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap shrink-0"
        >
          {tool.affiliateLabel} →
        </a>
      </div>

      {/* Why I use it */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Why I use it</h2>
        <p className="text-[var(--muted)] leading-relaxed">{tool.whyIUseIt}</p>
      </section>

      {/* Pros & Cons */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Pros & cons</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
              <span>✓</span> What I like
            </h3>
            <ul className="space-y-2">
              {tool.pros.map((pro) => (
                <li key={pro} className="text-sm text-[var(--muted)] flex gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
              <span>✗</span> What to watch out for
            </h3>
            <ul className="space-y-2">
              {tool.cons.map((con) => (
                <li key={con} className="text-sm text-[var(--muted)] flex gap-2">
                  <span className="text-red-400 shrink-0 mt-0.5">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full review */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">My full review</h2>
        <div className="prose prose-stone max-w-none">
          {tool.review.split("\n\n").map((para, i) => (
            <p key={i} className="text-[var(--muted)] leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="border-t border-[var(--border)] pt-8">
        <p className="text-[var(--foreground)] font-semibold mb-2">Ready to try {tool.name}?</p>
        <p className="text-sm text-[var(--muted)] mb-4">{tool.pricing}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent)] text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            {tool.affiliateLabel} →
          </a>
          <Link
            href="/tools"
            className="border border-[var(--border)] text-[var(--foreground)] font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--card)] transition-colors text-sm"
          >
            See all tools
          </Link>
        </div>
        {tool.hasAffiliate && (
          <p className="text-xs text-[var(--muted)] mt-4">
            Affiliate link — I earn a small commission if you sign up. It costs you nothing extra, and I only recommend tools I actually use.
          </p>
        )}
      </div>
    </div>
  );
}
