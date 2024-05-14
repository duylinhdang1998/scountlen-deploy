"use client";
import { useTranslations } from "next-intl";
import { Alert, Button } from "antd";
import withTheme from "@/themes/AntTheme";

function Home() {
  const t = useTranslations("Home");

  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center gap-5">
        <p className="text-3xl">Heading</p>
        <Alert
          message={
            <span className="font-semibold text-status-warning-50">
              Are you sure you want to delete your account? This will erase all
              of your account data from the site. To delete your account enter
              your password below
            </span>
          }
          closable
          className="bg-alpha-50-warning"
        />
        <Button type="primary">Submit</Button>
      </div>
    </main>
  );
}
export default Home;
