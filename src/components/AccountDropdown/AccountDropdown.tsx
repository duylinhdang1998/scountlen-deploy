import { IconCaretDownFilled, IconUser } from "@tabler/icons-react";
import { Avatar, Dropdown, MenuProps } from "antd";
import React, { memo } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];

function AccountDropdown() {
  return (
    <Dropdown trigger={["click"]} menu={{ items }}>
      <div
        className="flex cursor-pointer items-center space-x-2"
        onClick={(e) => e.preventDefault()}
      >
        <Avatar style={{ verticalAlign: "middle" }} size="large">
          <IconUser />
        </Avatar>
        <span className="font-semibold uppercase text-neutral-10">ZK SYNC</span>
        <IconCaretDownFilled size={12} color="#fff" />
      </div>
    </Dropdown>
  );
}

export default memo(AccountDropdown);
