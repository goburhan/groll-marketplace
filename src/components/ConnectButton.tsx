import React, { useEffect } from "react";
import styled from "styled-components";
import { NavButton, StyledButton } from "./StyledComponents/Button";
import Link from "next/link";
import { useWeb3React, Web3ReactHooks } from "@web3-react/core";
import { getUserInfo, selectConnector } from "../actions/wallet/walletSlice";
import store from "../app/store";
import { useSelector } from "react-redux";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletconnect";
import { Status } from "./Status";

export default function ConnectButton() {
  const defaultConnector = useSelector(selectConnector);

  function getDefaultConnector(): Web3ReactHooks {
    switch (defaultConnector) {
      case "metamask":
        return metaMaskHooks;
        break;
      case "coinbase":
        return coinbaseWalletHooks;
        break;
      case "walletconnect":
        return walletConnectHooks;
        break;

      default:
        return metaMaskHooks;
    }
  }

  const accounts: string[] = getDefaultConnector().useAccounts();

  let Buttontag = "";


  // var accountEllipsis = accounts ? { tag: accounts[0] + tag.substring(0, 4) + "..." + tag.substring(accounts.length - 4)} : "Connect Wallet";

  if (accounts !== undefined && accounts.length > 0) {
    Buttontag =
      accounts[0].substring(0, 5) +
      "..." +
      accounts[0].substring(accounts[0].length - 4);
  } else {
    Buttontag = "Connect";
  }

  return (
    <Link href="/connectwallet" as="/connectwallet">
      <a>
        <NavButton type="submit">{Buttontag}</NavButton>
      </a>
    </Link>
  );
}
