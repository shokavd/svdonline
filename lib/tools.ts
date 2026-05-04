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
    whyIUseIt: "Claude is my go-to AI for everything — writing, coding, strategy, research. I use it to build automations, write content, and think through problems. It's the tool I open before anything else each morning.",
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
    review: `I've tried every major AI assistant out there — ChatGPT, Gemini, Copilot — and Claude is the one I keep coming back to. The difference is in the quality of thinking. Claude doesn't just answer questions, it reasons through them.\n\nI use it daily for writing content, building automations in n8n, reviewing code, and planning my business. It's become the most important tool in my stack.\n\nThe free plan is genuinely useful, but if you're running a business, the Pro plan at $20/month pays for itself many times over.`,
  },
  {
    slug: "canva",
    name: "Canva",
    tagline: "Design anything — no designer needed",
    category: "Design",
    rating: 5,
    affiliateUrl: "https://www.canva.com/affiliates/",
    affiliateLabel: "Try Canva free",
    hasAffiliate: true,
    icon: "🎨",
    pricing: "Free plan available · Pro from €14.99/mo",
    featured: true,
    whyIUseIt: "I use Canva for everything visual — social media posts, presentations, brand assets, thumbnails. The AI features have made it even more powerful. What used to take hours now takes minutes.",
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
    review: `Canva is one of the first tools I recommend to anyone running an online business. If you're not a designer (and most of us aren't), it removes the biggest barrier to looking professional.\n\nI create all my social media content, presentations, and brand materials in Canva. The brand kit feature means everything stays on-brand automatically — colours, fonts, logos are all locked in.\n\nThe AI features are genuinely useful. I can describe what I want and get a starting point in seconds, then customise it. For the price, it's one of the best value tools I use.`,
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
    review: `n8n changed how I run my business. Before it, I was doing repetitive tasks manually — posting to social media, moving data between tools, sending follow-up emails. Now most of that runs automatically.\n\nThe key advantage over Zapier is power. n8n lets you write custom code, handle complex logic, and connect to any API — not just pre-built integrations. I use it to automatically post to Instagram and Facebook, process form submissions, and sync data between my tools.\n\nIf you're technical, self-hosting on something like Zeabur makes it essentially free. If not, their cloud plan is still cheaper than Zapier for what you get.`,
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
      "Very affordable — cheapest plans are genuinely good",
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
    review: `I've registered every one of my domains through Namecheap and I've never had a reason to switch. Prices are consistently lower than GoDaddy or Google Domains, the interface is clean, and they don't hide renewal prices.\n\nThe free WhoisGuard privacy protection (which costs extra elsewhere) is included automatically — a nice touch that protects your personal details from being publicly listed.\n\nIf you're just buying domains, Namecheap is my recommendation every time. Their hosting is decent too but I'd pair it with a dedicated host for anything serious.`,
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
    whyIUseIt: "I host my n8n automation instance on Zeabur. It's the easiest way I've found to deploy tools that need their own server — one-click deploys, no DevOps knowledge required.",
    pros: [
      "One-click deploy for popular tools (n8n, Ghost, etc.)",
      "No server management needed",
      "Pay only for what you use",
      "Fast setup — live in minutes",
    ],
    cons: [
      "Less known than AWS or DigitalOcean",
      "Fewer advanced configuration options",
    ],
    review: `I started using Zeabur specifically to host my n8n automation workflows, and it's been excellent. What would have taken hours of server configuration took about 10 minutes.\n\nZeabur handles the infrastructure so you can focus on building. Select your template, connect your repo or choose a pre-built image, and you're live. The pay-as-you-go model means you're not paying for idle capacity.\n\nFor non-technical users who want to run self-hosted tools without learning DevOps, Zeabur is a genuine game-changer.`,
  },
  {
    slug: "tidify-ai",
    name: "Tidify AI",
    tagline: "My own tool — and yes, I actually use it",
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
      "Instant output — no prompt engineering needed",
      "Works in multiple languages",
      "Free tier is genuinely useful",
      "Designed for non-technical users",
    ],
    cons: [
      "Pro modes require upgrade",
      "Best for text-based tasks (not image generation)",
    ],
    review: `Yes, I built this — and yes, I'm recommending it. But hear me out.\n\nTidify AI started because I was constantly switching between different AI tools for different tasks. Meeting notes in one tab, email drafts in another, social posts somewhere else. It was messy.\n\nSo I built a single tool with 20 focused writing modes. You paste your text, pick a mode, and get a structured output in seconds. Meeting notes become summaries with action items. Job descriptions become cover letters. Brain dumps become action plans.\n\nThe free tier gives you 3 uses a day — enough to try every mode. If it clicks, Pro is €9.99/month for unlimited everything.`,
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
    whyIUseIt: "Supabase powers the backend of Tidify AI — authentication, database, and file storage. I chose it over Firebase because it's open source, uses standard PostgreSQL, and the free tier is genuinely generous.",
    pros: [
      "Free tier is very generous for starting out",
      "Built-in auth (magic links, OAuth)",
      "Real PostgreSQL — not a proprietary database",
      "Row-level security built in",
      "Storage included (great for file uploads)",
    ],
    cons: [
      "Can be complex for complete beginners",
      "Free tier pauses projects after inactivity",
    ],
    review: `If you're building a web app or SaaS product, Supabase is where I'd point you first. It gives you a PostgreSQL database, authentication, file storage, and real-time subscriptions — all in one platform, with a free tier that's genuinely usable.\n\nI use it for Tidify AI's user authentication and to store user data. Setup took an afternoon and it's been rock solid since. The Row Level Security feature means my users' data is properly isolated without writing complex backend logic.\n\nFor developers building their first SaaS, the free tier buys you a lot of runway before you need to spend anything.`,
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
    review: `For Next.js apps, Vercel is the obvious choice — they literally built Next.js, so the integration is seamless. You connect your GitHub repo, and every push to main is automatically deployed. Preview URLs are generated for every branch.\n\nI use Vercel for Tidify AI and the experience has been flawless. Deployments take under a minute, the CDN means fast load times globally, and the free tier handles significant traffic before you need to upgrade.\n\nIf you're building with Next.js, just use Vercel. The time you'd spend configuring alternatives isn't worth it.`,
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return TOOLS.filter((t) => t.featured);
}

export const CATEGORIES = ["AI", "Design", "Automation", "Hosting", "Domains", "Database", "Productivity"] as const;
