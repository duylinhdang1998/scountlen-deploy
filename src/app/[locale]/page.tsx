"use client";
import { useTranslations } from "next-intl";
import withTheme from "@/themes/AntTheme";
import InputSearch from "@/components/InputSearch/InputSearch";
import Image from "next/image";
import EnrichSection from "@/components/EnrichSection/EnrichSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import JoinCommunitySection from "@/components/JoinCommunitySection/JoinCommunitySection";
import { Tabs } from "antd";
import TabsHomePage from "@/components/TabsHomePage/TabsHomePage";

function Home() {
  const t = useTranslations("Home");

  return (
    <div className="bg-img-home h-auto px-3 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-12 py-6">
          <div className="flex items-center justify-between xl:py-[64px]">
            <InputSearch placeholder={t("search_by_name")} />
            <Image
              src="/img/dev-support.png"
              alt="dev-support"
              width={177}
              height={69}
              className="hidden xl:block"
            />
          </div>
          <div className="tab-table">
            <TabsHomePage />
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 h-full overflow-hidden xl:col-span-4">
              <EnrichSection />
            </div>
            <div className="col-span-12 h-full overflow-hidden xl:col-span-4">
              <TrustedSection />
            </div>
            <div className="col-span-12 h-full overflow-hidden xl:col-span-4">
              <JoinCommunitySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
