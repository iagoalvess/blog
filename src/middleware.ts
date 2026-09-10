import { NextRequest, NextResponse } from "next/server";

// ponytail: lista repetida de src/lib/i18n para não arrastar os JSONs de tradução pro edge
const languages = ["pt", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLang = languages.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  );
  if (hasLang) return;

  const accepted = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const lang = accepted.startsWith("pt") ? "pt" : "en";

  const path = pathname === "/" ? "" : pathname;

  return NextResponse.redirect(new URL(`/${lang}${path}`, request.url));
}

export const config = {
  // tudo que não é arquivo estático nem rota interna do Next
  matcher: ["/((?!_next|.*\\..*).*)"],
};
