import type { MetadataRoute } from "next";
import { languages, siteUrl } from "../lib/i18n";

const routes = ["", "/experience", "/projects", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${siteUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      // ponytail: sem alternates aqui — o Next 14.0 ignora, e o hreflang já sai no <head> de cada página
    })),
  );
}
