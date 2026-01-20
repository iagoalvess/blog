"use client";

import { useEffect, useState } from "react";
import { t, getLanguage } from "../lib/i18n";

interface TranslateProps {
  id: string;
}

export default function Translate({ id }: TranslateProps) {
  // initialize to server default ('en') to avoid hydration mismatch
  const [lang, setLang] = useState<"en" | "pt">("en");

  useEffect(() => {
    const initial = getLanguage();
    setLang(initial);
    const handler = () => setLang(getLanguage());
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  return <>{t(id, lang)}</>;
}
