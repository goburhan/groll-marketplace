import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";
import { General24 } from "../../components/StyledComponents/Text";
import { Title } from "../../components/StyledComponents/Text";
import { useWeb3React, Web3ReactHooks } from "@web3-react/core";
import {
  userLogin,
  connectWallet,
  getConfig,
  selectConnector,
  DEFAULT_CONNECTOR,
} from "../../actions/wallet/walletSlice";
// import { metaMask } from "../../connectors/metamask";
import store from "../../app/store";
// import { walletConnect } from "../../connectors/walletconnect";
// import { coinbaseWallet } from "../../connectors/coinbasewallet";
import { darkScrollbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../../connectors/walletconnect";
import Terms from "./Terms";
import Navbar from "../../components/Navbar";
import { animate, motion } from "framer-motion";

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly; 
  margin-left:20px;
  flex-direction: column;
  flex-wrap: wrap;
`;
const WalletWrapper = styled(motion.button)`
  background: transparent;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 5px;
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
      transition: width 2s;
    }
  }
`;
const ConnectWalletContainer = styled.div`
  height: 100hw;
  padding: 50px 15% 10% 15%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  img {
    max-width: 500px;
    max-height: 500px;
  }
`;
const Backhome = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid #484d57;
  color: ${({ theme }) => theme.cardTitle};
  margin-bottom: 80px;
  cursor: pointer;
  border-radius: 18px;
  font-size: 14px;
  padding: 10px 5px 10px 5px;
  width: 10%;
  img {
    margin-right: 6px;
  }
`;

export default function ConnectWallet({ isOpen, closeModal }: any) {
  const [selected, setSelected] = useState("");
  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  const defaultConnector = useSelector(selectConnector);
  const isActive = getDefaultConnector().useIsActive();
  console.log(isActive);

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
  const accounts = getDefaultConnector().useAccounts();
  console.log(accounts);

  const [connector, setConnector] = useState(defaultConnector);

  console.log(defaultConnector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  return (
    <ConnectWalletContainer>
      <Backhome>
        <img src="/images/back.svg" />
        Back to home
      </Backhome>

      <Title>Connect your wallet</Title>
      <Divider mt="2%" width="50%" />
      <Box>
        <Flex>
          <WalletWrapper
            initial={
              selected === "coinbase"
                ? {
                    border: "1px solid transparent ",
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
                : { border: "1px solid rgba(0,0,0,0) " }
            }
            transition={selected === "coinbase" ? { duration: 0.2 } : {}}
            style={
              selected === "coinbase"
                ? {
                    border: "1px solid #484d57",
                    width: "700px",
                    padding: "20px",

                    justifyContent: "space-between",
                    borderRadius: "25px",
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
              <General24>Coinbase Wallet</General24>
            </div>
            {selected === "coinbase" && <img src="/images/Arrow.svg" />}
          </WalletWrapper>

          <WalletWrapper
            initial={
              selected === "metamask"
                ? {
                    border: "1px solid transparent ",
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
                : { border: "1px solid rgba(0,0,0,0) " }
            }
            transition={selected === "metamask" ? { duration: 0.2 } : {}}
            style={
              selected === "metamask"
                ? {
                    border: "1px solid #484d57",
                    width: "700px",
                    padding: "20px",

                    justifyContent: "space-between",
                    borderRadius: "25px",
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
              <General24 type="submit">Metamask Wallet</General24>
            </div>

            {selected === "metamask" && <img src="/images/Arrow.svg" />}
          </WalletWrapper>

          <WalletWrapper
            initial={
              selected === "walletconnect"
                ? {
                    border: "1px solid transparent ",
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
                : { border: "1px solid rgba(0,0,0,0) " }
            }
            transition={selected === "walletconnect" ? { duration: 0.2 } : {}}
            style={
              selected === "walletconnect"
                ? {
                    border: "1px solid #484d57",
                    width: "700px",
                    padding: "20px",

                    justifyContent: "space-between",
                    borderRadius: "25px",
                  }
                : {}
            }
            onClick={() =>
              walletConnect
                .activate(97)
                .then((res) => {
                  console.log(res);
                  store.dispatch(DEFAULT_CONNECTOR("walletconnect"));
                })
                .catch((err) => {
                  console.log(err);
                }) && setSelected("walletconnect")
            }
          >
            <div>
              {selected === "walletconnect" ? (
                <img src="/images/Walletconnected.svg" />
              ) : (
                <img src="/images/WalletConnect.svg" />
              )}
              <General24>Wallet Connect</General24>
            </div>
            {selected === "walletconnect" && <img src="/images/Arrow.svg" />}
          </WalletWrapper>
        </Flex>

        {selected === "" ? <img src="/images/coinwallet.png" /> : <Terms />}
        {/* <img src="/images/coinwallet.png" alt="coinwallet" /> */}
      </Box>
    </ConnectWalletContainer>
  );
}
