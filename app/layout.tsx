import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({ variable: "--font-hk-grotesk", subsets: ["latin"] });

// TODO: Replace REPLACE_GA4_ID with your GA4 Measurement ID (e.g. G-XXXXXXXXXX)
const GA4_ID = "REPLACE_GA4_ID";
// TODO: Replace REPLACE_CLARITY_ID with your Microsoft Clarity Project ID
const CLARITY_ID = "REPLACE_CLARITY_ID";

export const metadata: Metadata = {
  metadataBase: new URL("https://svdonline.com"),
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <head>
        {/* Runs before paint, sets theme and lang attribute from URL */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);var p=window.location.pathname;document.documentElement.setAttribute('lang',p.startsWith('/nl')?'nl':'en');}catch(e){}` }} />

        {/* Google Analytics 4 */}
        {GA4_ID !== "REPLACE_GA4_ID" && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');` }} />
          </>
        )}

        {/* Microsoft Clarity */}
        {CLARITY_ID !== "REPLACE_CLARITY_ID" && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");` }} />
        )}
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-hk-grotesk), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
