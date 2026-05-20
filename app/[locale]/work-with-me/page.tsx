import { getT, type Locale } from "../../../lib/i18n";
import { ApplyButton } from "../../../components/ApplyButton";
import ScrollReveal from "../../../components/ScrollReveal";
import Tilt3D from "../../../components/Tilt3D";

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
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Work with me</p>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight text-white mb-6"
              style={{ color: "var(--foreground)" }}
            >
              {w.title}
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: "var(--dark-muted)" }}>{w.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {Object.values(w.badges).map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)", color: "var(--dark-muted)" }}
                >
                  <span style={{ color: "var(--accent2)" }}>✓</span> {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "var(--background)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl font-black mb-10" style={{ color: "var(--foreground)" }}>{w.howItWorksTitle}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-5 gap-4">
            {w.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div
                  className="dark-card rounded-xl p-5 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-2xl font-black mb-3" style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{step.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--dark-muted)" }}>{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section style={{ background: "var(--dark)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Packages</p>
            <h2 className="text-4xl font-black mb-3" style={{ color: "var(--foreground)" }}>{w.packagesTitle}</h2>
            <p className="text-base mb-2" style={{ color: "var(--dark-muted)" }}>{w.packagesSubtitle}</p>
            <p className="text-xs mb-12" style={{ color: "var(--dark-muted)", opacity: 0.7 }}>
              {locale === "nl" ? "Alle prijzen zijn exclusief BTW (21%)." : "All prices are excluding VAT (21%)."}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => {
              const details = w.packageDetails[pkg.id];
              return (
                <ScrollReveal key={pkg.id} delay={idx * 80}>
                  <Tilt3D className="h-full" intensity={5}>
                    <div
                      className={`rounded-2xl p-7 flex flex-col h-full ${pkg.accent ? "gradient-border-orange pkg-card-featured" : "dark-card"}`}
                      style={{
                        background: "var(--dark-card)",
                        border: pkg.accent ? undefined : "1px solid var(--dark-border)",
                      }}
                    >
                      {pkg.accent && (
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-4"
                          style={{ background: "rgba(255,96,53,0.15)", color: "var(--accent)" }}
                        >
                          {w.mostPopular}
                        </span>
                      )}

                      <div className="mb-5">
                        <h3 className="text-xl font-black mb-2" style={{ color: "var(--foreground)" }}>{pkg.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black" style={{ color: "var(--accent)" }}>{pkg.price}</span>
                          <span className="text-sm" style={{ color: "var(--dark-muted)" }}>· {pkg.deposit} deposit</span>
                        </div>
                        <div className="flex gap-3 mt-2 text-xs" style={{ color: "var(--dark-muted)" }}>
                          <span>⏱ {pkg.turnaround}</span>
                          <span>·</span>
                          <span>💬 {pkg.support} support</span>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--dark-muted)" }}>{details.description}</p>

                      <p className="text-xs font-semibold mb-2" style={{ color: "var(--foreground)" }}>{w.goodFor}</p>
                      <p className="text-xs mb-5" style={{ color: "var(--dark-muted)" }}>{details.goodFor}</p>

                      <p className="text-xs font-semibold mb-2" style={{ color: "var(--foreground)" }}>{w.included}</p>
                      <ul className="space-y-1.5 mb-5">
                        {details.includes.map((item) => (
                          <li key={item} className="flex gap-2 text-xs" style={{ color: "var(--dark-muted)" }}>
                            <span className="shrink-0" style={{ color: "var(--accent2)" }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-xs font-semibold mb-2" style={{ color: "var(--foreground)" }}>{w.notIncluded}</p>
                      <ul className="space-y-1.5 mb-7">
                        {details.notIncludes.map((item) => (
                          <li key={item} className="flex gap-2 text-xs" style={{ color: "var(--dark-muted)" }}>
                            <span className="shrink-0" style={{ color: "var(--dark-muted)" }}>✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <ApplyButton
                          locale={locale as Locale}
                          packageId={pkg.id}
                          packageName={pkg.name}
                          accent={pkg.accent}
                        />
                      </div>
                    </div>
                  </Tilt3D>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cancellation policy */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Policy</p>
              <h2 className="text-lg font-black mb-4" style={{ color: "var(--foreground)" }}>{w.cancellationTitle}</h2>
              <div className="space-y-3 text-sm" style={{ color: "var(--dark-muted)" }}>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>{w.cancellationBefore.title}:</strong>{" "}
                  {w.cancellationBefore.body}
                </p>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>{w.cancellationAfter.title}:</strong>{" "}
                  {w.cancellationAfter.body}
                </p>
                <p className="text-xs">{w.cancellationNote}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--dark)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-black mb-10" style={{ color: "var(--foreground)" }}>{w.faqTitle}</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {w.faq.map(({ q, a }, idx) => (
              <ScrollReveal key={q} delay={idx * 50}>
                <div
                  className="dark-card rounded-xl p-6"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dark-muted)" }}>{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "var(--background)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Ready?</p>
              <h2 className="text-4xl font-black mb-3" style={{ color: "var(--foreground)" }}>{w.ctaTitle}</h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "var(--dark-muted)" }}>{w.ctaSubtitle}</p>
              <a
                href="mailto:contact@svdonline.com"
                className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm inline-block"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {w.getInTouch}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
