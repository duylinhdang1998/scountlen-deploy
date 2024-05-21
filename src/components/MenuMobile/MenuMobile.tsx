import {
  IconChartDots,
  IconCoin,
  IconCoins,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import MenuLink from "../MenuLink/MenuLink";
import { useTranslations } from "next-intl";
import cx from "classnames";
import "./styles.scss";
import ButtonWeb3Login from "../ButtonWeb3Login/ButtonWeb3Login";
import AccountDropdown from "../AccountDropdown/AccountDropdown";

export default function MenuMobile() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-menu block xl:hidden">
      <Button
        onClick={showDrawer}
        type="primary"
        className="bg-primary-linear mr-3 h-12 w-12 rounded"
        icon={<IconMenu2 color="#fff" size={24} />}
      />
      <Drawer
        title={null}
        closeIcon={<IconX size={48} color="#fff" />}
        className="drawer-mobile bg-black"
        onClose={onClose}
        open={open}
        rootClassName="aaaa"
      >
        <ul className="flex flex-col">
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
        <div className="mt-4 flex flex-col">
          <ButtonWeb3Login />
          <AccountDropdown />
        </div>
      </Drawer>
    </div>
  );
}
