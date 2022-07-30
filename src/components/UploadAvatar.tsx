import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectConnector } from "../actions/wallet/walletSlice";
import SingleUpload from "./Auth/FileUploader/SingleUpload";
import { CardTitle, Title } from "./StyledComponents/Text";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletconnect";
import { Web3ReactHooks } from "@web3-react/core";
interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  innerRef?: any;
  padding?: string;
}

const PersonalDetail = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;
  margin-top: 48px;
`;

const Flex = styled.div<prop>`
  display: flex;
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.direction || "row"};
  div {
    line-height: 20px;
  }
  img {
    max-height: 128px;
    min-width: 128px;
    margin-bottom: 24px;
    border-radius: 50%;
  }
`;

const Text = styled.text<prop>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "14px"};
  margin-bottom: 24px;
  line-height: 20px;
`;

export default function PersonalDetailWrapper({
  title,
  image,
  buttons,
  description,
  tag,
}) {
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
    <PersonalDetail>
      <CardTitle color="#fff">{tag === "" ? "" : "Personal Details"}</CardTitle>
      <Text color="#777E90">{tag === "" ? "" : Buttontag}</Text>
      <Flex>
        <img src={image} alt="basic" />
        <Flex padding="10px 1rem 0rem 1rem" direction="column">
          <CardTitle color="#fff">{title}</CardTitle>
          <div>
            <Text color="#777E90">{description}</Text>
          </div>

          <SingleUpload button={buttons}></SingleUpload>
        </Flex>
      </Flex>
    </PersonalDetail>
  );
}
