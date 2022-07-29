import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/Globalstyle";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletconnect";
import "../styles/slider-dots.css";
import store, { persistor } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import React from "react";
import useThemeMode from "../hooks/useThemeMode";
import { dark, light } from "../styles/themes";
import Globalstyle from "../styles/Globalstyle";
import ThemeContext from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet,
  Web3ReactHooks
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
];
const ThemePreferenceContext = React.createContext(0);
// const [cookies, setCookie] = useCookies()

//  const [cookies, setCookie, removeCookie] = useCookies(["CookieConsent"]);
export interface ThemeMode {
  setCurrentTheme: React.Dispatch<React.SetStateAction<Array<any>>>;
  currentTheme: "dark";
}

const setCurrentThemeAndSavePref = (theme) => {
  // setCurrentTheme(theme);
  //  setCookie("CookieConsent", theme, {
  //    path: "/",
  //    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  //  });
};
// setCurrentTheme("dark");

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "dark" ? dark : light;

  const PageWrapper = styled.div`
    margin-top: 100px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 80px;
    }
  `;

  return (
    <Web3ReactProvider connectors={connectors}>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <Globalstyle />
          <Provider store={store}>
            <PageWrapper>
              <PersistGate loading={null} persistor={persistor}>
                <Navbar />
                <Component {...pageProps} />
                <ToastContainer />
                <Footer />
              </PersistGate>
            </PageWrapper>
          </Provider>
        </ThemeProvider>
      </ThemeContext>
    </Web3ReactProvider>
  );
}

export default MyApp;
