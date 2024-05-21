import { useTranslations } from "next-intl";
import React, { memo } from "react";
import TrustedItem from "./TrustedItem";

const myArr = Array.from({ length: 8 }).map((_, index) => index + 1);
function TrustedSection() {
  const t = useTranslations("Home");

  return (
    <div className="rounded-[4px_0px_0px_4px] border-r border-r-alpha-neutral bg-alpha-neutral p-6 h-full">
      <div className="flex flex-col space-y-6">
        <span className="text-xl text-neutral-10">
          {t("trusted_by_the_best")}
        </span>
        <div className="grid grid-cols-12 gap-1">
          {myArr.map((item) => (
            <div key={item.toString()} className="col-span-3">
              <TrustedItem />
            </div>
          ))}
        </div>
        <span className="text-lg-body xl:text-xl text-neutral-10">{t("get_it_touch")}</span>
      </div>
    </div>
  );
}

export default memo(TrustedSection);
