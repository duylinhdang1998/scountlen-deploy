import Image from "next/image";
import React, { memo } from "react";

interface Props {
  text: string;
  src: string;
}
function EnrichItem({ text, src }: Props) {
  return (
    <div className="flex flex-col space-y-3 rounded bg-alpha-neutral py-6 items-center">
      <Image alt={text} src={src} width={55} height={55} />
      <span className="text-center text-xs font-semibold text-neutral-10">
        {text}
      </span>
    </div>
  );
}

export default memo(EnrichItem);
