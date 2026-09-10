import en from "../../messages/en.json";
import pt from "../../messages/pt.json";

export const languages = ["pt", "en"] as const;
export type Lang = (typeof languages)[number];

export const fallbackLang: Lang = "en";

const messages: Record<Lang, Record<string, string>> = { en, pt };

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

export function t(key: string, lang: Lang) {
  return messages[lang][key] ?? messages[fallbackLang][key] ?? key;
}

// o idioma vem da URL, então quem renderiza sempre sabe qual é — sem estado no cliente
export function translator(lang: Lang) {
  return (key: string) => t(key, lang);
}

export const siteUrl = "https://blog-iago-alves.vercel.app";

export const htmlLang: Record<Lang, string> = { pt: "pt-BR", en: "en" };

export default t;
