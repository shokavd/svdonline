import Image from "next/image";
import Link from "next/link";
import { TOOLS } from "../../lib/tools";

export const metadata = {
  title: "About Shoka — SVD Online",
  description: "I'm Shoka van Dooren — virtual assistant, online entrepreneur, and the person behind every review on this site.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
        <div className="shrink-0">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--background)]">
            <Image
              src="/shoka.jpg"
              alt="Shoka van Dooren"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Hi, I'm Shoka</h1>
          <p className="text-[var(--muted)] leading-relaxed">
            Virtual assistant, online entrepreneur, and the person behind every review on this site. I've been running my own online business for years — and these are the tools that actually make it work.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8 text-[var(--muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">What I do</h2>
          <p>
            I run two businesses. <strong className="text-[var(--foreground)]">SVD Virtual Assistance</strong> is my VA practice — I help founders and online entrepreneurs with everything from inbox management to content creation. <strong className="text-[var(--foreground)]">Tidify AI</strong> is a tool I built to scratch my own itch: 20 focused AI writing modes in one place, designed for people who don't want to become prompt engineers.
          </p>
          <p className="mt-3">
            Both businesses run almost entirely on software. Good tools mean fewer hours spent on admin and more time doing actual work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Why I built this site</h2>
          <p>
            Every week clients ask me: "What tool do you use for X?" I was sending the same recommendations over and over. So I put them all in one place.
          </p>
          <p className="mt-3">
            What you'll find here are the tools I actually pay for and use every day. No sponsored posts, no paid placements. If a tool is here, it's because I've tested it and it delivered.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Affiliate links</h2>
          <p>
            Some links on this site are affiliate links. If you sign up through my link, I earn a small commission — at no extra cost to you. This helps keep the site running.
          </p>
          <p className="mt-3">
            I only link to tools I would recommend regardless. If I cancelled a subscription, I'd remove the link. Simple as that.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">How I test tools</h2>
          <p>
            I don't do short-term "trials" to write a review. I use these tools for months or years before recommending them. I pay for them myself. I've cancelled plenty of tools that didn't deliver — those don't appear here.
          </p>
          <p className="mt-3">
            My ratings reflect long-term experience, not first impressions.
          </p>
        </section>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-4 my-12 py-8 border-y border-[var(--border)]">
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">{TOOLS.length}</p>
          <p className="text-sm text-[var(--muted)] mt-1">Tools reviewed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">3+</p>
          <p className="text-sm text-[var(--muted)] mt-1">Years running online</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[var(--accent)]">0</p>
          <p className="text-sm text-[var(--muted)] mt-1">Paid placements</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[var(--accent-light)] border border-orange-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">Start with my top picks</h2>
        <p className="text-[var(--muted)] mb-4">The tools I'd recommend to anyone running an online business — tried, tested, and genuinely used daily.</p>
        <Link
          href="/tools"
          className="inline-block bg-[var(--accent)] text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          Browse all tools →
        </Link>
      </div>
    </div>
  );
}
