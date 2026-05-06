import { en } from "./en";
import { nl } from "./nl";

export type Locale = "en" | "nl";
export const locales: Locale[] = ["en", "nl"];
export type T = typeof en;

export function getT(locale: Locale): T {
  return locale === "nl" ? nl : en;
}
