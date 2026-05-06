import { getT, type Locale } from "../../../lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return { title: t.meta.workWithMeTitle, description: t.meta.workWithMeDescription };
}

const packages = [
  { id: "spark" as const, name: "Spark", price: "€497", deposit: "€249", turnaround: "5 business days", support: "14 days", accent: false },
  { id: "frame" as const, name: "Frame", price: "€897", deposit: "€449", turnaround: "7 business days", support: "21 days", accent: false },
  { id: "build" as const, name: "Build", price: "€1,497", deposit: "€749", turnaround: "10 business days", support: "45 days", accent: true },
  { id: "fullStack" as const, name: "Full Stack", price: "€3,997", deposit: "€1,999", turnaround: "4 weeks", support: "60 days", accent: false },
];

export default async function WorkWithMePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  const w = t.workWithMe;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      <div className="mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 leading-tight">{w.title}</h1>
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">{w.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          {Object.values(w.badges).map((badge) => (
            <span key={badge} className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] px-3 py-1.5 rounded-full">
              <span className="text-green-600">✓</span> {badge}
            </span>
          ))}
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">{w.howItWorksTitle}</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          {w.steps.map((step, i) => (
            <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <p className="text-2xl font-bold text-[var(--accent)] mb-2">{String(i + 1).padStart(2, "0")}</p>
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">{step.title}</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">{w.packagesTitle}</h2>
        <p className="text-[var(--muted)] mb-8 text-sm">{w.packagesSubtitle}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {packages.map((pkg) => {
            const details = w.packageDetails[pkg.id];
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-6 flex flex-col ${
                  pkg.accent
                    ? "border-[var(--accent)] bg-[var(--accent-light)]"
                    : "border-[var(--border)] bg-[var(--card)]"
                }`}
              >
                {pkg.accent && (
                  <span className="text-xs font-semibold text-[var(--accent)] bg-orange-100 px-2.5 py-1 rounded-full w-fit mb-3">
                    {w.mostPopular}
                  </span>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-[var(--accent)]">{pkg.price}</span>
                    <span className="text-sm text-[var(--muted)]">· {pkg.deposit} deposit</span>
                  </div>
                  <div className="flex gap-3 mt-2 text-xs text-[var(--muted)]">
                    <span>⏱ {pkg.turnaround}</span>
                    <span>·</span>
                    <span>💬 {pkg.support} support</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{details.description}</p>

                <p className="text-xs font-semibold text-[var(--foreground)] mb-2">{w.goodFor}</p>
                <p className="text-xs text-[var(--muted)] mb-4">{details.goodFor}</p>

                <p className="text-xs font-semibold text-[var(--foreground)] mb-2">{w.included}</p>
                <ul className="space-y-1.5 mb-4">
                  {details.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-[var(--muted)]">
                      <span className="text-green-600 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-semibold text-[var(--foreground)] mb-2">{w.notIncluded}</p>
                <ul className="space-y-1.5 mb-6">
                  {details.notIncludes.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-[var(--muted)]">
                      <span className="text-[var(--muted)] shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={`mailto:contact@svdonline.com?subject=Application: ${pkg.name} package`}
                    className={`block text-center font-semibold text-sm px-5 py-3 rounded-lg transition-opacity hover:opacity-90 ${
                      pkg.accent
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--foreground)] text-white"
                    }`}
                  >
                    {w.apply(pkg.name)}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
        <h2 className="text-base font-bold text-[var(--foreground)] mb-3">{w.cancellationTitle}</h2>
        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p><strong className="text-[var(--foreground)]">{w.cancellationBefore.title}:</strong> {w.cancellationBefore.body}</p>
          <p><strong className="text-[var(--foreground)]">{w.cancellationAfter.title}:</strong> {w.cancellationAfter.body}</p>
          <p className="text-xs">{w.cancellationNote}</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">{w.faqTitle}</h2>
        <div className="space-y-4">
          {w.faq.map(({ q, a }) => (
            <div key={q} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
              <p className="font-semibold text-[var(--foreground)] text-sm mb-2">{q}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">{w.ctaTitle}</h2>
        <p className="text-[var(--muted)] mb-4 text-sm">{w.ctaSubtitle}</p>
        <a
          href="mailto:contact@svdonline.com"
          className="inline-block bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          {w.getInTouch}
        </a>
      </div>

    </div>
  );
}
