import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { AppConfig } from "./utils/app-config";

const T4_AUTH = {
  token: "SCOUNTLENS-TOKEN",
};

const AUTH_PATH: any = {
  "/login": true,
  "/register": true,
  "/forgot-password": true,
};

const PATH_NEED_LOGIN: any = ["/account"];

export default async function middleware(request: NextRequest) {
  const { cookies } = request;
  const [, locale, segments] = request.nextUrl.pathname.split("/");

  const token = cookies.get(T4_AUTH.token);

  const isMatchAuthPath = AUTH_PATH[`/${segments}`];
  const isMatchPath = PATH_NEED_LOGIN.find((path: string) =>
    request.nextUrl.pathname.includes(`${locale}${path}`),
  );

  const intlMiddleware = createIntlMiddleware({
    locales: AppConfig.locales,
    defaultLocale: AppConfig.defaultLocale,
    localeDetection: false,
    localePrefix: "as-needed",
  });

  if (token && isMatchAuthPath) {
    request.nextUrl.pathname = `/${locale}`;
  }

  if (!token && isMatchPath) {
    request.nextUrl.pathname = `/${locale}/auth/login`;
  }
  const response = intlMiddleware(request);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(en|vi)/:path*"],
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/",
    "/(en|vi)/:path*",
  ],
};
