import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Lang, t } from "../../../lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Metadata {
  const { lang } = params;

  return {
    title: t("about.title", lang),
    description: t("meta.about.description", lang),
    alternates: {
      canonical: `/${lang}/about`,
      languages: { "pt-BR": "/pt/about", en: "/en/about" },
    },
  };
}

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {t("about.title", lang)}
      </h1>
      <article className="space-y-4 text-justify">
        <p>{t("about.p1", lang)}</p>
        <p>{t("about.p2", lang)}</p>
        <p>
          {t("about.p3", lang)}{" "}
          <a href="https://ufmg.br/" target="_blank" rel="noopener noreferrer">
            (UFMG)
          </a>
        </p>
        <p>{t("about.p4", lang)}</p>
        <p>{t("about.p5", lang)}</p>
        <p>{t("about.p6", lang)}</p>
        <p className="text-center">
          <Link
            href={`/${lang}/experience`}
            className="inline-flex items-center gap-1 underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
          >
            {t("about.experienceLink", lang)}
            <ArrowUpRight strokeWidth={1.4} className="size-4" />
          </Link>
        </p>
        <p>{t("about.p7", lang)}</p>
        <p>
          {t("about.contact", lang)}{" "}
          <a
            href="https://www.linkedin.com/in/iago-alvess"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a href="mailto:iagoalves.voador@gmail.com">
            iagoalves.voador@gmail.com
          </a>
        </p>
        <p>{t("about.signoff", lang)}</p>
      </article>
    </>
  );
}
