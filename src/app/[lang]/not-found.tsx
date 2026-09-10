"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLang, t } from "../../lib/i18n";

// not-found não recebe params, então o idioma sai da própria URL
export default function NotFound() {
  const segment = usePathname().split("/")[1] ?? "";
  const lang = isLang(segment) ? segment : "en";

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-5xl max-sm:text-3xl">{t("notfound.title", lang)}</h1>
      <Link
        href={`/${lang}`}
        className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
      >
        {t("notfound.homeLink", lang)}
      </Link>
    </div>
  );
}
