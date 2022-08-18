import React from "react";
import { WalletWrapper } from ".";
import { Text24 } from "../../components/StyledComponents/Text";
import { WindowSize } from "../../hooks/useWindowsize";

export default function CoinbaseButton({ selected, setSelected }) {
  const isMobilee = WindowSize();
  return (
    <WalletWrapper
      key="parent"
      initial={
        selected === "coinbase"
          ? {
              border: "none",
              opacity: 0,
            }
          : {}
      }
      animate={
        selected === "coinbase"
          ? {
              border: "1px solid #484D57 ",
              opacity: 1,
            }
          : { border: "none " }
      }
      transition={selected === "coinbase" ? { duration: 0.2 } : {}}
      style={
        selected === "coinbase"
          ? !isMobilee
            ? {
                //selected coinbase on desktop styling
                border: "1px solid #484d57",
                width: "45vw",
                padding: "20px",
                justifyContent: "space-between",
                borderRadius: "16px",
              }
            : {
                //selected coinbase on mobile styling
                border: "1px solid #484d57",
                width: "100%",
                padding: "20px 4px",
                borderRadius: "16px",
              }
          : {}
      }
      onClick={() =>
        // coinbaseWallet
        //   .activate(97)
        //   .then((res) => {
        //     console.log(res);
        //     store.dispatch(DEFAULT_CONNECTOR("coinbase"));
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   })&&
        setSelected("coinbase")
      }
    >
      <div>
        {selected === "coinbase" ? (
          <img src="/images/Walletconnected.svg" />
        ) : (
          <img src="/images/Coinbase.svg" />
        )}
        <Text24>Coinbase Wallet</Text24>
      </div>

      {selected === "coinbase" && !isMobilee ? (
        <img src="/images/Staticlogos/Arrow.svg" />
      ) : null}
    </WalletWrapper>
  );
}
