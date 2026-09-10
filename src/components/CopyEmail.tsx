"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Lang, t } from "../lib/i18n";

export default function CopyEmail({
  email,
  lang,
}: {
  email: string;
  lang: Lang;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // clipboard bloqueado (http, permissão negada): o e-mail continua selecionável ao lado
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={t("home.aria.copyEmail", lang)}
      className="flex items-center gap-1 text-zinc-800 transition-all dark:text-zinc-200"
    >
      {copied ? (
        <>
          <Check strokeWidth={1.4} className="size-4 text-green-600 dark:text-emerald-500" />
          <span className="text-sm text-green-600 dark:text-emerald-500">
            {t("home.copied", lang)}
          </span>
        </>
      ) : (
        <Copy strokeWidth={1.4} className="size-4" />
      )}
    </button>
  );
}
