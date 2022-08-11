import React from "react";
import { NavButton } from "./StyledComponents/Button";
import Link from "next/link";
import {
  selectConnector,
  userSelect,
} from "../actions/wallet/walletSlice";

import { useSelector } from "react-redux";

import { addressWrapper, getDefaultConnector } from "../app/hooks";

export default function ConnectButton() {
  const defaultConnector = useSelector(selectConnector);

  const user = useSelector(userSelect);
  const accounts: string[] = getDefaultConnector().useAccounts();
  let Address;
  
  if (accounts !== undefined && accounts.length > 0) {
    Address = addressWrapper(user.coinbase);
  } else {
    Address = "Connect";
  }

  return (
    <Link href="/connectwallet" as="/connectwallet">
      <a>
        <NavButton type="submit">{Address}</NavButton>
      </a>
    </Link>
  );
}
