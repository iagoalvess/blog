"use client";

import Translate from "./Translate";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <a
          className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
          href="https://github.com/iagoalvess/blog"
          target="_blank"
        >
          <Translate id="footer.code" />
        </a>
      </div>
      <blockquote className="text-zinc-800 dark:text-zinc-300">
        <Translate id="footer.quote" />
      </blockquote>
    </footer>
  );
}
