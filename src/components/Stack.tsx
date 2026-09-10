import { Lang, t } from "../lib/i18n";

// ponytail: lista estática — vira CMS/JSON no dia em que mudar mais de uma vez por mês
const groups: { labelKey: string; items: string[] }[] = [
  {
    labelKey: "stack.languages",
    items: ["C#", "Java", "Python", "C++", "SQL"],
  },
  {
    labelKey: "stack.backend",
    items: [
      ".NET",
      ".NET Framework",
      "ASP.NET Core",
      "Entity Framework",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
    ],
  },
  {
    labelKey: "stack.data",
    items: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    labelKey: "stack.tools",
    items: ["Docker", "Git", "GitLab", "GitHub"],
  },
];

export const stackItems = groups.flatMap((group) => group.items);

export default function Stack({ lang }: { lang: Lang }) {
  return (
    <section className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      {groups.map((group) => (
        <div
          key={group.labelKey}
          className="flex gap-4 p-4 max-sm:flex-col sm:items-baseline"
        >
          <h2 className="w-28 shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
            {t(group.labelKey, lang)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full px-2.5 py-0.5 text-sm ring-1 ring-zinc-400 dark:ring-zinc-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
