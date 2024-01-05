import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ['en-us', 'en', 'fa-ir', 'fa'];

const getLocal = request => {
    const negotiatorHeader = {};

    request.headers.forEach((value, key) => {
        negotiatorHeader[key] = value
    });

    const languages = new Negotiator({ headers: negotiatorHeader }).languages();
    console.log(languages);

    const defaultLocale = 'fa-ir';
    const locale = match(languages, locales, defaultLocale);
    console.log(locale);

    return locale;
}

export const middleware = (request) => {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
    
    if (pathnameHasLocale) return;

    const locale = getLocal(request);

    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? "" : "/"}${pathname}`, request.url));
}

export const config = {
    // matcher ignoring /next and /api
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}