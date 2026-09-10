import { Download } from "lucide-react";
import { Lang, t } from "../lib/i18n";

export default function DownloadCV({ lang }: { lang: Lang }) {
  const file = lang === "pt" ? "IagoAlvesPTBR.pdf" : "IagoAlvesEN.pdf";

  return (
    <a
      href={`/${file}`}
      download={file}
      className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-all sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:dark:hover:bg-zinc-800"
    >
      <span className="text-nowrap">{t("home.downloadCV", lang)}</span>
      <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
    </a>
  );
}
