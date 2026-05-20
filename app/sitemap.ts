import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { locales } from "../lib/i18n";
import { TOOLS } from "../lib/tools";

const BASE = "https://svdonline.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tools", "/about", "/work-with-me", "/contact", "/faq", "/privacy", "/cookies", "/terms", "/onboarding"];

  const localePages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/work-with-me" ? 0.9 : 0.7,
    }))
  );

  const toolPages = locales.flatMap((locale) =>
    TOOLS.map((tool) => ({
      url: `${BASE}/${locale}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...localePages, ...toolPages];
}
