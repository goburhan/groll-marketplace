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
import CoinbaseButton from "./CoinbaseButton";
import MetamaskButton from "./MetamaskButton";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import WalletConnectButton from "./WalletConnectButton";

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
    padding: 0px 62px 32px 32px;
    place-content: center;

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


export const Title = styled(Text40)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 36px;
  }
`;
const Side = styled(motion.div)`
@media (max-width: ${({ theme }) => theme.mobile}) {
  img {
    width:300px;
  }
  margin-left:-28px;
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
    xvalue = "11vw";
    mobileWith = "100%";
  }

  const ChildVariants = {
    closed: {
      opacity: 0,
      width: mobileWith,
      x:"-700px",
      transition: {
        duration: 1,
      },
    },

    open: {
      opacity: 1,
      width: mobileWith,
      x: xvalue,
      y: "0",
      transition: {
        duration: 0.4,
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
          <CoinbaseButton selected={selected} setSelected={setSelected} />
          <MetamaskButton selected={selected} setSelected={setSelected} />
          <WalletConnectButton selected={selected} setSelected={setSelected} />
        </Flex>
        <AnimatePresence>
          <div>
            {selected === "" && (
              <Side
                key="parent"
                initial="closed"
                variants={ButtonParentVariants}
                animate={open ? "open" : "closed"}
              >
                <motion.img src="/images/coinwallet.png" />
              </Side>
            )}

            {selected !== "" && (
              <Side
                key="child"
                initial="closed"
                variants={ChildVariants}
                animate={open ? "open" : "closed"}
              >
                <Terms />
              </Side>
            )}
          </div>
        </AnimatePresence>
        {/* <img src="/images/coinwallet.png" alt="coinwallet" /> */}
      </Box>
    </ConnectWalletContainer>
  );
}
