import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const t = useTranslations("Home");
  const locale = useLocale();
  return (
    <div className="bg-neutral-90 py-3">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 lg:flex-row lg:justify-between lg:space-y-0">
          <span className="text-xs font-normal text-neutral-30">
            © 2023 YEVE. All rights reserved.
          </span>
          <div className="flex items-center space-x-2">
            <Link
              href="/documentation"
              className="text-xs text-neutral-30"
              locale={locale}
            >
              {t("documentations")}
            </Link>
            <div className="h-1 w-1 rounded bg-neutral-30" />
            <Link
              className="text-xs text-neutral-30"
              href="/privacy"
              locale={locale}
            >
              {t("privacy_policy")}
            </Link>
            <div className="h-1 w-1 rounded bg-neutral-30" />
            <Link
              className="text-xs text-neutral-30"
              href="/terms"
              locale={locale}
            >
              {t("terms_of_use")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
