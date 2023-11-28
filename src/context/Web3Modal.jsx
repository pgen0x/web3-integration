"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { goerli, mainnet } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "0d5804d58281b04f0451a58bd7392ec5";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
};

const helachain = {
  id: 666888,
  name: "HELATEST - Testnet",
  network: "Helachain",
  nativeCurrency: {
    decimals: 18,
    name: "Helachain",
    symbol: "HLUSD",
  },
  rpcUrls: {
    public: { http: ["https://testnet-rpc.helachain.com"] },
    default: { http: ["https://testnet-rpc.helachain.com"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Helachain Explorer",
      url: "https://testnet-blockexplorer.helachain.com",
    },
    default: {
      name: "Helachain Explorer",
      url: "https://testnet-blockexplorer.helachain.com",
    },
  },
};

const chains = [mainnet, helachain, goerli];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  chainImages: {
    666888: "/helaicon.svg",
  },
  themeVariables: {
    "--w3m-accent": "#3bc5d1",
  },
});

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
