import type { Locale } from "../../../lib/i18n";

const content = {
  en: {
    title: "Welcome — let's get you set up",
    subtitle: "You're one step away from getting started. Here's what happens next.",
    trackATitle: "Comfortable doing this yourself?",
    trackADesc: "Follow the checklist below. It takes about 10 minutes.",
    trackBTitle: "Rather do this together?",
    trackBDesc: "Book a free 60-minute setup call and I'll walk you through every step live — no tech knowledge needed.",
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
        body: "Write down every tool and platform you currently use — even tools you use rarely. Email providers, project management, website, invoicing, social media, storage. We'll need access to the relevant ones.",
      },
      {
        number: "03",
        title: "Create any new accounts needed",
        body: "Your Project Agreement lists the tools we agreed on. If any are new to you, create a free account at each. Not sure how? Book the setup call — I'll do it with you.",
      },
      {
        number: "04",
        title: "Grant me access",
        body: "For each tool, add contact@svdonline.com as an admin, collaborator, or guest — depending on the platform. Common ones:\n• Notion → Settings → Members → Invite\n• Google Workspace → Admin console → Users\n• Shopify → Settings → Users and permissions\n• n8n → Settings → Users → Invite\n• Canva → Share → Invite",
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
      "I'll keep you updated at key milestones — no long silences.",
      "Delivery is counted in business days from your confirmed start date.",
      "You have contact@svdonline.com for questions — I reply within 24 hours on business days.",
    ],
    helpTitle: "Need help at any point?",
    helpBody: "Book your free setup call. We'll go through the checklist together, create accounts, set up access — whatever you need. No judgement, no rush.",
  },
  nl: {
    title: "Welkom — zo gaan we van start",
    subtitle: "Je bent één stap verwijderd van de start. Dit zijn de volgende stappen.",
    trackATitle: "Zelf aan de slag?",
    trackADesc: "Volg de checklist hieronder. Het duurt ongeveer 10 minuten.",
    trackBTitle: "Liever samen doen?",
    trackBDesc: "Boek een gratis setup-call van 60 minuten en ik loop alles stap voor stap met je door — geen technische kennis nodig.",
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
        body: "Schrijf op welke tools en platformen je gebruikt — ook tools die je zelden gebruikt. E-mailprovider, projectbeheer, website, facturatie, social media, opslag. We hebben toegang nodig tot de relevante onderdelen.",
      },
      {
        number: "03",
        title: "Maak eventuele nieuwe accounts aan",
        body: "In je Project Agreement staan de tools die we hebben afgesproken. Als je er nog geen account voor hebt, maak dan een gratis account aan. Weet je niet hoe? Boek de setup-call — dan doen we het samen.",
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
      "Ik houd je op de hoogte bij belangrijke mijlpalen — geen lange stiltes.",
      "De levertijd wordt geteld in werkdagen vanaf je bevestigde startdatum.",
      "Je bereikt me via contact@svdonline.com — ik reageer binnen 24 uur op werkdagen.",
    ],
    helpTitle: "Ergens hulp bij nodig?",
    helpBody: "Boek je gratis setup-call. Dan lopen we de checklist samen door, maken we accounts aan en regelen we de toegang — wat je ook nodig hebt. Geen oordeel, geen haast.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale) === "nl" ? "nl" : "en"];
  return { title: c.title, description: c.subtitle };
}

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale) === "nl" ? "nl" : "en"];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-3">{c.title}</h1>
        <p className="text-[var(--muted)] leading-relaxed">{c.subtitle}</p>
      </div>

      {/* Two tracks */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5">
          <p className="font-semibold text-[var(--foreground)] mb-2">{c.trackATitle}</p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">{c.trackADesc}</p>
        </div>
        <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-5">
          <p className="font-semibold text-[var(--foreground)] mb-2">{c.trackBTitle}</p>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{c.trackBDesc}</p>
          <a
            href="https://cal.eu/svdonline/onboarding-setup-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--accent)] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {c.bookCall}
          </a>
        </div>
      </div>

      {/* Checklist */}
      <h2 className="text-lg font-bold text-[var(--foreground)] mb-6">{c.checklistTitle}</h2>
      <div className="space-y-4 mb-12">
        {c.steps.map((step) => (
          <div key={step.number} className="flex gap-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 bg-[var(--accent-light)] rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-[var(--accent)]">{step.number}</span>
            </div>
            <div>
              <p className="font-semibold text-[var(--foreground)] mb-1">{step.title}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed whitespace-pre-line">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What to expect */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-8">
        <h2 className="font-bold text-[var(--foreground)] mb-4">{c.expectTitle}</h2>
        <ul className="space-y-2">
          {c.expects.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[var(--muted)]">
              <span className="text-green-600 shrink-0 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Help CTA */}
      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-6 text-center">
        <h2 className="font-bold text-[var(--foreground)] mb-2">{c.helpTitle}</h2>
        <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">{c.helpBody}</p>
        <a
          href="https://cal.eu/svdonline/onboarding-setup-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--accent)] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {c.bookCall}
        </a>
      </div>
    </div>
  );
}
