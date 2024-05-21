import React, { memo } from "react";
import cx from "classnames";
export interface Props {
  text: string;
  status: "normal" | "up" | "down";
  className?: string;
}

function TextPercent({ text, status, className }: Props) {
  return (
    <span
      className={cx(
        "text-sm",
        {
          "text-status-alert": status === "down",
          "text-status-success": status === "up",
          "text-neutral-10": status === "normal",
        },
        className,
      )}
    >
      {text} %
    </span>
  );
}
export default memo(TextPercent);
