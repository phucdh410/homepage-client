import { NextRequest, NextResponse } from "next/server";

import acceptLanguage from "accept-language";

import { fallbackLang, languages } from "./app/i18n";

acceptLanguage.languages(languages);

export const config = {
    // matcher: '/:lang*'
    matcher: ["/((?!_next).*)"],
};

const cookieName = "i18next";

export function middleware(request: NextRequest) {
    let lang;
    if (request.cookies.has(cookieName))
        lang = acceptLanguage.get(request?.cookies?.get(cookieName)?.value);
    if (!lang)
        lang = acceptLanguage.get(request.headers.get("Accept-Language"));
    if (!lang) lang = fallbackLang;

    // Redirect if lang in path is not supported
    if (
        !languages.some((loc) =>
            request.nextUrl.pathname.startsWith(`/${loc}`)
        ) &&
        !request.nextUrl.pathname.startsWith("/_next")
    ) {
        return NextResponse.redirect(
            new URL(`/${lang}${request.nextUrl.pathname}`, request.url)
        );
    }

    if (request.headers.has("referer")) {
        const refererUrl = new URL(request.headers.get("referer") || "");
        const langInReferer = languages.find((l) =>
            refererUrl.pathname.startsWith(`/${l}`)
        );
        const response = NextResponse.next();
        if (langInReferer) response.cookies.set(cookieName, langInReferer);
        return response;
    }

    return NextResponse.next();
}
