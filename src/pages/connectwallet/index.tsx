import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";
import { General24 } from "../../components/StyledComponents/Text";
import { Title } from "../../components/StyledComponents/Text";
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
import { animate, motion } from "framer-motion";
import { Backhome } from "../../components/StyledComponents/Button";
import { getDefaultConnector } from "../../app/hooks";

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
`;
const WalletWrapper = styled(motion.button)`
  background: transparent;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
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


export default function ConnectWallet({ isOpen, closeModal }: any) {
  const [selected, setSelected] = useState("");


  const defaultConnector = useSelector(selectConnector);
  const isActive = getDefaultConnector().useIsActive();
  console.log(isActive);
  const accounts = getDefaultConnector().useAccounts();
  console.log(accounts);



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  return (
    <ConnectWalletContainer>
      <Backhome margin="0px 0px 80px 0px">
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
                    padding:20,
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
                <img src="/images/Walletconnected.svg"  />
              ) : (
                <img src="/images/Coinbase.svg" />
              )}
              <General24>Coinbase Wallet</General24>
            </div>
            {selected === "coinbase" && (
              <img src="/images/Staticlogos/Arrow.svg" />
            )}
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

            {selected === "metamask" && (
              <img src="/images/Staticlogos/Arrow.svg" />
            )}
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
                <img src="/images/Walletconnect.svg" />
              )}
              <General24>Wallet Connect</General24>
            </div>
            {selected === "walletconnect" && (
              <img src="/images/Staticlogos/Arrow.svg" />
            )}
          </WalletWrapper>
        </Flex>

        {selected === "" ? <img src="/images/coinwallet.png" /> : <Terms />}
        {/* <img src="/images/coinwallet.png" alt="coinwallet" /> */}
      </Box>
    </ConnectWalletContainer>
  );
}
