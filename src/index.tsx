import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import App from './App';
import { hooks as metaMaskHooks, metaMask } from './connectors/metamask';
import reportWebVitals from './reportWebVitals';
import {
    hooks as walletConnectHooks,
    walletConnect,
} from './connectors/walletconnect';
import {
    hooks as coinbaseWalletHooks,
    coinbaseWallet,
} from './connectors/coinbasewallet';

// function getLibrary(provider, connector) {
//   return new Web3(provider);
// }
// const getLibrary = (provider) => {
//   const library = new ethers.providers.Web3Provider(provider);
//   library.pollingInterval = 8000; // frequency provider is polling
//   return library;
// };
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const connectors: [
    MetaMask | WalletConnect | CoinbaseWallet,
    Web3ReactHooks
][] = [
    [metaMask, metaMaskHooks],
    [walletConnect, walletConnectHooks],
    [coinbaseWallet, coinbaseWalletHooks],
];
root.render(
    <React.StrictMode>
        <Web3ReactProvider connectors={connectors}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Web3ReactProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
