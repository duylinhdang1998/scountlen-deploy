import { useTranslations } from "next-intl";
import React from "react";
import EnrichItem from "./EnrichItem";

export default function EnrichSection() {
  const t = useTranslations("Home");
  return (
    <div className="h-full rounded-[4px_0px_0px_4px] border-r border-r-alpha-neutral bg-alpha-neutral p-6">
      <div className="flex flex-col space-y-6">
        <span className="text-xl text-neutral-10">
          {t("enrich_your_products")}
        </span>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-3">
            <EnrichItem text={t("apis")} src="/img/api_setting.svg" />
          </div>
          <div className="col-span-3">
            <EnrichItem text={t("web_socket")} src="/img/websocket.png" />
          </div>
          <div className="col-span-3">
            <EnrichItem text={t("iFrame")} src="/img/iframe.png" />
          </div>
          <div className="col-span-3">
            <EnrichItem text={t("price_bots")} src="/img/price_robots.png" />
          </div>
        </div>
        <span className="text-lg-body text-neutral-10 xl:text-xl block">
          {t("details_pricing")}
        </span>
      </div>
    </div>
  );
}
