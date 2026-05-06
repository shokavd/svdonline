import Image from "next/image";
import Link from "next/link";
import { TOOLS } from "../../../lib/tools";
import { getT, type Locale } from "../../../lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return { title: t.meta.aboutTitle, description: t.meta.aboutDescription };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  const a = t.about;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
        <div className="shrink-0">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--background)]">
            <Image src="/shoka.jpg" alt="Shoka van Dooren" width={112} height={112} className="w-full h-full object-cover" priority />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">{a.title}</h1>
          <p className="text-[var(--muted)] leading-relaxed">{a.subtitle}</p>
        </div>
      </div>

      <div className="space-y-8 text-[var(--muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{a.whatIDoTitle}</h2>
          <p>{a.whatIDoBody1}</p>
          <p className="mt-3">{a.whatIDoBody2}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{a.whyBuiltTitle}</h2>
          <p>{a.whyBuiltBody1}</p>
          <p className="mt-3">{a.whyBuiltBody2}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{a.affiliateTitle}</h2>
          <p>{a.affiliateBody1}</p>
          <p className="mt-3">{a.affiliateBody2}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">{a.howTestTitle}</h2>
          <p>{a.howTestBody1}</p>
          <p className="mt-3">{a.howTestBody2}</p>
        </section>
      </div>

      <div className="grid grid-cols-3 gap-4 my-12 py-8 border-y border-[var(--border)]">
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">{TOOLS.length}</p>
          <p className="text-sm text-[var(--muted)] mt-1">{a.toolsReviewed}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">3+</p>
          <p className="text-sm text-[var(--muted)] mt-1">{a.yearsOnline}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">0</p>
          <p className="text-sm text-[var(--muted)] mt-1">{a.paidPlacements}</p>
        </div>
      </div>

      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">{a.ctaTitle}</h2>
        <p className="text-[var(--muted)] mb-4">{a.ctaSubtitle}</p>
        <Link href={`/${locale}/tools`} className="inline-block bg-[var(--accent)] text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
          {a.browseTools}
        </Link>
      </div>
    </div>
  );
}
