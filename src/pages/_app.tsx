import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import {
    hooks as coinbaseWalletHooks,
    coinbaseWallet,
} from '../connectors/coinbasewallet';
import { hooks as metaMaskHooks, metaMask } from '../connectors/metamask';
import {
    hooks as walletConnectHooks,
    walletConnect,
} from '../connectors/walletconnect';

import store, { persistor } from '../app/store';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import useThemeModer from '../hooks/useThemeMode';
import { dark, light } from '../styles/themes';
import Globalstyle from '../styles/Globalstyle';
import ThemeContext from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const connectors: [
    MetaMask | WalletConnect | CoinbaseWallet,
    Web3ReactHooks
][] = [
    [metaMask, metaMaskHooks],
    [walletConnect, walletConnectHooks],
    [coinbaseWallet, coinbaseWalletHooks],
];

function MyApp({ Component, pageProps }: AppProps) {
    const { theme, themeToggler } = useThemeModer();
    const themeMode = theme === 'dark' ? dark : light;

    return (
        <Web3ReactProvider connectors={connectors}>
            <ThemeContext>
                <ThemeProvider theme={themeMode}>
                    <Globalstyle />
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Navbar />
                            <Sidebar />
                            <Component {...pageProps} />
                            <ToastContainer />
                            <Footer />
                        </PersistGate>
                    </Provider>
                </ThemeProvider>
            </ThemeContext>
        </Web3ReactProvider>
    );
}

export default MyApp;
