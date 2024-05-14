"use client";
import React, { ReactNode } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import { env } from "@/env/env";
import { wagmiConfig } from "@/libs/wagmi/config";

const queryClient = new QueryClient();
const projectId = env.NEXT_PUBLIC_PROJECT_ID ?? "";

if (!env.NEXT_PUBLIC_PROJECT_ID) throw new Error("Project ID is not defined");

createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  themeMode: "dark",
});

export default function Web3Config({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
