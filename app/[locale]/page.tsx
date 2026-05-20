import Image from "next/image";
import Link from "next/link";
import { getFeaturedTools, TOOLS } from "../../lib/tools";
import { getT, type Locale } from "../../lib/i18n";
import HeroBackground from "../../components/HeroBackground";
import { ScrambleWord } from "../../components/ScrambleWord";
import Tilt3D from "../../components/Tilt3D";
import ScrollReveal from "../../components/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
    openGraph: {
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
      url: `https://svdonline.com/${locale}`,
      siteName: "SVD Online",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://svdonline.com/#shoka",
      name: "Shoka van Dooren",
      url: "https://svdonline.com",
      jobTitle: "Automation Specialist & Virtual Assistant",
      knowsAbout: ["n8n automation", "AI tools", "workflow automation", "business systems"],
      address: { "@type": "PostalAddress", addressCountry: "NL" },
      email: "contact@svdonline.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://svdonline.com/#website",
      url: "https://svdonline.com",
      name: "SVD Online",
      description: "AI automation workflows and honest tool reviews by Shoka van Dooren",
      author: { "@id": "https://svdonline.com/#shoka" },
      inLanguage: ["en", "nl"],
    },
    {
      "@type": "Service",
      "@id": "https://svdonline.com/#automation-service",
      name: "n8n Automation Workflows",
      provider: { "@id": "https://svdonline.com/#shoka" },
      serviceType: "Business Automation",
      areaServed: "Worldwide",
      url: "https://svdonline.com/en/work-with-me",
      offers: [
        { "@type": "Offer", name: "Spark", price: "497", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Frame", price: "897", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Build", price: "1497", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Full Stack", price: "3997", priceCurrency: "EUR" },
      ],
    },
  ],
};

const MARQUEE_ITEMS = [
  "n8n", "Claude AI", "Notion", "Airtable", "Zapier", "Make",
  "Stripe", "Google", "Instagram", "Canva", "Hostinger", "Mollie", "Moneybird",
];

const PACKAGES = [
  { name: "Spark",      price: "€497",   meta: "5 days · 14d support",  desc: "One focused workflow, built and delivered fast." },
  { name: "Frame",      price: "€897",   meta: "7 days · 21d support",  desc: "Multiple workflows, one cohesive system." },
  { name: "Build",      price: "€1,497", meta: "10 days · 45d support", desc: "Full automation system, everything connected.", featured: true },
  { name: "Full Stack", price: "€3,997", meta: "4 weeks · 60d support", desc: "Complete transformation: strategy, build, and ongoing support.", wide: true },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "var(--accent)" : "var(--border)" }}>★</span>
      ))}
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale as Locale);
  const featured = getFeaturedTools();

  return (
    <div style={{ background: "var(--dark)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════════════════════════════════
          HERO — particles, scramble, photo, stats
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden px-6 lg:px-14 pt-6 pb-10"
        style={{ background: "var(--dark)" }}>

        {/* Dot grid ripple */}
        <HeroBackground />

        {/* Ambient glow blobs */}
        <div className="glow-blob absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,45,138,0.10) 0%, transparent 70%)" }} />
        <div className="glow-blob2 absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,179,0,0.07) 0%, transparent 70%)" }} />

        {/* Top meta bar */}
        <div className="relative z-10 flex items-center justify-between pt-20"
          style={{ color: "var(--dark-muted)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <span>AI Automation · Tool Reviews</span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
            Available for new projects
          </span>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

            {/* Scrambling headline */}
            <div className="flex-1">
              <h1 className="font-black leading-[0.88] tracking-tight text-white uppercase"
                style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}>
                <ScrambleWord text="AUTOMATE." delay={100} className="block" />
                <ScrambleWord text="REVIEW." delay={600}
                  className="block"
                  style={{ color: "var(--accent)", paddingLeft: "clamp(1.5rem,5vw,5rem)" } as React.CSSProperties} />
                <ScrambleWord text="SCALE." delay={1100} className="block" />
              </h1>

              <p className="mt-8 text-base sm:text-lg leading-relaxed max-w-md"
                style={{ color: "var(--dark-muted)" }}>
                I build n8n automation workflows and review the tools that actually move the needle. Tested, honest, no sponsored nonsense.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href={`/${locale}/work-with-me`}
                  className="btn-glow inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm"
                  style={{ background: "var(--accent)", color: "#fff" }}>
                  Work with me →
                </Link>
                <Link href={`/${locale}/tools`}
                  className="btn-ghost inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl text-sm">
                  Browse tools
                </Link>
              </div>
            </div>

            {/* Photo with gradient border */}
            <div className="shrink-0 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="gradient-border rounded-2xl -rotate-2 shadow-2xl overflow-hidden"
                  style={{ width: "clamp(180px,22vw,260px)", height: "clamp(220px,28vw,320px)" }}>
                  <Image
                    src="/shoka.jpg"
                    alt="Shoka van Dooren"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating accent badge */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "0 0 24px rgba(255,45,138,0.55)",
                  }}>
                  S
                </div>
              </div>
            </div>
          </div>

          {/* Value propositions */}
          <div className="flex flex-wrap gap-6 mt-14">
            {[
              { icon: "⚡", label: "5–10 day delivery", desc: "From intake to working automation" },
              { icon: "🔍", label: "100% independent reviews", desc: "No paid partnerships, ever" },
              { icon: "🛡", label: "Support included", desc: "Up to 60 days post-delivery" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--dark-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex items-center gap-3 text-[11px] uppercase tracking-widest"
          style={{ color: "var(--dark-muted)" }}>
          <span className="block w-8 h-px" style={{ background: "var(--dark-muted)" }} />
          Scroll to explore
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden py-5"
        style={{ borderTop: "1px solid var(--dark-border)", borderBottom: "1px solid var(--dark-border)", background: "var(--dark-card)" }}>
        <div className="animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-5 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "var(--dark-muted)" }}>
                  {item}
                  <span style={{ color: "var(--accent)", opacity: 0.6 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SERVICES — glassmorphism + 3D tilt bento
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-14 relative" style={{ background: "var(--dark)" }}>
        {/* Colour atmosphere */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(255,45,138,0.09) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 100%, rgba(255,179,0,0.07) 0%, transparent 60%)" }} />
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 relative z-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-shimmer">Services</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white">What I build</h2>
            </div>
            <Link href={`/${locale}/work-with-me`}
              className="hidden sm:block text-sm font-medium transition-colors"
              style={{ color: "var(--dark-muted)" }}>
              All packages →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
          {/* Build — featured large card */}
          <ScrollReveal className="sm:col-span-2" delay={100}>
            <Tilt3D className="h-full" intensity={8}>
              <Link href={`/${locale}/work-with-me`}
                className="svc-card gradient-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative overflow-hidden"
                style={{
                  background: "rgba(255,45,138,0.12)",
                  backdropFilter: "blur(20px)",
                  minHeight: 380,
                }}>
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(255,45,138,0.08) 0%, transparent 60%)" }} />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,45,138,0.14)", color: "var(--accent)" }}>
                    Most popular
                  </span>
                  <span className="text-xs" style={{ color: "var(--dark-muted)" }}>10 business days</span>
                </div>

                <div className="relative mt-auto pt-16">
                  <h3 className="text-6xl font-black text-white mb-3 leading-none">Build</h3>
                  <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "var(--dark-muted)" }}>
                    Full automation system with multiple workflows, integrations, and everything connected end-to-end.
                  </p>
                  <div className="flex items-end gap-3 mb-8">
                    <span className="text-5xl font-black" style={{ color: "var(--accent)" }}>€1,497</span>
                    <span className="mb-2 text-sm" style={{ color: "var(--dark-muted)" }}>· €749 deposit</span>
                  </div>
                  <span className="btn-glow inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                    style={{ background: "var(--accent)", color: "#fff" }}>
                    Apply now →
                  </span>
                </div>
              </Link>
            </Tilt3D>
          </ScrollReveal>

          {/* Spark + Frame stacked */}
          <div className="flex flex-col gap-4">
            {[
              { name: "Spark", price: "€497",  meta: "5 days · 14d support",  desc: "One focused workflow, fast.", delay: 150 },
              { name: "Frame", price: "€897",  meta: "7 days · 21d support",  desc: "Multiple workflows, one system.", delay: 200 },
            ].map((pkg) => (
              <ScrollReveal key={pkg.name} delay={pkg.delay} className="flex-1">
                <Tilt3D className="h-full" intensity={12}>
                  <Link href={`/${locale}/work-with-me`}
                    className="svc-card-sm gradient-border rounded-2xl p-6 flex flex-col h-full group transition-all duration-300"
                    style={{
                      background: "rgba(255,179,0,0.08)",
                      backdropFilter: "blur(16px)",
                      minHeight: 180,
                    }}>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[var(--accent)] transition-colors">{pkg.name}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--dark-muted)" }}>{pkg.desc}</p>
                    <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--dark-border)" }}>
                      <p className="text-3xl font-black text-white">{pkg.price}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--dark-muted)" }}>{pkg.meta}</p>
                    </div>
                  </Link>
                </Tilt3D>
              </ScrollReveal>
            ))}
          </div>

          {/* Full Stack wide */}
          <ScrollReveal className="sm:col-span-3" delay={250}>
            <Tilt3D intensity={5}>
              <Link href={`/${locale}/work-with-me`}
                className="svc-card-wide gradient-border rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group transition-all duration-300"
                style={{ background: "rgba(255,179,0,0.10)", backdropFilter: "blur(16px)" }}>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--accent)" }}>Complete package</span>
                  <h3 className="text-3xl font-black text-white mt-1 mb-2 group-hover:text-[var(--accent)] transition-colors">Full Stack</h3>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--dark-muted)" }}>
                    Strategy, build, integrations, training, and 60 days of support. Everything, done properly.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="text-5xl font-black" style={{ color: "var(--accent)" }}>€3,997</p>
                  <p className="text-xs mt-1" style={{ color: "var(--dark-muted)" }}>4 weeks · 60 days support</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold" style={{ color: "var(--accent)" }}>
                    See what&apos;s included →
                  </span>
                </div>
              </Link>
            </Tilt3D>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOCIAL PROOF — founding clients
      ══════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-14" style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              {locale === "nl" ? "Open voor eerste klanten" : "Now taking first clients"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "var(--foreground)" }}>
              {locale === "nl" ? "Wat je van mij krijgt" : "What working with me looks like"}
            </h2>
            <p className="text-base max-w-xl mb-14" style={{ color: "var(--muted)" }}>
              {locale === "nl"
                ? "Geen portfolio van twintig klanten. Nog niet. Maar hier is wat je wel krijgt als je nu instapt."
                : "No portfolio of twenty clients yet. But here's exactly what you get by coming in early."}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: "⚡",
                title: locale === "nl" ? "Directe toegang tot mij" : "Direct access to me",
                body: locale === "nl"
                  ? "Geen projectmanager, geen handoffs. Elk besluit, elke vraag en elk deliverable loopt via mij persoonlijk."
                  : "No project manager, no handoffs. Every decision, every question, and every deliverable runs through me personally.",
              },
              {
                icon: "💰",
                title: locale === "nl" ? "Founding-tarieven" : "Founding client pricing",
                body: locale === "nl"
                  ? "Mijn huidige tarieven weerspiegelen waar ik nu sta, niet waar ik naartoe ga. Zodra mijn agenda volloopt, gaan de prijzen omhoog."
                  : "My current rates reflect where I am, not where I'm going. Once my calendar fills up, prices go up. And they won't come back down.",
              },
              {
                icon: "🔧",
                title: locale === "nl" ? "Jij helpt de dienst vormgeven" : "You help shape the service",
                body: locale === "nl"
                  ? "Eerste klanten hebben het meeste gewicht. Ik neem feedback serieus, itereer snel en zorg ervoor dat het écht werkt."
                  : "First clients carry the most weight. I take feedback seriously, iterate fast, and make sure it actually works for your specific situation.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div
                  className="dark-card rounded-2xl p-7 h-full"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <span className="text-2xl block mb-4">{item.icon}</span>
                  <h3 className="font-black text-lg mb-3" style={{ color: "var(--foreground)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240}>
            <div className="mt-10 text-center">
              <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
                {locale === "nl"
                  ? "Klaar om de eerste te zijn die dit uitprobeert?"
                  : "Ready to be among the first to try this?"}
              </p>
              <a
                href={`/${locale}/work-with-me`}
                className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm inline-block"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {locale === "nl" ? "Bekijk de pakketten →" : "See the packages →"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TOOLS — scroll reveal cards on light bg
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-14" style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Tested &amp; honest</p>
                <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: "var(--foreground)" }}>Top picks</h2>
              </div>
              <Link href={`/${locale}/tools`} className="hidden sm:block text-sm font-medium transition-colors" style={{ color: "var(--muted)" }}>
                All {TOOLS.length} tools →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((tool, i) => {
              const loc = locale === "nl" && tool.nl ? tool.nl : null;
              return (
                <ScrollReveal key={tool.slug} delay={i * 80}>
                  <Tilt3D intensity={8}>
                    <Link href={`/${locale}/tools/${tool.slug}`}
                      className="tool-card group flex flex-col rounded-2xl p-5 h-full"
                      style={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                      }}>
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl">{tool.icon}</span>
                        <StarRating rating={tool.rating} />
                      </div>
                      <h3 className="font-bold mb-1 transition-colors" style={{ color: "var(--foreground)" }}>
                        {tool.name}
                      </h3>
                      <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                        {loc ? loc.tagline : tool.tagline}
                      </p>
                      <p className="text-xs font-medium mt-4 pt-3" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>
                        {tool.pricing}
                      </p>
                    </Link>
                  </Tilt3D>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — big type + glow
      ══════════════════════════════════════════ */}
      <section className="relative py-32 sm:py-44 px-6 lg:px-14 overflow-hidden" style={{ background: "var(--dark)" }}>
        {/* Glow behind text */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(255,45,138,0.12) 0%, transparent 65%)" }} />

        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-shimmer">Ready to automate?</p>
          <h2 className="font-black text-white leading-[0.9] tracking-tight mb-12"
            style={{ fontSize: "clamp(3rem,9vw,8rem)" }}>
            Let&apos;s build<br />
            <span style={{ color: "var(--accent)" }}>something.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/work-with-me`}
              className="btn-glow font-bold px-8 py-4 rounded-xl text-sm"
              style={{ background: "var(--accent)", color: "#fff" }}>
              Work with me →
            </Link>
            <a href="mailto:contact@svdonline.com"
              className="btn-ghost font-medium px-8 py-4 rounded-xl text-sm">
              Send an email
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
