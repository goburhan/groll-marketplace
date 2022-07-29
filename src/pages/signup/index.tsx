import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountInformation from "./StepOneButton";
import SelfieCard from "./KycCard";
import { StyledButton } from "../../components/StyledComponents/Button";
import { selectConnector } from "../../actions/wallet/walletSlice";

import { useDispatch, useSelector } from "react-redux";
import { Web3ReactHooks } from "@web3-react/core";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../../connectors/walletconnect";
import Navbar from "../../components/Navbar";
import StepOneButton from "./StepOneButton";
import StepTwoButton from "./StepTwoButton";
import StepThreeButton from "./StepThreeButton";
import ProgressBar from "./ProgressBar";
import { AnimatePresence } from "framer-motion";

const Flex = styled.div``;

export default function SignUpPage() {
  interface data {
    userAddress: any;
    signature: any;
    timestamp: any;
  }

  let burhan: data = {
    userAddress: "0xEa412e9B1bAf9E48393132a292323B000ab16834",
    signature: "1234",
    timestamp: "1234",
  };

  interface gobur {
    avatar: any;
    bannerUrl: any;
    coinbase: any;
    brief: any;
    id: any;
    nickname: any;
    shortUrl: any;
  }

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

  //update profili çağırıcaz

  let gobur: gobur = {
    avatar: "",
    bannerUrl: "",
    coinbase: "0xEa412e9B1bAf9E48393132a292323B000ab16834",
    brief: "I am a web developer",
    id: 0,
    nickname: "Burhan",
    shortUrl: "",
  };
  const accounts: string[] = getDefaultConnector().useAccounts();

  const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 60px 120px 160px 160px;
    background-color: ${({ theme }) => theme.background};
  `;
  const Flex = styled.div`
    display: flex;
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
    width: 8%;
    img {
      margin-right: 6px;
    }
    :hover {
      opacity: 0.8;
    }
  `;
  const [onee, setOnee] = useState("");
  useEffect(() => {}, []);

  console.log(onee);
  return (
    <SignupWrapper>
      <Backhome>
        <img src="/images/back.svg" />
        Back to home
      </Backhome>

      <StepOneButton />
      <StepTwoButton />
      <StepThreeButton />
    </SignupWrapper>
  );
}
