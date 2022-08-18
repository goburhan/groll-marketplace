import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { WalletWrapper } from ".";
import { DEFAULT_CONNECTOR } from "../../actions/wallet/walletSlice";
import store from "../../app/store";
import { Text24 } from "../../components/StyledComponents/Text";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import { WindowSize } from "../../hooks/useWindowsize";

export default function MetamaskButton({selected , setSelected}) {
  const isMobilee = WindowSize();
  return (
    <WalletWrapper
    key="parent"
    initial={
      selected === "metamask"
        ? {
            border: "none ",
            opacity: 0,
          }
        : {}
    }
    animate={
      selected === "metamask"
        ? {
            border: "1px solid #484D57 ",
            opacity: 1,
          }
        : { border: "none " }
    }
    transition={selected === "metamask" ? { duration: 0.2 } : {}}
    style={
      selected === "metamask"
      ? !isMobilee
      ? {
          //selected metamask on desktop styling
          border: "1px solid #484d57",
          width: "45vw",
          padding: "20px",
          justifyContent: "space-between",
          borderRadius: "16px",
        }
      : {
          //selected metamask on mobile styling
          border: "1px solid #484d57",
          width: "100%",
          padding: "20px 4px",
          borderRadius: "16px",
        }
    : {}
}
    onClick={() =>
      metaMask
        .activate(97)
        .then((res) => {
          console.log(res);
          store.dispatch(DEFAULT_CONNECTOR("metamask"));
        })
        .catch((err) => {
          console.log(err);
        }) && setSelected("metamask")
    }
  >
    <div>
      {selected === "metamask" ? (
        <img src="/images/Walletconnected.svg" />
      ) : (
        <img src="/images/Metamask.svg" />
      )}
      <Text24 type="submit">Metamask Wallet</Text24>
    </div>

    {selected === "metamask" && !isMobilee ? (
      <img src="/images/Staticlogos/Arrow.svg" />
    ) : null}
  </WalletWrapper>
  );
}
