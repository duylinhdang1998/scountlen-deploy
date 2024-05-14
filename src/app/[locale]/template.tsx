import { ConfigProvider } from "antd";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "inherit",
          colorPrimary: "#FA0513",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
