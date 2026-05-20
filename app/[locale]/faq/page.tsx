import ScrollReveal from "../../../components/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";
  return {
    title: isNL ? "Veelgestelde vragen | SVD Online" : "FAQ | SVD Online",
  };
}

const workingTogetherEN = [
  {
    q: "Do I need to know n8n myself?",
    a: "No, you don't. Shoka handles everything from initial setup to final delivery. Basic training on how to use and monitor your automations is included with every package, so you can operate them confidently from day one.",
  },
  {
    q: "How long does a project take?",
    a: "Most packages are delivered within 5 to 10 business days. The Full Stack package, which involves more complex multi-workflow builds, takes approximately 4 weeks. Exact timelines are confirmed in your project proposal.",
  },
  {
    q: "What happens after delivery?",
    a: "Every package includes a post-delivery support period: 14 days for Starter, 21 days for Growth, 45 days for Scale, and 60 days for Full Stack. During this time, any bugs or issues are fixed at no extra charge. After the support period, maintenance retainers are available.",
  },
  {
    q: "Can I request changes during the project?",
    a: "Minor tweaks within the original scope are included. If you want to add new workflows, integrate additional services, or significantly change the direction of the project, those changes are scoped and quoted separately before implementation.",
  },
  {
    q: "Do you work with clients outside the Netherlands?",
    a: "Yes. SVD Online works fully remotely and takes on clients worldwide. All communication and delivery happens online, so location is never a barrier.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "Shoka works closely with you throughout the project to make sure the work is on track. If the delivered automation doesn't match the written brief, she'll fix it at no charge within the support period. Your satisfaction with the agreed deliverables is guaranteed.",
  },
];

const toolReviewsEN = [
  {
    q: "Are reviews paid for or sponsored?",
    a: "Never. Every review on SVD Online is fully independent and based on real, hands-on usage. No company has paid for a review or influenced the outcome of any rating. Editorial independence is non-negotiable.",
  },
  {
    q: "Do you use affiliate links?",
    a: "Some links on this site may be affiliate links, meaning SVD Online may earn a small commission if you sign up for a product through the link. This is always disclosed where applicable. Affiliate relationships do not influence ratings, scores, or which products are recommended.",
  },
  {
    q: "How are tools rated?",
    a: "Tools are evaluated across four dimensions: ease of use, value for money, reliability, and real-world performance in automation use cases. Ratings reflect genuine usage experience, not marketing claims.",
  },
  {
    q: "Can I request a tool review?",
    a: "Yes. If there's a tool you'd like to see reviewed, email contact@svdonline.com with your suggestion. All review decisions remain entirely at Shoka's discretion, and editorial independence is always maintained regardless of who makes the request.",
  },
];

const workingTogetherNL = [
  {
    q: "Moet ik n8n zelf kennen?",
    a: "Nee. Shoka regelt alles, van de eerste opzet tot de uiteindelijke oplevering. Bij elk pakket is basistraining inbegrepen over het gebruik en de monitoring van uw automatiseringen, zodat u deze vanaf dag één zelfstandig kunt bedienen.",
  },
  {
    q: "Hoe lang duurt een project?",
    a: "De meeste pakketten worden opgeleverd binnen 5 tot 10 werkdagen. Het Full Stack-pakket, waarbij complexere multi-workflow-builds komen kijken, duurt ongeveer 4 weken. De exacte planning wordt bevestigd in uw projectvoorstel.",
  },
  {
    q: "Wat gebeurt er na de oplevering?",
    a: "Elk pakket bevat een supportperiode na oplevering: 14 dagen voor Starter, 21 dagen voor Growth, 45 dagen voor Scale en 60 dagen voor Full Stack. Gedurende deze periode worden bugs of problemen kosteloos verholpen. Na afloop van de supportperiode zijn onderhoudsretainers beschikbaar.",
  },
  {
    q: "Kan ik wijzigingen aanvragen tijdens het project?",
    a: "Kleine aanpassingen binnen de oorspronkelijke scope zijn inbegrepen. Als u nieuwe workflows wilt toevoegen, aanvullende diensten wilt integreren of de richting van het project ingrijpend wilt wijzigen, worden die aanpassingen apart in kaart gebracht en geoffreerd voordat ze worden doorgevoerd.",
  },
  {
    q: "Werkt u ook met opdrachtgevers buiten Nederland?",
    a: "Ja. SVD Online werkt volledig op afstand en neemt opdrachtgevers aan over de hele wereld. Alle communicatie en oplevering verloopt online, dus locatie is nooit een belemmering.",
  },
  {
    q: "Wat als ik niet tevreden ben met het resultaat?",
    a: "Shoka werkt nauw met u samen gedurende het hele project om er zeker van te zijn dat het werk op koers ligt. Als de opgeleverde automatisering niet overeenkomt met de schriftelijke opdracht, zal ze dit kosteloos corrigeren binnen de supportperiode. Uw tevredenheid met de overeengekomen deliverables is gegarandeerd.",
  },
];

const toolReviewsNL = [
  {
    q: "Worden reviews betaald of gesponsord?",
    a: "Nooit. Elke review op SVD Online is volledig onafhankelijk en gebaseerd op echte, praktische gebruikservaring. Geen enkel bedrijf heeft betaald voor een review of de uitkomst van een beoordeling beïnvloed. Redactionele onafhankelijkheid is niet onderhandelbaar.",
  },
  {
    q: "Maakt u gebruik van affiliate-links?",
    a: "Sommige links op deze site kunnen affiliate-links zijn, wat betekent dat SVD Online een kleine vergoeding kan ontvangen als u zich via de link aanmeldt voor een product. Dit wordt altijd vermeld waar van toepassing. Affiliate-relaties hebben geen invloed op beoordelingen, scores of welke producten worden aanbevolen.",
  },
  {
    q: "Hoe worden tools beoordeeld?",
    a: "Tools worden beoordeeld op vier dimensies: gebruiksgemak, prijs-kwaliteitverhouding, betrouwbaarheid en prestaties in de praktijk bij automatiseringstoepassingen. Beoordelingen weerspiegelen echte gebruikservaring, geen marketingclaims.",
  },
  {
    q: "Kan ik een toolreview aanvragen?",
    a: "Ja. Als er een tool is die u graag beoordeeld zou willen zien, stuur dan een e-mail naar contact@svdonline.com met uw suggestie. Alle reviewbeslissingen blijven volledig ter beoordeling van Shoka, en redactionele onafhankelijkheid wordt altijd gehandhaafd, ongeacht wie het verzoek indient.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      className="rounded-xl p-6"
      style={{
        background: "var(--card)",
        border: "1px solid var(--dark-border)",
      }}
    >
      <p
        className="text-sm font-bold mb-2.5"
        style={{ color: "var(--foreground)" }}
      >
        {q}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--dark-muted)" }}
      >
        {a}
      </p>
    </div>
  );
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isNL = locale === "nl";

  const copy = {
    label: "Help",
    title: isNL ? "Veelgestelde vragen" : "Frequently Asked Questions",
    intro: isNL
      ? "Alles wat u wilt weten voordat u met ons samenwerkt of een review leest. Staat uw vraag er niet bij? Stuur een e-mail naar"
      : "Everything you need to know before working together or reading a review. Can't find what you're looking for? Email",
    sectionA: isNL ? "Samenwerken" : "Working together",
    sectionB: isNL ? "Toolreviews" : "Tool reviews",
    faqA: isNL ? workingTogetherNL : workingTogetherEN,
    faqB: isNL ? toolReviewsNL : toolReviewsEN,
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
          <p
            className="text-sm mb-16 max-w-xl"
            style={{ color: "var(--dark-muted)" }}
          >
            {copy.intro}{" "}
            <a
              href="mailto:contact@svdonline.com"
              style={{ color: "var(--accent)" }}
            >
              contact@svdonline.com
            </a>
            .
          </p>

          {/* section — working together / samenwerken */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent2)" }}
              >
                {copy.sectionA}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "var(--dark-border)" }}
              />
            </div>
            <div className="space-y-4">
              {copy.faqA.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          {/* section — tool reviews */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent2)" }}
              >
                {copy.sectionB}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "var(--dark-border)" }}
              />
            </div>
            <div className="space-y-4">
              {copy.faqB.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
