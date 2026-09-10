import type { Metadata } from "next";
import ProjectsBrowser from "../../../components/ProjectsBrowser";
import { Lang, t } from "../../../lib/i18n";
import { allTech, projects } from "../../../lib/projects";

export function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Metadata {
  const { lang } = params;

  return {
    title: t("projects.title", lang),
    description: t("meta.projects.description", lang),
    alternates: {
      canonical: `/${lang}/projects`,
      languages: { "pt-BR": "/pt/projects", en: "/en/projects" },
    },
  };
}

export default function ProjectsPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;

  // traduz no servidor: o cliente só recebe texto pronto, não os arquivos de mensagem
  const translated = projects.map(({ descriptionKey, ...project }) => ({
    ...project,
    description: t(descriptionKey, lang),
  }));

  return (
    <>
      <h1 className="mb-4 mt-4 text-center text-5xl max-sm:text-4xl">
        {t("projects.title", lang)}
      </h1>
      <p className="mb-8 text-center text-zinc-500 dark:text-zinc-400">
        {t("projects.subtitle", lang)}
      </p>
      <ProjectsBrowser
        projects={translated}
        tech={allTech}
        labels={{
          all: t("projects.filter.all", lang),
          featured: t("projects.featured", lang),
          github: t("projects.viewOnGitHub", lang),
          website: t("projects.visitWebsite", lang),
          empty: t("projects.empty", lang),
          sections: {
            apps: t("projects.section.apps", lang),
            academic: t("projects.section.academic", lang),
          },
        }}
      />
    </>
  );
}
