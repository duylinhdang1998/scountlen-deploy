import { Table } from "antd";
import { TableProps } from "antd/lib";
import "./styles.scss";
import { ColumnGroupType } from "antd/es/table";
import { ReactNode, type Key } from "react";
import { ColumnType } from "antd/lib/table";
import { SorterResult } from "antd/es/table/interface";
import Footer, { Props as FooterProps } from "./Footer";
import cx from "classnames";

type AntColumnType<RecordType extends Record<string, any>> =
  | (ColumnGroupType<RecordType> & {
      dataIndex: undefined;
      render: () => ReactNode;
    })
  | ColumnType<RecordType>;
export type ListingColumnType<RecordType extends Record<string, any>> = Omit<
  AntColumnType<RecordType>,
  "width"
> & { width: number };
export interface Props<RecordType extends Record<string, any>>
  extends FooterProps,
    Omit<TableProps<RecordType>, "onChange" | "dataSource"> {
  isLoading?: boolean;
  data?: TableProps<RecordType>["dataSource"];
  columns?: Array<ListingColumnType<RecordType>>;
  rowKey?: (record: RecordType) => Key;
  showFooter?: boolean;
  onSorter?: (sorter: SorterResult<RecordType>) => void;
}

export default function MyTable<RecordType extends Record<string, any>>({
  currentPage,
  onChange,
  recordsPerPage,
  totalRecords,
  data = [],
  columns = [],
  showFooter = true,
  className,
  isLoading,
  onSorter,
  ...props
}: Props<RecordType>) {
  return (
    <div className="custom-table--theme flex h-full flex-col justify-between space-y-6">
      <div className="relative">
        <Table
          {...props}
          columns={columns}
          className={cx("table-custom", className)}
          dataSource={data}
          pagination={false}
          scroll={{ x: 1000 }}
          loading={isLoading}
          bordered={false}
          rowHoverable={false}
          tableLayout="fixed"
          onChange={(_, __, sorter) => {
            onSorter?.(sorter as any);
          }}
        />
      </div>
      {showFooter && (
        <Footer
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
          totalRecords={totalRecords}
        />
      )}
    </div>
  );
}
