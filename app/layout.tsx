import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SVD Online — Tools I Actually Use",
  description: "Shoka van Dooren shares the business tools, apps, and software she uses daily to run her online business. Honest reviews, real experience.",
  metadataBase: new URL("https://svdonline.com"),
  openGraph: {
    title: "SVD Online — Tools I Actually Use",
    description: "Honest tool reviews from someone who actually uses them to run an online business.",
    url: "https://svdonline.com",
    siteName: "SVD Online",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
        <header className="border-b border-[var(--border)] bg-[var(--card)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
              SVD Online
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/tools" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Tools</Link>
              <Link href="/about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">About</Link>
              <a
                href="https://tidifyai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Try Tidify AI
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} SVD Online · Shoka van Dooren</p>
            <p className="text-xs">Some links on this site are affiliate links. I only recommend tools I actually use.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
