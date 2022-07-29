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
  width: 74%;
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.direction || "row"};
  div{
    width:65.4%;
    line-height: 20px;
  }
  img{
    min-height: 128px;
    min-width: 128px;
    margin-bottom:24px;
  }
`;

const Text = styled.text<prop>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "14px"};
  margin-bottom: 24px;
  line-height: 20px;
`;

export default function PersonalDetailWrapper() {
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
      <CardTitle color="#fff">Personal Details</CardTitle>
      <Text color="#777E90">{Buttontag}</Text>
      <Flex>
        <img src="/images/Staticlogos/Uploadimg.svg" alt="basic" />
        <Flex  padding="10px 1rem 0rem 1rem" direction="column">
          <CardTitle color="#fff">Upload your avatar</CardTitle>
          <div>
            <Text color="#777E90">
              We recommend an image of at least 400x400 Gifs work too🙌
            </Text>
          </div>

          <SingleUpload></SingleUpload>
        </Flex>
      </Flex>
    </PersonalDetail>
  );
}
