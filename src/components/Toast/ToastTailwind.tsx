import { StatusType } from "@/libs/models/Status";
import React from "react";
import { Toast } from "react-hot-toast";
import cx from "classnames";

export interface Props {
  t: Toast;
  status: StatusType;
  title?: string;
  description?: string;
}
export default function ToastTailwind({
  t,
  status,
  title,
  description,
}: Props) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } pointer-events-auto flex w-full max-w-md rounded shadow-lg`}
    >
      <div
        className={cx(
          "flex w-full justify-between rounded-xl px-[26px] py-[18px]",
          {
            "bg-alpha-50-error": status === StatusType.ERROR,
            "bg-alpha-50-warning": status === StatusType.WARNING,
            "bg-alpha-50-success": status === StatusType.SUCCESS,
            "bg-alpha-50-info": status === StatusType.INFO,
          },
        )}
      >
        <div className="flex items-start space-x-3">
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-bold text-white">{title}</span>
            <span className="text-xs font-medium text-neutral-200">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
