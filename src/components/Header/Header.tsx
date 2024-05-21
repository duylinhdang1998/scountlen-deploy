"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuLink from "../MenuLink/MenuLink";
import { useTranslations } from "next-intl";
import { IconChartDots, IconCoin, IconCoins } from "@tabler/icons-react";
import cx from "classnames";
import ButtonWeb3Login from "../ButtonWeb3Login/ButtonWeb3Login";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import MenuMobile from "../MenuMobile/MenuMobile";

export default function Header() {
  const t = useTranslations();
  return (
    <header className="bg-black">
      <div className="container mx-auto flex w-full items-center justify-between py-4 xl:px-0">
        <Link href="/" className="px-3 xl:px-0">
          <Image
            src="/img/logo.png"
            width={207}
            height={26}
            alt="logo-scoutlen"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <MenuMobile />
        <nav className="hidden xl:block">
          <ul className="flex items-center space-x-6">
            <MenuLink
              href="/"
              label={t("token_data")}
              icon={(active) => (
                <IconCoin
                  size={24}
                  className={cx({
                    "text-primary": active,
                    "text-white": !active,
                  })}
                />
              )}
            />
            <MenuLink
              href="/token-data"
              label={t("pair_data")}
              icon={(active) => (
                <IconCoins
                  size={24}
                  className={cx({
                    "text-primary": active,
                    "text-white": !active,
                  })}
                />
              )}
            />
            <MenuLink
              href="/trade-data"
              label={t("trade_data")}
              icon={(active) => (
                <IconChartDots
                  size={24}
                  className={cx({
                    "text-primary": active,
                    "text-white": !active,
                  })}
                />
              )}
            />
          </ul>
        </nav>
        <div className="hidden items-center space-x-3 xl:flex">
          <ButtonWeb3Login />
          <AccountDropdown />
        </div>
      </div>
    </header>
  );
}
