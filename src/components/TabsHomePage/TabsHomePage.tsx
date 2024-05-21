import { Divider, Tabs } from "antd";
import React from "react";
import "./styles.scss";
import { useTranslations } from "next-intl";
import {
  IconDatabaseSearch,
  IconSpeakerphone,
  IconTrendingUp,
} from "@tabler/icons-react";
import TableTrendingToken from "../TableTrendingToken/TableTrendingToken";
export default function TabsHomePage() {
  const t = useTranslations("Home");
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      size="middle"
      indicator={undefined}
      className="custom-tabs"
      items={[
        {
          label: (
            <div className="flex items-center space-x-2">
              <IconTrendingUp className="text-neutral-50" size={24} />
              <span className="text-neutral-50">{t("trending_tokens")}</span>
            </div>
          ),
          key: "trending_tokens",
          children: <TableTrendingToken />,
        },
        {
          label: (
            <div className="flex items-center space-x-2">
              <IconDatabaseSearch className="text-neutral-50" size={24} />
              <span className="text-neutral-50">{t("find_gems")}</span>
            </div>
          ),
          key: "find_gems",
          children: `find gems`,
        },
        {
          label: (
            <div className="flex items-center space-x-2">
              <IconSpeakerphone className="text-neutral-50" size={24} />
              <span className="text-neutral-50">{t("new_listings")}</span>
            </div>
          ),
          key: "new_listings",
          children: `new listings`,
        },
        {
          label: (
            <div className="flex items-center space-x-2">
              <IconTrendingUp className="text-neutral-50" size={24} />
              <span className="text-neutral-50">{t("top_traders")}</span>
            </div>
          ),
          key: "top_traders",
          children: `top traders`,
        },
      ]}
    />
  );
}
