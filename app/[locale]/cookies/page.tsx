import ScrollReveal from "../../../components/ScrollReveal";
import { localeAlternates } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";
  return {
    title: isNL ? "Cookiebeleid | SVD Online" : "Cookie Policy | SVD Online",
    alternates: localeAlternates(locale, "/cookies"),
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";

  const copy = {
    label: isNL ? "Juridisch" : "Legal",
    title: isNL ? "Cookiebeleid" : "Cookie Policy",
    updated: isNL ? "Laatst bijgewerkt: mei 2026" : "Last updated: May 2026",
    sections: isNL
      ? [
          {
            heading: "De korte versie",
            body: (
              <>
                SVD Online maakt geen gebruik van trackingcookies,
                advertentiecookies of externe analysediensten die cookies in
                uw browser plaatsen. Dit is een bewuste ontwerpkeuze: uw
                surfgedrag wordt niet gevolgd of bijgehouden.
              </>
            ),
          },
          {
            heading: "Wat is een cookie?",
            body: (
              <>
                Een cookie is een klein tekstbestand dat een website in uw
                browser opslaat. Cookies kunnen voor veel doeleinden worden
                gebruikt, van het bijhouden van uw inlogstatus tot het
                volgen van uw gedrag op het web voor advertentiedoeleinden.
                Deze site maakt gebruik van geen van beide.
              </>
            ),
          },
          {
            heading: "Themavoorkeur (localStorage, geen cookie)",
            body: (
              <>
                Als u het lichte of donkere thema op deze site instelt, wordt
                uw voorkeur opgeslagen in de localStorage van uw browser, niet
                in een cookie. localStorage-gegevens verlaten uw apparaat nooit
                en worden niet naar een server verzonden. Ze worden alleen
                gebruikt om uw weergavevoorkeur bij uw volgende bezoek te
                onthouden.
              </>
            ),
          },
          {
            heading: "Inzendingen via het intakeformulier",
            body: (
              <>
                Wanneer u het intakeformulier invult, worden de gegevens die u
                invoert (naam, e-mailadres, projectomschrijving) rechtstreeks
                naar een n8n-webhook verzonden voor verwerking. Dit is een
                functionele gegevensverzending; er wordt geen cookie ingesteld
                als onderdeel van dit proces. Zie het{" "}
                <a href="../privacy" style={{ color: "var(--accent)" }}>
                  Privacybeleid
                </a>{" "}
                voor volledige informatie over hoe deze gegevens worden
                verwerkt.
              </>
            ),
          },
          {
            heading: "Hostinginfrastructuur",
            body: (
              <>
                Deze website wordt gehost op Hostinger. Zoals bij elke
                webhost kan de infrastructuur van Hostinger
                standaard sessie- of beveiligingscookies instellen als
                onderdeel van de normale werking van het web, bijvoorbeeld
                om verbindingen te beheren of botverkeer te beperken. Dit
                zijn cookies op infrastructuurniveau die niet worden gebruikt
                om u als individu te identificeren of te volgen. SVD Online
                heeft geen toegang tot of controle over de gegevens die deze
                cookies kunnen bevatten.
              </>
            ),
          },
          {
            heading: "Geen Google Analytics, geen advertentienetwerken",
            body: (
              <>
                Er zijn geen Google Analytics, Facebook Pixel, TikTok Pixel,
                Hotjar, Clarity of vergelijkbare tools op deze website
                geinstalleerd. Geen enkel advertentienetwerk ontvangt gegevens
                van uw bezoek aan deze site.
              </>
            ),
          },
          {
            heading: "Cookies en localStorage wissen",
            body: (
              <>
                U kunt cookies of localStorage-gegevens die door deze site zijn
                ingesteld, wissen via uw browserinstellingen. Ga in de meeste
                browsers naar Instellingen &rarr; Privacy en beveiliging &rarr;
                Browsegegevens wissen en selecteer &ldquo;Cookies en
                sitegegevens&rdquo; en/of &ldquo;Gecachte afbeeldingen en
                bestanden&rdquo;. U kunt ook sitespecifieke gegevens bekijken
                en verwijderen door Ontwikkelaarstools (F12) te openen en naar
                Toepassing &rarr; Opslag te navigeren.
              </>
            ),
          },
          {
            heading: "Vragen",
            body: (
              <>
                Heeft u vragen over hoe deze site omgaat met uw gegevens?
                Stuur een e-mail naar{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                .
              </>
            ),
          },
        ]
      : [
          {
            heading: "The short version",
            body: (
              <>
                SVD Online does not use tracking cookies, advertising cookies,
                or any third-party analytics that place cookies in your browser.
                This is an intentional design choice: your browsing behaviour
                is not monitored or collected.
              </>
            ),
          },
          {
            heading: "What is a cookie?",
            body: (
              <>
                A cookie is a small text file stored in your browser by a
                website. Cookies can be used for many purposes, from keeping
                you logged in to tracking your behaviour across the web for
                advertising. This site uses neither.
              </>
            ),
          },
          {
            heading: "Theme preference (localStorage, not a cookie)",
            body: (
              <>
                If you toggle the light/dark theme on this site, your preference
                is stored in your browser&apos;s localStorage, not in a cookie.
                localStorage data never leaves your device and is not sent to
                any server. It is used only to remember your display preference
                on your next visit.
              </>
            ),
          },
          {
            heading: "Intake form submissions",
            body: (
              <>
                When you submit the intake form, the data you enter (name,
                email, project brief) is sent directly to an n8n webhook for
                processing. This is a functional data submission; no cookie is
                set as part of this process. See the{" "}
                <a href="../privacy" style={{ color: "var(--accent)" }}>
                  Privacy Policy
                </a>{" "}
                for full details on how that data is handled.
              </>
            ),
          },
          {
            heading: "Hosting infrastructure",
            body: (
              <>
                This website is hosted on Hostinger. As with any web host,
                Hostinger&apos;s infrastructure may set basic server-side
                session or security cookies as part of standard web operations
                (for example, to manage connections or mitigate bot traffic).
                These are infrastructure-level cookies and are not used to
                identify or track you as an individual. SVD Online has no access
                to or control over the data these cookies may contain.
              </>
            ),
          },
          {
            heading: "No Google Analytics, no advertising networks",
            body: (
              <>
                There is no Google Analytics, Facebook Pixel, TikTok Pixel,
                Hotjar, Clarity, or any similar tool installed on this website.
                No advertising network receives data from your visit to this
                site.
              </>
            ),
          },
          {
            heading: "How to clear cookies and localStorage",
            body: (
              <>
                You can clear any cookies or localStorage data set by this site
                through your browser settings. In most browsers, go to Settings
                &rarr; Privacy &amp; Security &rarr; Clear browsing data, then
                select &ldquo;Cookies and site data&rdquo; and/or
                &ldquo;Cached images and files&rdquo;. You can also view and
                delete site-specific data by opening Developer Tools (F12) and
                navigating to Application &rarr; Storage.
              </>
            ),
          },
          {
            heading: "Questions",
            body: (
              <>
                If you have any questions about how this site handles your data,
                email{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                .
              </>
            ),
          },
        ],
  };

  return (
    <div style={{ background: "var(--dark)" }}>
      <section className="pt-32 pb-20 px-6 lg:px-14 max-w-3xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            {copy.label}
          </p>
          <h1
            className="text-4xl font-black mb-3"
            style={{ color: "var(--foreground)" }}
          >
            {copy.title}
          </h1>
          <p className="text-sm mb-12" style={{ color: "var(--dark-muted)" }}>
            {copy.updated}
          </p>

          <div className="space-y-10">
            {copy.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {section.heading}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--dark-muted)" }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
