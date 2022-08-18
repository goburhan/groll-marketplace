import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";
import { Text24, Text40 } from "../../components/StyledComponents/Text";
import {
  getConfig,
  selectConnector,
  DEFAULT_CONNECTOR,
} from "../../actions/wallet/walletSlice";
import store from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../../connectors/walletconnect";
import Terms from "./Terms";
import { animate, AnimatePresence, motion } from "framer-motion";
import { BackButton } from "../../components/StyledComponents/Button";
import { getDefaultConnector } from "../../app/hooks";
import { WindowSize } from "../../hooks/useWindowsize";

const Flex = styled.div`
  display: flex;
  height: 400px;
  justify-content: space-evenly;
  place-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const WalletWrapper = styled(motion.button)`
  background: transparent;
  cursor: pointer;
  display: flex;
  padding: 20px;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    img {
      max-height: 64px;
    }
  }
  img {
    margin-right: 12px;
  }
  :hover {
    text {
      color: #ebebed;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 20px 4px;
  }
`;
const ConnectWalletContainer = styled.div`
  padding: 0px 160px 10% 160px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0px 32px 32px 32px;
  }
`;
const Box = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 100%;
  img {
    max-width: 500px;
    max-height: 500px;
  }
`;

const Side = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 320px;
    }
  }
`;
const Title = styled(Text40)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 36px;
  }
`;

export default function ConnectWallet({ isOpen, closeModal }: any) {
  const [selected, setSelected] = useState("");
  const isMobilee = WindowSize();
  const isActive = getDefaultConnector().useIsActive();
  console.log(isActive);
  const accounts = getDefaultConnector().useAccounts();
  console.log(accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
    open: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.00001,
      },
    },
  };

  // little trick to arrange terms mobile version
  let mobileWith = "32vw";
  let xvalue = "3vw";

  if (isMobilee) {
    xvalue = "0vw";
    mobileWith = "100%";
  }

  const ChildVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },

    open: {
      opacity: 1,
      width: mobileWith,
      x: xvalue,
      transition: {
        duration: 0.3,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <ConnectWalletContainer>
      <BackButton margin="32px 0px 64px 0px" mMargin="40px 0px 28px 0px" />
      <Title color={({ theme }) => theme.titles} letterSpacing="-0.03em">
        Connect your wallet
      </Title>
      <Divider mt="50px" width="50%" Mwidth="100%" />
      <Box>
        <Flex>
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
              border: "1px solid #484D57",
              opacity: 1,
            }
          : { border: "none " }
      }
      transition={selected === "coinbase" ? { duration: 10 } : {}}
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
  <WalletWrapper
      key="parent"
      initial={
        selected === "walletconnect"
          ? {
              border: "none ",
              opacity: 0,
            }
          : {}
      }
      animate={
        selected === "walletconnect"
          ? {
              border: "1px solid #484D57 ",
              opacity: 1,
            }
          : { border: "none " }
      }
      transition={selected === "walletconnect" ? { duration: 0.2 } : {}}
      style={
        selected === "walletconnect"
          ? !isMobilee
            ? {
                //selected metamask && desktop styling
                border: "1px solid #484d57",
                width: "45vw",
                padding: "20px",
                justifyContent: "space-between",
                borderRadius: "16px",
              }
            : {
                //selected metamask && mobile styling
                border: "1px solid #484d57",
                width: "100%",
                padding: "20px 4px",
                borderRadius: "16px",
              }
          : {}
      }
      onClick={
        () => setSelected("walletconnect")
        // walletConnect
        //   .activate(97)
        //   .then((res) => {
        //     console.log(res);
        //     store.dispatch(DEFAULT_CONNECTOR("walletconnect"));
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   }) && setSelected("walletconnect")
      }
    >
      <div>
        {selected === "walletconnect" ? (
          <img src="/images/Walletconnected.svg" />
        ) : (
          <img src="/images/Walletconnect.svg" />
        )}
        <Text24>Wallet Connect</Text24>
      </div>
      {selected === "walletconnect" && !isMobilee ? (
        <img src="/images/Staticlogos/Arrow.svg" />
      ) : null}
    </WalletWrapper>
        </Flex>
        <AnimatePresence>
          <div>
            {/* {selected === "" && (
              <Side
                key="parent"
                initial="closed"
                variants={ButtonParentVariants}
                animate={open ? "open" : "closed"}
              >
                <motion.img src="/images/coinwallet.png" />
              </Side>
            )} */}

            {/* {selected !== "" && ( */}
              <Side
                // key="child"
                // initial="closed"
                // variants={ChildVariants}
                // animate={open ? "open" : "closed"}
              >
                <Terms />
              </Side>
            {/* )} */}
          </div>
        </AnimatePresence>
        {/* <img src="/images/coinwallet.png" alt="coinwallet" /> */}
      </Box>
    </ConnectWalletContainer>
  );
}
