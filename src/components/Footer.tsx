import { Lang, t } from "../lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 max-sm:items-start dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <a
          className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
          href="https://github.com/iagoalvess/blog"
          target="_blank"
        >
          {t("footer.code", lang)}
        </a>
      </div>
      <blockquote className="text-zinc-800 dark:text-zinc-300">
        {t("footer.quote", lang)}
      </blockquote>
    </footer>
  );
}
