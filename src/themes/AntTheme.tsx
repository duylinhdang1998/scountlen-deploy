"use client";

import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF57C1",
          fontFamily: "inherit",
        },
        components: {
          Input: {
            activeBorderColor: "blue",
            activeShadow: "transparent",
            colorTextPlaceholder: "#969A9C",
          },
          Table: {
            rowHoverBg: "transparent",
          },
        },
      }}
    >
      {node}
    </ConfigProvider>
  </>
);

export default withTheme;
