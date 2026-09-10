import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import Header from "./Header";
import Footer from "../../components/Footer";
import { ScrollToTop } from "../../components/scroll-to-top";
import { Lang, htmlLang, isLang, languages, siteUrl, t } from "../../lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Metadata {
  const lang = isLang(params.lang) ? params.lang : "en";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("meta.title", lang),
      template: `%s · ${t("header.name", lang)}`,
    },
    description: t("meta.home.description", lang),
    alternates: {
      canonical: `/${lang}`,
      languages: { "pt-BR": "/pt", en: "/en" },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${lang}`,
      siteName: t("header.name", lang),
      title: t("meta.title", lang),
      description: t("meta.home.description", lang),
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;

  return (
    <html lang={htmlLang[lang]} className="min-h-screen scroll-smooth">
      <body className={`${karla.className} min-h-full px-6`}>
        <Analytics />
        <Script id="theme-toggle" strategy="beforeInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header lang={lang} />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop lang={lang} />
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
