import { IconCaretDownFilled } from "@tabler/icons-react";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { memo } from "react";

function ButtonWeb3Login() {
  const t = useTranslations();
  return (
    <Button
      type="default"
      className="flex h-auto items-center space-x-2 rounded-[64px] border-2 border-primary bg-alpha-neutral py-2 text-white"
    >
      <Image src="/img/yeve.png" alt="yeve" width={32} height={32} />
      <span className="text-base font-semibold text-white">
        {t("web3_login")}
      </span>
      <IconCaretDownFilled size={12} color="#fff" />
    </Button>
  );
}

export default memo(ButtonWeb3Login);
1;
