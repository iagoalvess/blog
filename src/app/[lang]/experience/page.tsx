import type { Metadata } from "next";
import { Lang, t } from "../../../lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Metadata {
  const { lang } = params;

  return {
    title: t("experience.title", lang),
    description: t("meta.experience.description", lang),
    alternates: {
      canonical: `/${lang}/experience`,
      languages: { "pt-BR": "/pt/experience", en: "/en/experience" },
    },
  };
}

interface Role {
  id: string;
  bullets: number;
  tech: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    id: "experience.dev",
    bullets: 5,
    current: true,
    tech: [
      "C#",
      ".NET",
      ".NET Framework",
      "ASP.NET Core",
      "Entity Framework",
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "Docker",
      "GitLab",
    ],
  },
  {
    id: "experience.intern",
    bullets: 4,
    tech: ["C#", ".NET Framework", "SQL Server", "REST APIs", "Git"],
  },
  {
    id: "experience.pijunior",
    bullets: 3,
    tech: ["Python", "REST APIs", "SQL", "Git"],
  },
  {
    id: "experience.ufmg",
    bullets: 0,
    tech: ["C++", "Python", "SQL"],
  },
];

function RoleCard({ id, bullets, tech, current, lang }: Role & { lang: Lang }) {
  return (
    <div
      id={id.replace("experience.", "")}
      className="scroll-mt-8 flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 transition-all target:ring-2 target:ring-sky-500 dark:divide-zinc-500 dark:ring-zinc-500 dark:target:ring-sky-600"
    >
      <div className="flex items-baseline justify-between gap-4 p-4 max-sm:flex-col max-sm:items-start">
        <div className="flex flex-col">
          <h2 className="text-xl">{t(`${id}.role`, lang)}</h2>
          <span className="text-zinc-500 dark:text-zinc-400">
            {t(`${id}.org`, lang)}
          </span>
        </div>
        <span
          className={`shrink-0 text-sm ${
            current
              ? "inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500"
              : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {current && (
            <span className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
          )}
          {t(`${id}.period`, lang)}
        </span>
      </div>

      <p className="p-4 text-justify">{t(`${id}.body`, lang)}</p>

      {bullets > 0 && (
        <ul className="space-y-3 p-4">
          {Array.from({ length: bullets }, (_, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-600" />
              <span className="text-justify">{t(`${id}.b${i + 1}`, lang)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 p-4">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full px-2.5 py-0.5 text-sm ring-1 ring-zinc-400 dark:ring-zinc-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage({
  params,
}: {
  params: { lang: Lang };
}) {
  const { lang } = params;

  return (
    <>
      <h1 className="mb-4 mt-4 text-center text-5xl max-sm:text-4xl">
        {t("experience.title", lang)}
      </h1>
      <p className="mb-16 text-center text-zinc-500 dark:text-zinc-400">
        {t("experience.subtitle", lang)}
      </p>
      <div className="space-y-20">
        {roles.map((role) => (
          <RoleCard key={role.id} {...role} lang={lang} />
        ))}
      </div>
    </>
  );
}
