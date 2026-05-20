import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://svdonline.com"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        {/* Runs before paint, sets theme and lang attribute from URL */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);var p=window.location.pathname;document.documentElement.setAttribute('lang',p.startsWith('/nl')?'nl':'en');}catch(e){}` }} />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
