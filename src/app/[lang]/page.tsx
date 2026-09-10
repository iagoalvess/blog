import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import CopyEmail from "../../components/CopyEmail";
import DownloadCV from "../../components/DownloadCV";
import Stack, { stackItems } from "../../components/Stack";
import { Lang, siteUrl, t } from "../../lib/i18n";

const EMAIL = "iagoalves.voador@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/iago-alvess";
const GITHUB = "https://github.com/iagoalvess";

interface ExternalLinkItem {
  name: string;
  descriptionKey: string;
  url: string;
  icon: ReactNode;
}

const externalLinks: ExternalLinkItem[] = [
  {
    name: "LinkedIn",
    descriptionKey: "external.linkedin",
    url: LINKEDIN,
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    descriptionKey: "external.github",
    url: GITHUB,
    icon: <SiGithub />,
  },
];

const ExternalLink = ({
  link,
  lang,
}: {
  link: ExternalLinkItem;
  lang: Lang;
}) => {
  return (
    <a
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
          {t(link.descriptionKey, lang)}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  anchor: string;
  active?: boolean;
}

const timelineItems: TimelineItem[] = [
  {
    title: "timeline.item1.title",
    subtitle: "timeline.item1.subtitle",
    period: "timeline.item1.period",
    anchor: "ufmg",
  },
  {
    title: "timeline.item2.title",
    subtitle: "timeline.item2.subtitle",
    period: "timeline.item2.period",
    anchor: "pijunior",
  },
  {
    title: "timeline.item3.title",
    subtitle: "timeline.item3.subtitle",
    period: "timeline.item3.period",
    anchor: "intern",
  },
  {
    title: "timeline.item4.title",
    subtitle: "timeline.item4.subtitle",
    period: "timeline.item4.period",
    anchor: "dev",
    active: true,
  },
];

const Timeline = ({ lang }: { lang: Lang }) => {
  return (
    <div className="relative">
      {/* Horizontal line connecting all items */}
      <div className="absolute left-0 right-0 top-3 h-px bg-zinc-300 dark:bg-zinc-600" />

      <div className="flex justify-between">
        {timelineItems.map((item) => (
          <Link
            key={item.anchor}
            href={`/${lang}/experience#${item.anchor}`}
            className="group relative flex flex-col items-center rounded px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
          >
            {/* Dot */}
            <div
              className={`relative z-10 size-6 rounded-full border-2 transition-transform sm:group-hover:scale-125 ${
                item.active
                  ? "border-sky-500 bg-sky-500 dark:border-sky-600 dark:bg-sky-600"
                  : "border-zinc-400 bg-zinc-50 sm:group-hover:border-sky-500 dark:border-zinc-500 dark:bg-zinc-900 dark:sm:group-hover:border-sky-600"
              }`}
            >
              {item.active && (
                <div className="absolute inset-0 animate-ping rounded-full bg-sky-500 opacity-25 dark:bg-sky-600" />
              )}
            </div>

            {/* Content */}
            <div className="mt-3 flex flex-col items-center text-center">
              <span
                className={`text-[11px] font-medium sm:text-xs ${
                  item.active
                    ? "text-sky-600 dark:text-sky-500"
                    : "text-zinc-700 sm:group-hover:text-sky-600 dark:text-zinc-300 dark:sm:group-hover:text-sky-500"
                }`}
              >
                {t(item.title, lang)}
              </span>
              <span className="mt-0.5 text-[10px] text-zinc-500 max-sm:hidden dark:text-zinc-400">
                {t(item.subtitle, lang)}
              </span>
              <span className="mt-0.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                {t(item.period, lang)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// dados estruturados: é assim que buscador e crawler de vaga leem o perfil
const personSchema = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: t("header.name", lang),
  jobTitle: t("header.role", lang),
  email: `mailto:${EMAIL}`,
  url: `${siteUrl}/${lang}`,
  image: `${siteUrl}/${lang}/opengraph-image`,
  description: t("meta.home.description", lang),
  knowsAbout: stackItems,
  knowsLanguage: ["pt-BR", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal de Minas Gerais (UFMG)",
    url: "https://ufmg.br/",
  },
  worksFor: { "@type": "Organization", name: "Group Software" },
  sameAs: [LINKEDIN, GITHUB],
});

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;

  return (
    <div className="flex flex-col gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(lang)) }}
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl">{t("home.title", lang)}</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          {t("home.subtitle", lang)}
        </p>
      </div>

      <p className="text-justify text-sm">{t("home.intro", lang)}</p>

      {/* Timeline */}
      <Timeline lang={lang} />
      <Link
        href={`/${lang}/experience`}
        className="-mt-2 flex items-center justify-center gap-1 text-sm text-zinc-500 transition-all dark:text-zinc-400 sm:hover:text-zinc-800 dark:sm:hover:text-zinc-200"
      >
        {t("home.timelineLink", lang)}
        <ArrowUpRight strokeWidth={1.4} className="size-4" />
      </Link>
      <Stack lang={lang} />
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link) => (
          <ExternalLink key={link.url} link={link} lang={lang} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <div className="group -m-8 flex items-center gap-3 p-8 transition-all">
            <span className="select-all">{EMAIL}</span>
            <div className="inline-flex items-center gap-3">
              <CopyEmail email={EMAIL} lang={lang} />
              <a
                href={`mailto:${EMAIL}`}
                className="text-zinc-800 dark:text-zinc-200"
                aria-label={t("home.aria.sendEmail", lang)}
              >
                <Send strokeWidth={1.4} className="size-4" />
              </a>
            </div>
          </div>
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            {t("home.online", lang)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <DownloadCV lang={lang} />
        </div>
      </div>
    </div>
  );
}
