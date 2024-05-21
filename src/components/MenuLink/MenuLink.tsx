"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";

interface Props {
  label?: string;
  href: string;
  icon?: (active?: boolean) => React.ReactNode;
}
function MenuLink({ label, href, icon }: Props) {
  const pathname = usePathname();
  const locale = useLocale();
  const active = `${locale}${href}` === `${locale}${pathname}`;

  return (
    <Link
      className={cx("flex items-center space-x-2 text-lg-body font-semibold ", {
        "text-gradient-primary": active,
        "text-white": !active,
      })}
      href={href}
    >
      {icon?.(active)}
      <span>{label}</span>
    </Link>
  );
}

export default memo(MenuLink);
