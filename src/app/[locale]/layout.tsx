import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Web3Config from "@/components/Web3Config/Web3Config";
import { cookieToInitialState } from "wagmi";
import { wagmiConfig } from "@/libs/wagmi/config";
import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";
import { Lexend } from "next/font/google";
import cx from "classnames";
import { AppConfig } from "@/utils/app-config";
import { notFound } from "next/navigation";
import "@/themes/global.css";
import Template from "./template";

const lexend = Lexend({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Scoutlens Web3",
  description: "Generated by create devteam",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  if (!AppConfig.locales.includes(locale)) notFound();

  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get("cookie"),
  );

  return (
    <html lang={locale}>
      <body className={cx(lexend.className)}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Web3Config initialState={initialState}>
            <AntdRegistry>
              <Template key="root">{children}</Template>
              <Toaster position="bottom-right" reverseOrder={false} />
            </AntdRegistry>
          </Web3Config>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
