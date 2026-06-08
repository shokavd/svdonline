import { getT, type Locale } from "../../../lib/i18n";
import { localeAlternates } from "../../../lib/seo";
import ScrollReveal from "../../../components/ScrollReveal";
import { ContactForm } from "../../../components/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isNL = locale === "nl";
  return {
    title: isNL ? "Contact | SVD Online" : "Contact | SVD Online",
    description: isNL
      ? "Stuur Shoka een bericht. Vragen over tools, automatisering of samenwerking."
      : "Send Shoka a message. Questions about tools, automation, or working together.",
    alternates: localeAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isNL = locale === "nl";

  return (
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-16 px-6 lg:px-14">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-4" style={{ color: "var(--foreground)" }}>
              {isNL ? "Stuur een bericht" : "Get in touch"}
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--dark-muted)" }}>
              {isNL
                ? "Vragen over een tool, hoe we kunnen samenwerken, of wil je gewoon hallo zeggen? Ik lees alles en reageer binnen twee werkdagen."
                : "Questions about a tool, how we might work together, or just want to say hello? I read everything and reply within two business days."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-3xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <ContactForm locale={locale} />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-6">
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-shimmer">Email</p>
                    <a href="mailto:contact@svdonline.com"
                      className="text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: "var(--accent)" }}>
                      contact@svdonline.com
                    </a>
                    <p className="text-xs mt-2" style={{ color: "var(--dark-muted)" }}>
                      {isNL ? "Reactie binnen 2 werkdagen." : "Response within 2 business days."}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-shimmer">
                      {isNL ? "Direct starten?" : "Ready to start?"}
                    </p>
                    <p className="text-sm mb-4" style={{ color: "var(--dark-muted)" }}>
                      {isNL
                        ? "Wil je direct een project starten? Bekijk de pakketten en dien een intakeformulier in."
                        : "Looking to start a project? Browse the packages and submit an intake form."}
                    </p>
                    <a
                      href={`/${locale}/work-with-me`}
                      className="inline-block btn-glow font-semibold px-5 py-2.5 rounded-xl text-sm"
                      style={{ background: "var(--accent)", color: "#fff" }}
                    >
                      {isNL ? "Bekijk pakketten →" : "See packages →"}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
