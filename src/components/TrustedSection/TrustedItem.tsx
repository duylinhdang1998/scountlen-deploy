import Image from "next/image";
import React, { memo } from "react";

function TrustedItem() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 rounded bg-alpha-neutral py-2">
      <Image alt="trusted" src="/img/ultimate.png" width={24} height={24} />
      <span className="text-center text-xs font-semibold text-neutral-10">
        Ultimate
      </span>
    </div>
  );
}
export default memo(TrustedItem);
