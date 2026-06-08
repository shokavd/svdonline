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
    title: isNL
      ? "Algemene Voorwaarden | SVD Online"
      : "Terms of Service | SVD Online",
    alternates: localeAlternates(locale, "/terms"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";

  const copy = {
    label: isNL ? "Juridisch" : "Legal",
    title: isNL ? "Algemene Voorwaarden" : "Terms of Service",
    updated: isNL ? "Laatst bijgewerkt: mei 2026" : "Last updated: May 2026",
    sections: isNL
      ? [
          {
            heading: "Overeenkomst",
            body: (
              <>
                Deze algemene voorwaarden regelen de relatie tussen SVD Online
                (beheerd door Shoka van Dooren, Nederland, KvK: 98794671, BTW:
                NL005354685B30) en elke opdrachtgever
                die SVD Online inschakelt voor dienstverlening. Door het invullen
                van het intakeformulier of het op andere wijze verstrekken van
                een opdracht, gaat u akkoord met deze voorwaarden.
              </>
            ),
          },
          {
            heading: "Diensten",
            body: (
              <>
                SVD Online bouwt n8n-automatiseringsworkflows op maat van de
                opdrachtgever. De omvang van elke opdracht wordt vastgelegd in
                het projectvoorstel of de pakketomschrijving die voor aanvang
                van het werk is overeengekomen. Deliverables worden opgeleverd
                binnen het tijdsbestek dat per pakket is aangegeven. SVD Online
                behoudt zich het recht voor om een projectverzoek te weigeren.
              </>
            ),
          },
          {
            heading: "Betaling",
            body: (
              <>
                Voordat het werk aan een project van start gaat, is een
                aanbetaling vereist. Het bedrag van de aanbetaling varieert per
                pakket en wordt vermeld in uw projectvoorstel. Het resterende
                bedrag wordt gefactureerd bij oplevering van de overeengekomen
                deliverables. Alle facturen zijn betaalbaar binnen 14 dagen na
                dagtekening. Het werk begint niet voordat de aanbetaling is
                ontvangen.
              </>
            ),
          },
          {
            heading: "Annulering",
            body: (
              <>
                Als u een project annuleert voordat het werk is begonnen, wordt
                uw aanbetaling volledig gerestitueerd. Als u annuleert nadat het
                werk is begonnen, is de aanbetaling niet restitueerbaar, omdat
                deze de reeds bestede tijd en ingezette middelen vergoedt.
                &ldquo;Het werk is begonnen&rdquo; betekent dat SVD Online is
                gestart met het scopen, bouwen of configureren van een onderdeel
                van de overeengekomen deliverable.
              </>
            ),
          },
          {
            heading: "Deliverables en eigendom",
            body: (
              <>
                Na ontvangst van de volledige betaling is de opdrachtgever
                eigenaar van alle definitieve automatiseringsworkflows,
                configuraties en bijbehorende documentatie die als onderdeel van
                het project zijn opgeleverd. SVD Online behoudt geen doorlopende
                rechten op de deliverables. SVD Online mag het type uitgevoerde
                werkzaamheden vermelden als algemene portfolioreferentie, zonder
                vertrouwelijke details te onthullen, tenzij de opdrachtgever
                anders verzoekt.
              </>
            ),
          },
          {
            heading: "Wijzigingen en scope",
            body: (
              <>
                Kleine aanpassingen binnen de overeengekomen scope zijn
                inbegrepen tijdens de bouwfase. Verzoeken die de scope
                wezenlijk wijzigen, zoals het toevoegen van nieuwe workflows,
                het integreren van aanvullende diensten die niet in de
                oorspronkelijke opdracht zijn opgenomen of het veranderen van
                het fundamentele doel van de automatisering, worden apart
                geoffreerd en vereisen een nieuwe overeenkomst voor
                implementatie.
              </>
            ),
          },
          {
            heading: "Support na oplevering",
            body: (
              <>
                Elk pakket bevat een supportperiode na oplevering, gedurende
                welke SVD Online bugs of problemen met de opgeleverde
                automatisering kosteloos verhelpt. De supportperioden zijn als
                volgt: Starter 14 dagen, Growth 21 dagen, Scale 45 dagen en
                Full Stack 60 dagen. Na afloop van de supportperiode is
                doorlopend onderhoud beschikbaar via een apart
                retainerarrangement.
              </>
            ),
          },
          {
            heading: "Tevredenheid",
            body: (
              <>
                SVD Online werkt nauw samen met opdrachtgevers gedurende elk
                project. Als de opgeleverde automatisering niet overeenkomt met
                de schriftelijke opdracht, zal SVD Online dit kosteloos
                corrigeren binnen de supportperiode. Dit geldt voor afwijkingen
                van de schriftelijke opdracht, niet voor gewijzigde inzichten of
                uitbreidingen van de scope na oplevering.
              </>
            ),
          },
          {
            heading: "Aansprakelijkheid",
            body: (
              <>
                De aansprakelijkheid van SVD Online in verband met een project
                is beperkt tot het totale bedrag dat de opdrachtgever voor dat
                project heeft betaald. SVD Online is niet aansprakelijk voor
                indirecte schade, gevolgschade of incidentele schade, waaronder
                omzetderving of gegevensverlies als gevolg van het gebruik van
                of het niet kunnen gebruiken van opgeleverde automatiseringen.
                De opdrachtgever is verantwoordelijk voor het testen van alle
                automatiseringen voordat deze in productie worden genomen.
              </>
            ),
          },
          {
            heading: "Toepasselijk recht en bevoegde rechter",
            body: (
              <>
                Deze voorwaarden worden beheerst door Nederlands recht.
                Geschillen die voortvloeien uit of verband houden met deze
                voorwaarden zijn onderworpen aan de exclusieve bevoegdheid van
                de Nederlandse rechter. SVD Online zal altijd proberen
                geschillen informeel op te lossen voordat formele procedures
                worden gestart.
              </>
            ),
          },
          {
            heading: "Contact",
            body: (
              <>
                Vragen over deze voorwaarden? Stuur een e-mail naar{" "}
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
            heading: "Agreement",
            body: (
              <>
                These Terms of Service govern the relationship between SVD
                Online (operated by Shoka van Dooren, the Netherlands, KvK:
                98794671, VAT: NL005354685B30) and any
                client who engages SVD Online for services. By submitting the
                intake form or otherwise commissioning work, you agree to these
                terms.
              </>
            ),
          },
          {
            heading: "Services",
            body: (
              <>
                SVD Online builds n8n automation workflows tailored to the
                client&apos;s brief. The scope of each engagement is defined in
                the project proposal or package description agreed upon before
                work begins. Deliverables are provided within the timeframe
                specified per package. SVD Online reserves the right to decline
                any project enquiry.
              </>
            ),
          },
          {
            heading: "Payment",
            body: (
              <>
                A deposit is required before work commences on any project. The
                deposit amount varies by package and will be specified in your
                project proposal. The remaining balance is invoiced upon
                delivery of the agreed deliverables. All invoices are payable
                within 14 days of issue. Work will not begin until the deposit
                has been received.
              </>
            ),
          },
          {
            heading: "Cancellation",
            body: (
              <>
                If you cancel a project before work has started, your deposit
                will be refunded in full. If you cancel after work has started,
                the deposit is non-refundable, as it compensates for time and
                resources already committed. &ldquo;Work has started&rdquo;
                means SVD Online has begun scoping, building, or configuring
                any part of the agreed deliverable.
              </>
            ),
          },
          {
            heading: "Deliverables and ownership",
            body: (
              <>
                Upon receipt of full payment, the client owns all final
                automation workflows, configurations, and associated
                documentation delivered as part of the project. SVD Online
                retains no ongoing rights to the deliverables. SVD Online may
                reference the type of work completed (without disclosing
                confidential details) as a general portfolio reference, unless
                the client requests otherwise.
              </>
            ),
          },
          {
            heading: "Changes and scope",
            body: (
              <>
                Minor tweaks within the agreed scope are included during the
                build phase. Requests that materially change the scope, such as
                adding new workflows, integrating additional services not in the
                original brief, or changing the fundamental purpose of the
                automation, will be quoted separately and require a new
                agreement before implementation.
              </>
            ),
          },
          {
            heading: "Post-delivery support",
            body: (
              <>
                Each package includes a post-delivery support period during
                which SVD Online will address bugs or issues with the delivered
                automation at no additional charge. Support periods are as
                follows: Starter 14 days, Growth 21 days, Scale 45 days, Full
                Stack 60 days. After the support period ends, ongoing
                maintenance is available under a separate retainer arrangement.
              </>
            ),
          },
          {
            heading: "Satisfaction",
            body: (
              <>
                SVD Online works closely with clients throughout every project.
                If the delivered automation does not match the agreed brief, SVD
                Online will correct it at no additional charge within the
                support period. This applies to deviations from the written
                brief, not to changes of mind or additions to scope after
                delivery.
              </>
            ),
          },
          {
            heading: "Liability",
            body: (
              <>
                SVD Online&apos;s liability in connection with any project is
                limited to the total amount paid by the client for that project.
                SVD Online is not liable for indirect, consequential, or
                incidental damages, including loss of revenue or data resulting
                from the use or inability to use delivered automations. The
                client is responsible for testing all automations before using
                them in production.
              </>
            ),
          },
          {
            heading: "Governing law and jurisdiction",
            body: (
              <>
                These terms are governed by Dutch law. Any disputes arising from
                or in connection with these terms shall be subject to the
                exclusive jurisdiction of the courts of the Netherlands. SVD
                Online will always attempt to resolve disputes informally before
                initiating formal proceedings.
              </>
            ),
          },
          {
            heading: "Contact",
            body: (
              <>
                Questions about these terms? Email{" "}
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
