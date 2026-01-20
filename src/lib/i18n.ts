import en from "../../messages/en.json";
import pt from "../../messages/pt.json";

type Lang = "en" | "pt";
type LocaleMap = Record<string, Record<string, string>>;

const locales: LocaleMap = {
  en,
  pt,
};

export function getLanguage(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang");
  if (stored === "pt") return "pt";
  if (stored === "en") return "en";
  const nav = (navigator && (navigator.language || (navigator as any).userLanguage)) || "";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function setLanguage(lang: Lang) {
  if (typeof window === "undefined") return;
  localStorage.setItem("lang", lang);
  try {
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  } catch {
    // ignore
  }
}

export function t(key: string, lang?: Lang) {
  const usedLang = lang || getLanguage();
  const messages = locales[usedLang] || locales.en;
  return messages[key] ?? key;
}

export default t;
