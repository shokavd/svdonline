import Image from "next/image";
import Link from "next/link";
import { TOOLS } from "../../../lib/tools";
import { getT, type Locale } from "../../../lib/i18n";
import ScrollReveal from "../../../components/ScrollReveal";
import Tilt3D from "../../../components/Tilt3D";

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
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">About</p>
            <div className="flex flex-col sm:flex-row items-start gap-10">
              <div className="shrink-0">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden"
                  style={{ boxShadow: "0 0 0 3px var(--accent), 0 0 0 6px var(--dark)", outline: "none" }}
                >
                  <Image
                    src="/shoka.jpg"
                    alt="Shoka van Dooren"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1
                  className="text-5xl sm:text-6xl font-black leading-tight text-white mb-4"
                  style={{ color: "var(--foreground)" }}
                >
                  {a.title}
                </h1>
                <p className="text-lg max-w-2xl" style={{ color: "var(--dark-muted)" }}>{a.subtitle}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value props */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="flex flex-wrap gap-8 rounded-2xl p-8"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              {[
                { icon: "🌍", label: locale === "nl" ? "Wereldwijd bereikbaar" : "Working worldwide", desc: locale === "nl" ? "Klanten in Nederland en daarbuiten" : "Clients across the Netherlands and beyond" },
                { icon: "🔍", label: locale === "nl" ? "Geen betaalde samenwerkingen" : "Zero paid partnerships", desc: locale === "nl" ? "Elke review is volledig onafhankelijk" : "Every review is fully independent" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 flex-1 min-w-[180px]">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--dark-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content sections */}
      <section style={{ background: "var(--dark)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">

            <ScrollReveal delay={0}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="dark-card rounded-2xl p-8 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">What I do</p>
                  <h2 className="text-xl font-black mb-4" style={{ color: "var(--foreground)" }}>{a.whatIDoTitle}</h2>
                  <p className="leading-relaxed mb-3" style={{ color: "var(--dark-muted)" }}>{a.whatIDoBody1}</p>
                  <p className="leading-relaxed" style={{ color: "var(--dark-muted)" }}>{a.whatIDoBody2}</p>
                </div>
              </Tilt3D>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="dark-card rounded-2xl p-8 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Why I built this</p>
                  <h2 className="text-xl font-black mb-4" style={{ color: "var(--foreground)" }}>{a.whyBuiltTitle}</h2>
                  <p className="leading-relaxed mb-3" style={{ color: "var(--dark-muted)" }}>{a.whyBuiltBody1}</p>
                  <p className="leading-relaxed" style={{ color: "var(--dark-muted)" }}>{a.whyBuiltBody2}</p>
                </div>
              </Tilt3D>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="dark-card rounded-2xl p-8 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Affiliates</p>
                  <h2 className="text-xl font-black mb-4" style={{ color: "var(--foreground)" }}>{a.affiliateTitle}</h2>
                  <p className="leading-relaxed mb-3" style={{ color: "var(--dark-muted)" }}>{a.affiliateBody1}</p>
                  <p className="leading-relaxed" style={{ color: "var(--dark-muted)" }}>{a.affiliateBody2}</p>
                </div>
              </Tilt3D>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="dark-card rounded-2xl p-8 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Testing</p>
                  <h2 className="text-xl font-black mb-4" style={{ color: "var(--foreground)" }}>{a.howTestTitle}</h2>
                  <p className="leading-relaxed mb-3" style={{ color: "var(--dark-muted)" }}>{a.howTestBody1}</p>
                  <p className="leading-relaxed" style={{ color: "var(--dark-muted)" }}>{a.howTestBody2}</p>
                </div>
              </Tilt3D>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--background)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Explore</p>
              <h2 className="text-4xl font-black mb-3" style={{ color: "var(--foreground)" }}>{a.ctaTitle}</h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--dark-muted)" }}>{a.ctaSubtitle}</p>
              <Link
                href={`/${locale}/tools`}
                className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm inline-block"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {a.browseTools}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
