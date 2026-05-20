import type { Locale } from "../../../lib/i18n";
import ScrollReveal from "../../../components/ScrollReveal";
import Tilt3D from "../../../components/Tilt3D";

const content = {
  en: {
    title: "Welcome: let's get you set up",
    subtitle: "You're one step away from getting started. Here's what happens next.",
    trackATitle: "Comfortable doing this yourself?",
    trackADesc: "Follow the checklist below. It takes about 10 minutes.",
    trackBTitle: "Rather do this together?",
    trackBDesc: "Book a free 60-minute setup call and I'll walk you through every step live. No tech knowledge needed.",
    bookCall: "Book your free setup call →",
    checklistTitle: "Onboarding Checklist",
    steps: [
      {
        number: "01",
        title: "Pay your deposit",
        body: "If you haven't already, pay your deposit via the payment link in your Project Agreement email. Work begins once the payment is received.",
      },
      {
        number: "02",
        title: "Make a list of your tools",
        body: "Write down every tool and platform you currently use, including tools you use rarely. Email providers, project management, website, invoicing, social media, storage. We'll need access to the relevant ones.",
      },
      {
        number: "03",
        title: "Create any new accounts needed",
        body: "Your Project Agreement lists the tools we agreed on. If any are new to you, create a free account at each. Not sure how? Book the setup call and I'll do it with you.",
      },
      {
        number: "04",
        title: "Grant me access",
        body: "For each tool, add contact@svdonline.com as an admin, collaborator, or guest (depending on the platform). Common ones:\n• Notion → Settings → Members → Invite\n• Google Workspace → Admin console → Users\n• Shopify → Settings → Users and permissions\n• n8n → Settings → Users → Invite\n• Canva → Share → Invite",
      },
      {
        number: "05",
        title: "Send me a quick confirmation",
        body: 'Reply to your Project Agreement email with "Access granted" and list which tools I now have access to. I\'ll confirm your start date within one business day.',
      },
    ],
    expectTitle: "What to expect from here",
    expects: [
      "I'll confirm your start date by email within one business day of receiving access.",
      "I'll keep you updated at key milestones. No long silences.",
      "Delivery is counted in business days from your confirmed start date.",
      "You have contact@svdonline.com for questions. I reply within 24 hours on business days.",
    ],
    helpTitle: "Need help at any point?",
    helpBody: "Book your free setup call. We'll go through the checklist together, create accounts, and set up access. Whatever you need. No judgement, no rush.",
  },
  nl: {
    title: "Welkom: zo gaan we van start",
    subtitle: "Je bent één stap verwijderd van de start. Dit zijn de volgende stappen.",
    trackATitle: "Zelf aan de slag?",
    trackADesc: "Volg de checklist hieronder. Het duurt ongeveer 10 minuten.",
    trackBTitle: "Liever samen doen?",
    trackBDesc: "Boek een gratis setup-call van 60 minuten en ik loop alles stap voor stap met je door. Geen technische kennis nodig.",
    bookCall: "Boek je gratis setup-call →",
    checklistTitle: "Onboarding Checklist",
    steps: [
      {
        number: "01",
        title: "Betaal je aanbetaling",
        body: "Als je dat nog niet hebt gedaan, betaal dan je aanbetaling via de betaallink in je Project Agreement-e-mail. Het werk begint zodra de betaling is ontvangen.",
      },
      {
        number: "02",
        title: "Maak een overzicht van je tools",
        body: "Schrijf op welke tools en platformen je gebruikt, ook tools die je zelden gebruikt. E-mailprovider, projectbeheer, website, facturatie, social media, opslag. We hebben toegang nodig tot de relevante onderdelen.",
      },
      {
        number: "03",
        title: "Maak eventuele nieuwe accounts aan",
        body: "In je Project Agreement staan de tools die we hebben afgesproken. Als je er nog geen account voor hebt, maak dan een gratis account aan. Weet je niet hoe? Boek de setup-call, dan doen we het samen.",
      },
      {
        number: "04",
        title: "Geef mij toegang",
        body: "Voeg contact@svdonline.com toe als admin, medewerker of gast bij elke tool. Veelgebruikte voorbeelden:\n• Notion → Instellingen → Leden → Uitnodigen\n• Google Workspace → Beheerdersconsole → Gebruikers\n• Shopify → Instellingen → Gebruikers en rechten\n• n8n → Instellingen → Gebruikers → Uitnodigen\n• Canva → Delen → Uitnodigen",
      },
      {
        number: "05",
        title: "Stuur me een korte bevestiging",
        body: 'Beantwoord je Project Agreement-e-mail met "Toegang verleend" en vermeld welke tools ik nu kan bereiken. Ik bevestig je startdatum binnen één werkdag.',
      },
    ],
    expectTitle: "Wat je kunt verwachten",
    expects: [
      "Ik bevestig je startdatum per e-mail binnen één werkdag na ontvangst van toegang.",
      "Ik houd je op de hoogte bij belangrijke mijlpalen. Geen lange stiltes.",
      "De levertijd wordt geteld in werkdagen vanaf je bevestigde startdatum.",
      "Je bereikt me via contact@svdonline.com. Ik reageer binnen 24 uur op werkdagen.",
    ],
    helpTitle: "Ergens hulp bij nodig?",
    helpBody: "Boek je gratis setup-call. Dan lopen we de checklist samen door, maken we accounts aan en regelen we de toegang. Wat je ook nodig hebt. Geen oordeel, geen haast.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isNL = (locale as Locale) === "nl";
  const c = content[isNL ? "nl" : "en"];
  return {
    title: isNL ? "Onboarding | SVD Online" : "Onboarding | SVD Online",
    description: c.subtitle,
  };
}

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale) === "nl" ? "nl" : "en"];

  return (
    <div style={{ background: "var(--dark)" }}>

      {/* Hero */}
      <section style={{ background: "var(--dark)" }} className="pt-32 pb-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Onboarding</p>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight mb-6"
              style={{ color: "var(--foreground)" }}
            >
              {c.title}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--dark-muted)" }}>{c.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two tracks */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">

            <ScrollReveal delay={0}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="dark-card rounded-2xl p-7 h-full"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <p className="text-shimmer-orange text-xs font-semibold uppercase tracking-widest mb-3">Self-service</p>
                  <p className="font-black text-xl mb-3" style={{ color: "var(--foreground)" }}>{c.trackATitle}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dark-muted)" }}>{c.trackADesc}</p>
                </div>
              </Tilt3D>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <Tilt3D className="h-full" intensity={6}>
                <div
                  className="gradient-border-orange rounded-2xl p-7 h-full"
                  style={{ background: "var(--dark-card)" }}
                >
                  <p className="text-shimmer-orange text-xs font-semibold uppercase tracking-widest mb-3">Guided call</p>
                  <p className="font-black text-xl mb-3" style={{ color: "var(--foreground)" }}>{c.trackBTitle}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--dark-muted)" }}>{c.trackBDesc}</p>
                  <a
                    href="https://cal.eu/svdonline/onboarding-setup-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow font-bold px-6 py-3 rounded-xl text-sm inline-block"
                    style={{ background: "var(--accent)", color: "var(--dark)" }}
                  >
                    {c.bookCall}
                  </a>
                </div>
              </Tilt3D>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Checklist */}
      <section style={{ background: "var(--dark)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Steps</p>
            <h2 className="text-4xl font-black mb-10" style={{ color: "var(--foreground)" }}>{c.checklistTitle}</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {c.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 60}>
                <div
                  className="dark-card flex gap-5 rounded-xl p-6"
                  style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,96,53,0.12)" }}
                  >
                    <span className="text-sm font-black" style={{ color: "var(--accent)" }}>{step.number}</span>
                  </div>
                  <div>
                    <p className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>{step.title}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--dark-muted)" }}>{step.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: "var(--background)" }} className="py-16 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-3">Expectations</p>
              <h2 className="text-2xl font-black mb-6" style={{ color: "var(--foreground)" }}>{c.expectTitle}</h2>
              <ul className="space-y-3">
                {c.expects.map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--dark-muted)" }}>
                    <span className="shrink-0 mt-0.5 font-bold" style={{ color: "var(--accent2)" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Help CTA */}
      <section style={{ background: "var(--dark)" }} className="py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}
            >
              <p className="text-shimmer text-xs font-semibold uppercase tracking-widest mb-4">Support</p>
              <h2 className="text-4xl font-black mb-3" style={{ color: "var(--foreground)" }}>{c.helpTitle}</h2>
              <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "var(--dark-muted)" }}>{c.helpBody}</p>
              <a
                href="https://cal.eu/svdonline/onboarding-setup-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm inline-block"
                style={{ background: "var(--accent)", color: "var(--dark)" }}
              >
                {c.bookCall}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
