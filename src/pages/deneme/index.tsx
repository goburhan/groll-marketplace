import React, { useState } from "react";
import styled from "styled-components";
import {
  OpenCloseButton,
  StyledButton,
} from "../../components/StyledComponents/Button";
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
import { motion, AnimatePresence } from "framer-motion";
import { KycTitle, Title } from "../../components/StyledComponents/Text";
import StepOne from "../signup/StepThree";
import BasicCard from "../signup/BasicCard";

const Flex = styled.div``;

export default function StepOneButton() {
  interface data {
    userAddress: any;
    signature: any;
    timestamp: any;
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

  const SignupWrapper = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 2.5% 0px 0px 0.5%;
    /* opacity: 0; */
  `;
  const ButtonParent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const StyledTitle = styled.button`
    height: 3rem;
    width: 100%;
    text-align: left;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.cardTitle};
    font-size: 18px;
  `;
  const Progress = styled.text`
    color: white;
    background: rgba(0, 172, 255, 0.25);
    padding: 0px 10px 0px 10px;
    font-weight: 700;
    margin-top: 1rem;
    padding: 2px 26px 2px 16px;
    font-size: 18px;
  `;
  const Box = styled.div<prop>`
    display: flex;
    margin-bottom: ${(props) => props.mb};
    flex-direction: ${(props) => props.direction || "column"};
    gap: ${(props) => props.gap};
    align-items: flex-start;
    img {
      margin-top: 1rem;
      max-width: 90px;
    }
  `;
  interface prop {
    width?: string;
    direction?: string;
    size?: string;
    mr?: string;
    innerRef?: any;
    mb?: any;
    gap?: any;
  }
  const ChildDiv = styled(motion.div)`
    height: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* opacity: 0; */
  `;
  const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const ButtonParentVariants = {
    closed: {
      height: "4rem",
      y: "6%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    open: {
      opacity: 1,
      y: "-4%",
      height: "160vh",
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 1,
      y: -1000,
      transition: {
        duration: 0.4,
      },
    },
  };

  const ChildVariants = {
    closed: {
      opacity: 0,
      height: "160vh",

      transition: {
        delay: 10,
        duration: 0.7,
        ease: [0.04, 0.62, 0.23, 1],
      },
    },

    open: {
      //initial
      opacity: 1,
      height: "160vh",
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      y: -100,

      transition: {
        duration: 14,
      },
    },
  };

  const [open, toggleOpen] = useState(false);

  return (
    <ButtonParent
      key="parent"
      variants={ButtonParentVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <ButtonWrapper>
        <StyledTitle
          onClick={() => {
            toggleOpen(!open);
          }}
          style={{ cursor: "pointer" }}
        >
          <Box direction="row">
            <Box>
              <Box gap="15px" mb="15px" direction="row">
                <KycTitle style={{ color: "#00ACFF" }}>Step 1</KycTitle>
                <Progress>50% progress</Progress>
              </Box>
              <KycTitle>Basic Information</KycTitle>
            </Box>

            <img
              src="/images/Basic.svg"
              style={{ borderRadius: "0px", marginLeft: "2%" }}
              alt="basic"
            />
          </Box>
        </StyledTitle>

        <OpenCloseButton
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {open ? (
            <img src="/images/Staticlogos/Uparrow.svg" />
          ) : (
            <img src="/images/Staticlogos/Downarrow.svg" />
          )}
        </OpenCloseButton>
      </ButtonWrapper>
      <AnimatePresence>
        {open && (
          <SignupWrapper
            variants={ChildVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit="closed"
          >
            <StepOne />
            <BasicCard />
          </SignupWrapper>
        )}
      </AnimatePresence>
    </ButtonParent>
  );
}
