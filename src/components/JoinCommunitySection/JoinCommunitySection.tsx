import {
  IconFileAlert,
  IconFileDots,
  IconFileTypeDoc,
  IconHourglass,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function JoinCommunitySection() {
  const t = useTranslations("Home");
  return (
    <div className="h-full rounded-[4px_0px_0px_4px] border-r border-r-alpha-neutral bg-alpha-neutral p-6">
      <div className="flex flex-col space-y-[42px]">
        <div>
          <span className="block text-xl text-neutral-50">
            {t("join_our_community")}
          </span>
          <span className="text-xs text-neutral-50">
            {t("visit_our_social")}
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1">
          {[1, 2, 3, 4].map((item) => (
            <div className="col-span-3" key={item.toString()}>
              <div className="flex flex-col items-center justify-center space-y-1 rounded bg-alpha-neutral py-4">
                <Image
                  alt="telegram"
                  src={"/img/telegram.png"}
                  width={24}
                  height={24}
                />
                <span className="text-xs text-neutral-10">Telegram</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-1">
            <IconFileTypeDoc width={16} height={16} color="#fff" />
            <span className="text-xs text-neutral-50">
              {t("documentations")}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IconHourglass width={16} height={16} color="#fff" />
            <span className="text-xs text-neutral-50">
              {t("privacy_police")}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IconFileDots width={16} height={16} color="#fff" />
            <span className="text-xs text-neutral-50">
              {t("term_of_services")}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IconFileAlert width={16} height={16} color="#fff" />
            <span className="text-xs text-neutral-50">{t("disclaimer")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
