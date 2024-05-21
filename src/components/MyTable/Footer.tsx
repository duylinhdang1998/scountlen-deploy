import { Button, PaginationProps } from "antd";
import { useTranslations } from "next-intl";
import React, { useEffect, useMemo, useState } from "react";

export interface Props {
  currentPage?: number;
  recordsPerPage?: number;
  totalRecords?: number;
  onChange?: (page: number) => void;
  className?: string;
}
export default function Footer({
  currentPage = 1,
  recordsPerPage = 100,
  totalRecords = 1,
  onChange,
  className,
}: Props) {
  const t = useTranslations();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  function getPageRange(pageNumber: number) {
    const startRecord = (pageNumber - 1) * recordsPerPage + 1;
    const endRecord =
      pageNumber * recordsPerPage > totalRecords
        ? totalRecords
        : pageNumber * recordsPerPage;
    return `${startRecord}-${endRecord}`;
  }

  const valueRange = useMemo(() => {
    return getPageRange(currentPage);
  }, [totalRecords, currentPage]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
    onChange?.(page + 1);
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-base text-white">
        {t("show_pairs_number_of_total", {
          number: valueRange,
          total: totalRecords,
        })}
      </span>
      <Button
        onClick={handleChangePage}
        className="h-10 rounded bg-alpha-neutral px-3 text-white"
      >
        {t("pairs")} {getPageRange(page + 1)}
      </Button>
    </div>
  );
}
