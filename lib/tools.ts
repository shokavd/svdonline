export type ToolLocale = {
  tagline: string;
  affiliateLabel: string;
  whyIUseIt: string;
  pros: string[];
  cons: string[];
  review: string;
};

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  category: "AI" | "Design" | "Automation" | "Hosting" | "Domains" | "Database" | "Productivity";
  rating: number;
  affiliateUrl: string;
  affiliateLabel: string;
  hasAffiliate: boolean;
  icon: string;
  pricing: string;
  whyIUseIt: string;
  pros: string[];
  cons: string[];
  review: string;
  featured?: boolean;
  nl?: ToolLocale;
};

export const TOOLS: Tool[] = [
  {
    slug: "claude",
    name: "Claude",
    tagline: "The AI assistant I use every single day",
    category: "AI",
    rating: 5,
    affiliateUrl: "https://claude.ai",
    affiliateLabel: "Try Claude free",
    hasAffiliate: false,
    icon: "🤖",
    pricing: "Free plan available · Pro from $20/mo",
    featured: true,
    whyIUseIt: "Claude is my go-to AI for everything, writing, coding, strategy, research. I use it to build automations, write content, and think through problems. It's the tool I open before anything else each morning.",
    pros: [
      "Exceptionally good at long, complex tasks",
      "Understands nuance and context better than most",
      "Great for coding and technical work",
      "Honest about what it doesn't know",
    ],
    cons: [
      "No image generation (yet)",
      "Pro plan required for heavy usage",
    ],
    review: `I've tried every major AI assistant out there, ChatGPT, Gemini, Copilot, and Claude is the one I keep coming back to. The difference is in the quality of thinking. Claude doesn't just answer questions, it reasons through them.\n\nI use it daily for writing content, building automations in n8n, reviewing code, and planning my business. It's become the most important tool in my stack.\n\nThe free plan is genuinely useful, but if you're running a business, the Pro plan at $20/month pays for itself many times over.`,
    nl: {
      tagline: "De AI-assistent die ik elke dag gebruik",
      affiliateLabel: "Probeer Claude gratis",
      whyIUseIt: "Claude is mijn go-to AI voor alles, schrijven, coderen, strategie, onderzoek. Ik gebruik het om automatiseringen te bouwen, content te schrijven en problemen door te denken. Het is de tool die ik elke ochtend als eerste open.",
      pros: ["Uitzonderlijk goed in lange, complexe taken", "Begrijpt nuance en context beter dan de meeste anderen", "Uitstekend voor coderen en technisch werk", "Eerlijk over wat het niet weet"],
      cons: ["Nog geen beeldgeneratie", "Pro-abonnement nodig voor intensief gebruik"],
      review: `Ik heb alle grote AI-assistenten geprobeerd, ChatGPT, Gemini, Copilot, en Claude is degene waar ik steeds naar terugkeer. Het verschil zit in de kwaliteit van het denken. Claude beantwoordt geen vragen alleen, het redeneert erdoorheen.\n\nIk gebruik het dagelijks voor het schrijven van content, het bouwen van automatiseringen in n8n, het reviewen van code en het plannen van mijn bedrijf. Het is de belangrijkste tool in mijn stack geworden.\n\nHet gratis plan is echt nuttig, maar als je een bedrijf runt, verdient het Pro-plan van $20 per maand zichzelf vele malen terug.`,
    },
  },
  {
    slug: "canva",
    name: "Canva",
    tagline: "Design anything, no designer needed",
    category: "Design",
    rating: 5,
    affiliateUrl: "https://www.canva.com/affiliates/",
    affiliateLabel: "Try Canva free",
    hasAffiliate: true,
    icon: "🎨",
    pricing: "Free plan available · Pro from €14.99/mo",
    featured: true,
    whyIUseIt: "I use Canva for everything visual, social media posts, presentations, brand assets, thumbnails. The AI features have made it even more powerful. What used to take hours now takes minutes.",
    pros: [
      "Intuitive drag-and-drop interface",
      "Massive template library",
      "Brand kit keeps everything consistent",
      "AI design generation is impressive",
      "Works great for non-designers",
    ],
    cons: [
      "Some advanced features require Pro",
      "Can't match a professional designer for complex work",
    ],
    review: `Canva is one of the first tools I recommend to anyone running an online business. If you're not a designer (and most of us aren't), it removes the biggest barrier to looking professional.\n\nI create all my social media content, presentations, and brand materials in Canva. The brand kit feature means everything stays on-brand automatically, colours, fonts, logos are all locked in.\n\nThe AI features are genuinely useful. I can describe what I want and get a starting point in seconds, then customise it. For the price, it's one of the best value tools I use.`,
    nl: {
      tagline: "Ontwerp alles, geen designer nodig",
      affiliateLabel: "Probeer Canva gratis",
      whyIUseIt: "Ik gebruik Canva voor alles visueel, social media posts, presentaties, merkmateriaal, thumbnails. De AI-functies hebben het nog krachtiger gemaakt. Wat vroeger uren kostte, duurt nu minuten.",
      pros: ["Intuïtieve drag-and-drop interface", "Enorme template bibliotheek", "Brand kit houdt alles consistent", "AI-ontwerp generatie is indrukwekkend", "Werkt geweldig voor niet-designers"],
      cons: ["Sommige geavanceerde functies vereisen Pro", "Kan niet tippen aan een professionele designer voor complex werk"],
      review: `Canva is een van de eerste tools die ik aanraad aan iedereen die een online bedrijf runt. Als je geen designer bent (en de meesten van ons zijn dat niet), verlaagt het de grootste drempel om er professioneel uit te zien.\n\nIk maak al mijn social media content, presentaties en merkmateriaal in Canva. De brand kit-functie zorgt ervoor dat alles automatisch merkconform is, kleuren, lettertypen en logo's zijn allemaal vastgelegd.\n\nDe AI-functies zijn echt nuttig. Ik kan beschrijven wat ik wil en in seconden een startpunt krijgen, dat ik dan aanpas. Voor de prijs is het een van de beste tools die ik gebruik.`,
    },
  },
  {
    slug: "n8n",
    name: "n8n",
    tagline: "Automate everything in your business",
    category: "Automation",
    rating: 5,
    affiliateUrl: "https://n8n.io",
    affiliateLabel: "Try n8n",
    hasAffiliate: false,
    icon: "⚡",
    pricing: "Self-hosted free · Cloud from $24/mo",
    featured: true,
    whyIUseIt: "n8n is how I automate the repetitive parts of running my business. My social media posts, email workflows, and data pipelines all run on autopilot through n8n. It's more powerful than Zapier and cheaper.",
    pros: [
      "Self-hostable (free forever if you host it yourself)",
      "Much more powerful than Zapier",
      "Visual workflow builder is intuitive",
      "Connects to almost any tool via API",
      "Active community and great documentation",
    ],
    cons: [
      "Steeper learning curve than simpler tools",
      "Self-hosting requires some technical knowledge",
    ],
    review: `n8n changed how I run my business. Before it, I was doing repetitive tasks manually, posting to social media, moving data between tools, sending follow-up emails. Now most of that runs automatically.\n\nThe key advantage over Zapier is power. n8n lets you write custom code, handle complex logic, and connect to any API, not just pre-built integrations. I use it to automatically post to Instagram and Facebook, process form submissions, and sync data between my tools.\n\nIf you're technical, self-hosting on something like Zeabur makes it essentially free. If not, their cloud plan is still cheaper than Zapier for what you get.`,
    nl: {
      tagline: "Automatiseer alles in je bedrijf",
      affiliateLabel: "Probeer n8n",
      whyIUseIt: "n8n is hoe ik de repetitieve delen van het runnen van mijn bedrijf automatiseer. Mijn social media posts, e-mailworkflows en datapijplijnen draaien allemaal op de automatische piloot via n8n. Het is krachtiger dan Zapier en goedkoper.",
      pros: ["Self-hostable (gratis voor altijd als je het zelf host)", "Veel krachtiger dan Zapier", "Visuele workflow builder is intuïtief", "Verbindt met bijna elke tool via API", "Actieve community en goede documentatie"],
      cons: ["Steilere leercurve dan eenvoudigere tools", "Self-hosting vereist enige technische kennis"],
      review: `n8n heeft veranderd hoe ik mijn bedrijf run. Daarvoor deed ik repetitieve taken handmatig, posten op social media, gegevens verplaatsen tussen tools, follow-up e-mails sturen. Nu loopt het meeste automatisch.\n\nHet belangrijkste voordeel ten opzichte van Zapier is kracht. n8n laat je aangepaste code schrijven, complexe logica afhandelen en verbinding maken met elke API, niet alleen vooraf gebouwde integraties. Ik gebruik het om automatisch te posten op Instagram en Facebook, formulierinzendingen te verwerken en gegevens te synchroniseren.\n\nAls je technisch bent, maakt self-hosting op iets als Zeabur het vrijwel gratis. Als dat niet zo is, is hun cloud-plan nog steeds goedkoper dan Zapier voor wat je krijgt.`,
    },
  },
  {
    slug: "hostinger",
    name: "Hostinger",
    tagline: "Affordable hosting that actually works",
    category: "Hosting",
    rating: 4,
    affiliateUrl: "https://www.hostinger.com/affiliates",
    affiliateLabel: "Get Hostinger",
    hasAffiliate: true,
    icon: "🌐",
    pricing: "From €2.99/mo",
    featured: false,
    whyIUseIt: "Hostinger is my go-to recommendation for anyone who needs reliable web hosting without paying enterprise prices. I use it for client sites and WordPress installs.",
    pros: [
      "Very affordable, cheapest plans are genuinely good",
      "One-click WordPress install",
      "Fast loading speeds",
      "Good customer support",
      "Free domain included on annual plans",
    ],
    cons: [
      "Upsells can be aggressive",
      "Renewal prices higher than intro price",
    ],
    review: `For most people starting an online business or building a WordPress site, Hostinger hits the sweet spot of price and performance. I've recommended it to dozens of clients and it hasn't let them down.\n\nThe one-click WordPress install means you're up and running in minutes. Speeds are solid, uptime is reliable, and support is responsive when you need it.\n\nJust be aware: the introductory price is great, but renewal prices are higher. Lock in a long-term plan upfront to get the best value.`,
    nl: {
      tagline: "Betaalbare hosting die echt werkt",
      affiliateLabel: "Haal Hostinger",
      whyIUseIt: "Hostinger is mijn standaard aanbeveling voor iedereen die betrouwbare webhosting nodig heeft zonder enterprise prijzen te betalen. Ik gebruik het voor klantensites en WordPress-installaties.",
      pros: ["Erg betaalbaar, goedkopere plannen zijn echt goed", "Één-klik WordPress installatie", "Snelle laadtijden", "Goede klantenservice", "Gratis domein inbegrepen bij jaarplannen"],
      cons: ["Upsells kunnen agressief zijn", "Verlengingsprijzen hoger dan introductieprijs"],
      review: `Voor de meeste mensen die een online bedrijf starten of een WordPress-site bouwen, treft Hostinger de juiste balans tussen prijs en prestatie. Ik heb het aan tientallen klanten aanbevolen en het heeft hen niet teleurgesteld.\n\nDe één-klik WordPress installatie betekent dat je binnen enkele minuten aan de slag kunt. Snelheden zijn goed, uptime is betrouwbaar en support reageert snel als je het nodig hebt.\n\nWees je er echter van bewust: de introductieprijs is geweldig, maar verlengingsprijzen zijn hoger. Kies een langetermijnplan vooraf om de beste waarde te krijgen.`,
    },
  },
  {
    slug: "namecheap",
    name: "Namecheap",
    tagline: "Where I buy all my domains",
    category: "Domains",
    rating: 4,
    affiliateUrl: "https://www.namecheap.com/affiliates/",
    affiliateLabel: "Get your domain",
    hasAffiliate: true,
    icon: "🔗",
    pricing: "Domains from $1.98/yr · Hosting from $1.98/mo",
    featured: false,
    whyIUseIt: "Every domain I own is registered through Namecheap. Simple, cheap, and the interface doesn't try to trick you into buying things you don't need.",
    pros: [
      "Consistently cheap domain prices",
      "Free WhoisGuard privacy protection",
      "Clean, straightforward interface",
      "Reliable DNS management",
      "Good 2FA security",
    ],
    cons: [
      "Hosting is less impressive than standalone hosts",
      "Support can be slow during peak times",
    ],
    review: `I've registered every one of my domains through Namecheap and I've never had a reason to switch. Prices are consistently lower than GoDaddy or Google Domains, the interface is clean, and they don't hide renewal prices.\n\nThe free WhoisGuard privacy protection (which costs extra elsewhere) is included automatically, a nice touch that protects your personal details from being publicly listed.\n\nIf you're just buying domains, Namecheap is my recommendation every time. Their hosting is decent too but I'd pair it with a dedicated host for anything serious.`,
    nl: {
      tagline: "Waar ik al mijn domeinen koop",
      affiliateLabel: "Haal je domein",
      whyIUseIt: "Elk domein dat ik bezit is geregistreerd via Namecheap. Simpel, goedkoop en de interface probeert je niet te verleiden om dingen te kopen die je niet nodig hebt.",
      pros: ["Consistent goedkope domeinprijzen", "Gratis WhoisGuard privacybescherming", "Overzichtelijke, duidelijke interface", "Betrouwbaar DNS-beheer", "Goede tweefactorauthenticatie"],
      cons: ["Hosting is minder indrukwekkend dan standalone hosts", "Support kan langzaam zijn tijdens piekuren"],
      review: `Ik heb elk van mijn domeinen via Namecheap geregistreerd en heb nooit een reden gehad om over te stappen. Prijzen zijn consistent lager dan GoDaddy of Google Domains, de interface is overzichtelijk en ze verbergen verlengingsprijzen niet.\n\nDe gratis WhoisGuard privacybescherming (die elders extra kost) is automatisch inbegrepen, een leuk extraatje dat je persoonlijke gegevens beschermt tegen openbare vermelding.\n\nAls je alleen domeinen koopt, is Namecheap mijn aanbeveling elke keer. Hun hosting is ook redelijk, maar ik zou het combineren met een dedicated host voor iets serieus.`,
    },
  },
  {
    slug: "zeabur",
    name: "Zeabur",
    tagline: "Deploy apps and tools in minutes",
    category: "Hosting",
    rating: 4,
    affiliateUrl: "https://zeabur.com",
    affiliateLabel: "Try Zeabur",
    hasAffiliate: false,
    icon: "🚀",
    pricing: "Free tier available · Pay-as-you-go",
    featured: false,
    whyIUseIt: "I host my n8n automation instance on Zeabur. It's the easiest way I've found to deploy tools that need their own server, one-click deploys, no DevOps knowledge required.",
    pros: [
      "One-click deploy for popular tools (n8n, Ghost, etc.)",
      "No server management needed",
      "Pay only for what you use",
      "Fast setup, live in minutes",
    ],
    cons: [
      "Less known than AWS or DigitalOcean",
      "Fewer advanced configuration options",
    ],
    review: `I started using Zeabur specifically to host my n8n automation workflows, and it's been excellent. What would have taken hours of server configuration took about 10 minutes.\n\nZeabur handles the infrastructure so you can focus on building. Select your template, connect your repo or choose a pre-built image, and you're live. The pay-as-you-go model means you're not paying for idle capacity.\n\nFor non-technical users who want to run self-hosted tools without learning DevOps, Zeabur is a genuine game-changer.`,
    nl: {
      tagline: "Apps en tools in minuten deployen",
      affiliateLabel: "Probeer Zeabur",
      whyIUseIt: "Ik host mijn n8n-automatiseringsinstantie op Zeabur. Het is de eenvoudigste manier die ik heb gevonden om tools te deployen die hun eigen server nodig hebben, één-klik deployments, geen DevOps-kennis vereist.",
      pros: ["Één-klik deploy voor populaire tools (n8n, Ghost, etc.)", "Geen serverbeheer nodig", "Betaal alleen voor wat je gebruikt", "Snelle setup, binnen minuten live"],
      cons: ["Minder bekend dan AWS of DigitalOcean", "Minder geavanceerde configuratie-opties"],
      review: `Ik ben Zeabur gaan gebruiken specifiek om mijn n8n-automatiseringsworkflows te hosten, en het is uitstekend geweest. Wat uren van serverconfiguratie had gekost, duurde ongeveer 10 minuten.\n\nZeabur regelt de infrastructuur zodat jij je kunt concentreren op bouwen. Selecteer je template, verbind je repo of kies een kant-en-klaar image, en je bent live. Het betaal-per-gebruik-model betekent dat je niet betaalt voor inactieve capaciteit.\n\nVoor niet-technische gebruikers die self-hosted tools willen draaien zonder DevOps te leren, is Zeabur een echte gamechanger.`,
    },
  },
  {
    slug: "tidify-ai",
    name: "Tidify AI",
    tagline: "My own tool, and yes, I actually use it",
    category: "AI",
    rating: 5,
    affiliateUrl: "https://tidifyai.com",
    affiliateLabel: "Try Tidify AI free",
    hasAffiliate: false,
    icon: "✨",
    pricing: "Free · Pro from €9.99/mo",
    featured: true,
    whyIUseIt: "Full disclosure: I built Tidify AI. But I also genuinely use it every day to clean up my writing, draft emails, prep for meetings, and create social content. Dogfooding at its finest.",
    pros: [
      "20 AI writing modes in one place",
      "Instant output, no prompt engineering needed",
      "Works in multiple languages",
      "Free tier is genuinely useful",
      "Designed for non-technical users",
    ],
    cons: [
      "Pro modes require upgrade",
      "Best for text-based tasks (not image generation)",
    ],
    review: `Yes, I built this, and yes, I'm recommending it. But hear me out.\n\nTidify AI started because I was constantly switching between different AI tools for different tasks. Meeting notes in one tab, email drafts in another, social posts somewhere else. It was messy.\n\nSo I built a single tool with 20 focused writing modes. You paste your text, pick a mode, and get a structured output in seconds. Meeting notes become summaries with action items. Job descriptions become cover letters. Brain dumps become action plans.\n\nThe free tier gives you 3 uses a day, enough to try every mode. If it clicks, Pro is €9.99/month for unlimited everything.`,
    nl: {
      tagline: "Mijn eigen tool, en ja, ik gebruik het echt",
      affiliateLabel: "Probeer Tidify AI gratis",
      whyIUseIt: "Volledige transparantie: ik heb Tidify AI gebouwd. Maar ik gebruik het ook echt elke dag om mijn schrijven op te schonen, e-mails te concepten, me voor te bereiden op vergaderingen en social content te maken. Dogfooding op zijn best.",
      pros: ["20 AI-schrijfmodi op één plek", "Directe output, geen prompt engineering nodig", "Werkt in meerdere talen", "Gratis tier is echt nuttig", "Ontworpen voor niet-technische gebruikers"],
      cons: ["Pro-modi vereisen upgrade", "Het beste voor tekstgebaseerde taken (geen beeldgeneratie)"],
      review: `Ja, ik heb dit gebouwd, en ja, ik beveel het aan. Maar luister even.\n\nTidify AI begon omdat ik constant wisselde tussen verschillende AI-tools voor verschillende taken. Vergadernotities in het ene tabblad, e-mailconcepten in het andere, social posts ergens anders. Het was een rommeltje.\n\nDus bouwde ik één tool met 20 gerichte schrijfmodi. Je plakt je tekst, kiest een modus en krijgt in seconden een gestructureerde output. Vergadernotities worden samenvattingen met actiepunten. Vacatureteksten worden begeleidende brieven. Braindrops worden actieplannen.\n\nHet gratis tier geeft je 3 gebruik per dag, genoeg om elke modus te proberen. Als het klikt, is Pro €9,99 per maand voor onbeperkt alles.`,
    },
  },
  {
    slug: "supabase",
    name: "Supabase",
    tagline: "The database behind my SaaS",
    category: "Database",
    rating: 5,
    affiliateUrl: "https://supabase.com",
    affiliateLabel: "Start for free",
    hasAffiliate: false,
    icon: "🗄️",
    pricing: "Free tier available · Pro from $25/mo",
    featured: false,
    whyIUseIt: "Supabase powers the backend of Tidify AI, authentication, database, and file storage. I chose it over Firebase because it's open source, uses standard PostgreSQL, and the free tier is genuinely generous.",
    pros: [
      "Free tier is very generous for starting out",
      "Built-in auth (magic links, OAuth)",
      "Real PostgreSQL, not a proprietary database",
      "Row-level security built in",
      "Storage included (great for file uploads)",
    ],
    cons: [
      "Can be complex for complete beginners",
      "Free tier pauses projects after inactivity",
    ],
    review: `If you're building a web app or SaaS product, Supabase is where I'd point you first. It gives you a PostgreSQL database, authentication, file storage, and real-time subscriptions, all in one platform, with a free tier that's genuinely usable.\n\nI use it for Tidify AI's user authentication and to store user data. Setup took an afternoon and it's been rock solid since. The Row Level Security feature means my users' data is properly isolated without writing complex backend logic.\n\nFor developers building their first SaaS, the free tier buys you a lot of runway before you need to spend anything.`,
    nl: {
      tagline: "De database achter mijn SaaS",
      affiliateLabel: "Begin gratis",
      whyIUseIt: "Supabase drijft de backend van Tidify AI, authenticatie, database en bestandsopslag. Ik koos het boven Firebase omdat het open source is, standaard PostgreSQL gebruikt en de gratis tier echt royaal is.",
      pros: ["Gratis tier is erg royaal om mee te beginnen", "Ingebouwde authenticatie (magic links, OAuth)", "Echte PostgreSQL, geen propriëtaire database", "Row-level security ingebouwd", "Opslag inbegrepen (geweldig voor bestandsuploads)"],
      cons: ["Kan complex zijn voor complete beginners", "Gratis tier pauzeert projecten na inactiviteit"],
      review: `Als je een webapp of SaaS-product bouwt, is Supabase waar ik je als eerste naartoe zou verwijzen. Het geeft je een PostgreSQL-database, authenticatie, bestandsopslag en realtime subscriptions, allemaal op één platform, met een gratis tier die echt bruikbaar is.\n\nIk gebruik het voor de gebruikersauthenticatie van Tidify AI en om gebruikersgegevens op te slaan. De setup duurde een middag en het is sindsdien stabiel. De Row Level Security-functie zorgt ervoor dat de gegevens van mijn gebruikers correct zijn geïsoleerd zonder complexe backendlogica.\n\nVoor developers die hun eerste SaaS bouwen, biedt de gratis tier veel ruimte voordat je iets hoeft uit te geven.`,
    },
  },
  {
    slug: "vercel",
    name: "Vercel",
    tagline: "Where I deploy all my Next.js projects",
    category: "Hosting",
    rating: 5,
    affiliateUrl: "https://vercel.com",
    affiliateLabel: "Deploy for free",
    hasAffiliate: false,
    icon: "▲",
    pricing: "Free for personal · Pro from $20/mo",
    featured: false,
    whyIUseIt: "Vercel is where Tidify AI lives. Push to GitHub, and it's deployed in under a minute. The developer experience is the best I've used for Next.js apps.",
    pros: [
      "Zero-config deployment for Next.js",
      "Automatic preview deployments on every PR",
      "Global CDN out of the box",
      "Free tier is very capable",
      "Analytics included",
    ],
    cons: [
      "Can get expensive at scale",
      "Vendor lock-in with some Next.js features",
    ],
    review: `For Next.js apps, Vercel is the obvious choice, they literally built Next.js, so the integration is seamless. You connect your GitHub repo, and every push to main is automatically deployed. Preview URLs are generated for every branch.\n\nI use Vercel for Tidify AI and the experience has been flawless. Deployments take under a minute, the CDN means fast load times globally, and the free tier handles significant traffic before you need to upgrade.\n\nIf you're building with Next.js, just use Vercel. The time you'd spend configuring alternatives isn't worth it.`,
    nl: {
      tagline: "Waar ik al mijn Next.js-projecten deploy",
      affiliateLabel: "Deploy gratis",
      whyIUseIt: "Vercel is waar Tidify AI live staat. Push naar GitHub en het is binnen een minuut gedeployed. De developer experience is de beste die ik heb gebruikt voor Next.js-apps.",
      pros: ["Zero-config deployment voor Next.js", "Automatische preview deployments bij elke PR", "Globaal CDN out of the box", "Gratis tier is erg capabel", "Analytics inbegrepen"],
      cons: ["Kan duur worden op schaal", "Vendor lock-in met sommige Next.js-functies"],
      review: `Voor Next.js-apps is Vercel de voor de hand liggende keuze, ze hebben Next.js letterlijk gebouwd, dus de integratie is naadloos. Je verbindt je GitHub-repo en elke push naar main wordt automatisch gedeployed. Preview-URL's worden gegenereerd voor elke branch.\n\nIk gebruik Vercel voor Tidify AI en de ervaring is vlekkeloos geweest. Deployments duren minder dan een minuut, het CDN zorgt voor snelle laadtijden wereldwijd en de gratis tier verwerkt significant verkeer voordat je hoeft te upgraden.\n\nAls je bouwt met Next.js, gebruik dan gewoon Vercel. De tijd die je zou besteden aan het configureren van alternatieven is het niet waard.`,
    },
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return TOOLS.filter((t) => t.featured);
}

export const CATEGORIES = ["AI", "Design", "Automation", "Hosting", "Domains", "Database", "Productivity"] as const;
