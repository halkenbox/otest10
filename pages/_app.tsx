import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.OptimismGoerli;

function MyApp({ Component, pageProps }: AppProps) {
}

export default MyApp;
