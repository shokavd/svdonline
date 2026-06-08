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
    title: isNL ? "Privacybeleid | SVD Online" : "Privacy Policy | SVD Online",
    alternates: localeAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";

  const copy = {
    label: isNL ? "Juridisch" : "Legal",
    title: isNL ? "Privacybeleid" : "Privacy Policy",
    updated: isNL ? "Laatst bijgewerkt: mei 2026" : "Last updated: May 2026",
    sections: isNL
      ? [
          {
            heading: "Wie wij zijn",
            body: (
              <>
                SVD Online wordt beheerd door Shoka van Dooren, freelance
                automatiseringsspecialist gevestigd in Nederland (KvK: 98794671 ·
                BTW: NL005354685B30). U kunt haar bereiken via{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                . Dit privacybeleid legt uit hoe persoonsgegevens worden
                verzameld, gebruikt en beschermd wanneer u deze website
                bezoekt of SVD Online inschakelt voor dienstverlening.
              </>
            ),
          },
          {
            heading: "Verzamelde gegevens",
            body: (
              <>
                Wanneer u het intakeformulier op deze website invult, worden
                de volgende gegevens verzameld: uw naam, uw e-mailadres en de
                projectomschrijving die u aanlevert. Er worden geen andere
                persoonsgegevens via deze website verzameld. SVD Online maakt
                geen gebruik van analysesoftware, advertentienetwerken of
                trackingpixels.
              </>
            ),
          },
          {
            heading: "Doel van de verwerking",
            body: (
              <>
                Uw gegevens worden uitsluitend gebruikt voor de volgende
                doeleinden: het beoordelen van en reageren op uw
                dienstverleningsverzoek, het uitvoeren van de overeengekomen
                automatiseringsdiensten en de communicatie met u gedurende het
                project. Uw gegevens worden nooit voor marketingdoeleinden
                gebruikt zonder uw uitdrukkelijke toestemming en worden nooit
                verkocht aan of gedeeld met derden voor commercieel gewin.
              </>
            ),
          },
          {
            heading: "Rechtsgrondslag",
            body: (
              <>
                De verwerking is gebaseerd op de uitvoering van een
                overeenkomst (artikel 6, lid 1, onder b) AVG) wanneer u SVD
                Online inschakelt voor dienstverlening. Voor
                pre-contractuele verzoeken is de verwerking gebaseerd op uw
                toestemming, gegeven door het invullen van het
                intakeformulier (artikel 6, lid 1, onder a) AVG).
              </>
            ),
          },
          {
            heading: "Diensten van derden",
            body: (
              <>
                Inzendingen via het intakeformulier worden via een webhook
                doorgestuurd naar n8n, een open-source automatiseringsplatform.
                n8n wordt uitsluitend gebruikt om uw formuliergegevens te
                ontvangen en te verwerken zodat er snel actie op ondernomen
                kan worden. Projectcommunicatie verloopt via standaard e-mail.
                De website zelf wordt gehost op de infrastructuur van
                Hostinger. Geen andere externe verwerkers ontvangen uw
                persoonsgegevens.
              </>
            ),
          },
          {
            heading: "Bewaartermijn",
            body: (
              <>
                Uw persoonsgegevens worden bewaard gedurende de looptijd van
                de opdracht en twee jaar nadat het project is afgerond. Deze
                bewaartermijn dekt eventuele vervolgvragen, garantieverplichtingen
                en de supportperioden die bij elk pakket zijn inbegrepen. Na
                deze periode worden gegevens verwijderd of geanonimiseerd.
              </>
            ),
          },
          {
            heading: "Analyses en advertenties",
            body: (
              <>
                SVD Online maakt geen gebruik van Google Analytics, Facebook
                Pixel of enige andere analyse- of advertentiedienst. Er worden
                geen gedragsgegevens verzameld van bezoekers van deze website.
              </>
            ),
          },
          {
            heading: "Uw rechten onder de AVG",
            body: (
              <>
                Als betrokkene heeft u het recht op: inzage in uw
                persoonsgegevens, rectificatie van onjuiste gegevens,
                verwijdering van uw gegevens (het &ldquo;recht op
                vergetelheid&rdquo;), beperking van de verwerking, overdracht
                van uw gegevens in een draagbaar formaat (dataportabiliteit)
                en bezwaar tegen de verwerking. Om een van deze rechten uit te
                oefenen, stuurt u een e-mail naar{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                . Verzoeken worden binnen 30 dagen beantwoord. Als u van
                mening bent dat uw rechten zijn geschonden, kunt u een klacht
                indienen bij de Autoriteit Persoonsgegevens via{" "}
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                .
              </>
            ),
          },
          {
            heading: "Wijzigingen in dit beleid",
            body: (
              <>
                Dit beleid kan van tijd tot tijd worden bijgewerkt. De datum
                bovenaan deze pagina geeft de meest recente versie aan.
                Voortgezet gebruik van deze website na het doorvoeren van
                wijzigingen geldt als aanvaarding van het bijgewerkte beleid.
              </>
            ),
          },
          {
            heading: "Contact",
            body: (
              <>
                Voor vragen over dit privacybeleid of de verwerking van uw
                gegevens kunt u contact opnemen met Shoka van Dooren via{" "}
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
            heading: "Who we are",
            body: (
              <>
                SVD Online is operated by Shoka van Dooren, a freelance
                automation specialist based in the Netherlands (KvK: 98794671 ·
                VAT: NL005354685B30). You can reach her at{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                . This privacy policy explains how personal data is collected,
                used, and protected when you use this website or engage SVD
                Online for services.
              </>
            ),
          },
          {
            heading: "Data collected",
            body: (
              <>
                When you submit the intake form on this website, the following
                information is collected: your name, your email address, and
                the project brief you provide (a description of the automation
                work you are requesting). No other personal data is collected
                through this website. SVD Online does not use analytics
                software, advertising networks, or tracking pixels of any kind.
              </>
            ),
          },
          {
            heading: "Purpose of processing",
            body: (
              <>
                Your data is used exclusively for the following purposes: to
                assess and respond to your service enquiry, to deliver the
                agreed automation services, and to communicate with you
                throughout the project. Your data is never used for marketing
                purposes without your explicit consent, and is never sold or
                shared with third parties for commercial gain.
              </>
            ),
          },
          {
            heading: "Legal basis",
            body: (
              <>
                Processing is based on the performance of a contract (Article
                6 (1)(b) GDPR) when you engage SVD Online for services. For
                pre-contractual enquiries, processing is based on your consent
                given by submitting the intake form (Article 6 (1)(a) GDPR).
              </>
            ),
          },
          {
            heading: "Third-party services",
            body: (
              <>
                Intake form submissions are routed via a webhook to n8n, an
                open-source automation platform. n8n is used solely to receive
                and process your form data so it can be acted on promptly.
                Project communication takes place via standard email. The
                website itself is hosted on Hostinger infrastructure. No other
                third-party processors receive your personal data.
              </>
            ),
          },
          {
            heading: "Data retention",
            body: (
              <>
                Your personal data is retained for the duration of the
                engagement and for two years after the project is concluded.
                This retention period covers potential follow-up questions,
                warranty obligations, and the support periods included in each
                package. After this period, data is deleted or anonymised.
              </>
            ),
          },
          {
            heading: "Analytics and advertising",
            body: (
              <>
                SVD Online does not use Google Analytics, Facebook Pixel, or
                any other analytics or advertising service. No behavioural data
                is collected from visitors to this website.
              </>
            ),
          },
          {
            heading: "Your rights under GDPR",
            body: (
              <>
                As a data subject you have the right to: access the personal
                data held about you; request rectification of inaccurate data;
                request erasure of your data (the &ldquo;right to be
                forgotten&rdquo;); request restriction of processing; receive
                your data in a portable format (data portability); and object
                to processing. To exercise any of these rights, email{" "}
                <a
                  href="mailto:contact@svdonline.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@svdonline.com
                </a>
                . Requests will be responded to within 30 days. If you believe
                your rights have been infringed, you may lodge a complaint with
                the Dutch Data Protection Authority (Autoriteit
                Persoonsgegevens) at{" "}
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                .
              </>
            ),
          },
          {
            heading: "Changes to this policy",
            body: (
              <>
                This policy may be updated from time to time. The date at the
                top of this page reflects the most recent revision. Continued
                use of this website after changes are posted constitutes
                acceptance of the updated policy.
              </>
            ),
          },
          {
            heading: "Contact",
            body: (
              <>
                For any questions about this privacy policy or how your data is
                handled, contact Shoka van Dooren at{" "}
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
