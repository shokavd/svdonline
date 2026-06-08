const BASE = "https://svdonline.com";

export function localeAlternates(locale: string, path: string = "") {
  const cleanPath = path && !path.startsWith("/") ? `/${path}` : path;
  return {
    canonical: `${BASE}/${locale}${cleanPath}`,
    languages: {
      en: `${BASE}/en${cleanPath}`,
      nl: `${BASE}/nl${cleanPath}`,
      "x-default": `${BASE}/en${cleanPath}`,
    },
  };
}
