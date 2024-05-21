import { ITrendingToken } from "@/models/trendingToken.interface";
import { useTranslations } from "next-intl";
import React from "react";
import MyTable, { ListingColumnType } from "../MyTable/MyTable";
import Image from "next/image";
import TextPercent from "../TextPercent/TextPercent";

const data: ITrendingToken[] = [
  {
    token: "Etherum",
    price: 33.552,
    hVol: "~ $46.52m",
    hTrader: "~ $46.52K",
    pricePercent: -45,
    hVolPercents: 12,
    hTraderPercents: 25,
  },
  {
    token: "Etherum",
    price: 33.552,
    hVol: "~ $46.52m",
    hTrader: "~ $46.52K",
    pricePercent: -45,
    hVolPercents: 12,
    hTraderPercents: 25,
  },
  {
    token: "Etherum",
    price: 33.552,
    hVol: "~ $46.52m",
    hTrader: "~ $46.52K",
    pricePercent: -45,
    hVolPercents: 12,
    hTraderPercents: 25,
  },
];
export default function TableTrendingToken() {
  const t = useTranslations("Home");
  const columns: ListingColumnType<ITrendingToken>[] = [
    {
      title: t("trending_tokens"),
      dataIndex: "token",
      width: 300,
      render: (text: string, _record: any, index: number) => {
        return (
          <div className="flex items-center space-x-3">
            <div className=" flex h-8 w-8 items-center justify-center rounded bg-alpha-neutral p-1 text-center text-neutral-10">
              #{index}
            </div>
            <Image src="/img/etherum.webp" alt="ether" width={32} height={32} />
            <span className="text-lg-body text-neutral-50">{text}</span>
          </div>
        );
      },
    },
    {
      title: t("price"),
      width: 120,
      dataIndex: "price",
      render: (text: number) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "price",
      render: (text: number) => <TextPercent text={`${text}`} status="down" />,
      align: "center",
    },
    {
      title: t("24h_vol"),
      width: 120,
      dataIndex: "hVol",
      align: "center",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
    },
    {
      title: null,
      width: 120,
      dataIndex: "hVolPercents",
      align: "center",
      render: (text: number) => <TextPercent text={`${text}`} status="up" />,
    },
    {
      title: t("24h_traders"),
      width: 120,
      dataIndex: "hTrader",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "hTraderPercents",
      render: (text: number) => <TextPercent text={`${text}`} status="up" />,
      align: "center",
    },
    {
      title: t("24h_traders"),
      width: 120,
      dataIndex: "hTrader",
      render: (text: string) => (
        <span className="text-sm text-neutral-10">${text}</span>
      ),
      align: "center",
    },
    {
      title: null,
      width: 120,
      dataIndex: "hTraderPercents",
      render: (text: number) => <TextPercent text={`${text}`} status="up" />,
      align: "center",
    },
  ];
  return (
    <div>
      <MyTable
        columns={columns}
        data={data}
        rowKey={(r) => `${r.token}`}
        recordsPerPage={100}
        totalRecords={1000}
        showFooter={true}
      />
    </div>
  );
}
