import { Button, Input, InputProps } from "antd";
import React, { memo } from "react";
import cx from "classnames";
import { IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import "./styles.scss";

export interface Props extends InputProps {}
function InputSearch({ className, ...props }: Props) {
  const t = useTranslations("Home");
  return (
    <Input
      prefix={<IconSearch className="text-neutral-10" />}
      suffix={
        <Button
          type="primary"
          className="bg-primary-linear h-[40px] rounded-big-xl px-6 text-base text-white lg:text-lg-body"
        >
          {t("search")}
        </Button>
      }
      {...props}
      className={cx(
        "input-search-scoutlens h-fit max-h-[72px] min-w-[300px] rounded-[64px] border-neutral-90 bg-neutral-90 p-2 text-white placeholder-neutral-50 placeholder:text-lg-body focus-within:border-neutral-50 focus-within:shadow-none xl:w-[800px] xl:p-4",
        className,
      )}
    />
  );
}

export default memo(InputSearch);
