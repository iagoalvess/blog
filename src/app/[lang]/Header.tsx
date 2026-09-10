"use client";

import { ChevronLeft, Moon, Sun, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang, t } from "../../lib/i18n";

const navItems = [
  { path: "/projects", label: "nav.projects", aria: "header.aria.viewProjects" },
  {
    path: "/experience",
    label: "nav.experience",
    aria: "header.aria.viewExperience",
  },
  { path: "/about", label: "nav.about", aria: "header.aria.viewAbout" },
];

const linkStyle =
  "group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all focus-visible:ring-opacity-100 sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const route = pathname.replace(/^\/(pt|en)/, "") || "/";
  const isHome = route === "/";
  const otherLang: Lang = lang === "pt" ? "en" : "pt";

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ${isHome ? "ring-0" : "ring-1"} ring-sky-500 ring-opacity-0 transition-all max-sm:text-center sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0`}
          href={`/${lang}`}
          aria-label={t("header.aria.backToHome", lang)}
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center">
            {t("header.name", lang)}
            <span className="text-zinc-500 dark:text-zinc-400">
              {t("header.role", lang)}
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group relative flex items-center"
            aria-label={t("header.aria.toggleTheme", lang)}
          >
            {/* os dois ícones vão no HTML; o tema decide qual aparece, sem esperar o JS */}
            <Sun
              strokeWidth={1.4}
              className="size-5 fill-yellow-300 transition-all sm:hover:rotate-45 dark:hidden"
            />
            <Moon
              strokeWidth={1.4}
              className="hidden size-5 fill-gray-700 transition-all dark:block"
            />
          </button>
          <Link
            href={`/${otherLang}${route === "/" ? "" : route}`}
            className="text-zinc-700 dark:text-zinc-200"
            aria-label={t("header.aria.toggleLang", lang)}
            hrefLang={otherLang}
          >
            {otherLang.toUpperCase()}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.path}
              className={linkStyle}
              href={`/${lang}${item.path}`}
              aria-label={t(item.aria, lang)}
              aria-current={route === item.path ? "page" : undefined}
            >
              {t(item.label, lang)}
              <Triangle
                aria-hidden="true"
                className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
