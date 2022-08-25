import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectConnector } from "../actions/wallet/walletSlice";
import SingleUpload from "./Auth/FileUploader/SingleUpload";
import { Text16 } from "./StyledComponents/Text";
import { getDefaultConnector } from "../app/hooks";
import { Transparent } from "./StyledComponents/Button";
interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  mMb?: string;
  innerRef?: any;
  padding?: string;
  marginBottom?: string;
}

const PersonalDetail = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;
  margin-top: 60px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
    margin-bottom:36px ;
  }
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
  button {
    width: max-content;
  }
`;

const Text = styled.text<prop>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "14px"};
  margin-bottom: ${(props) => props.marginBottom || "16px"};
  line-height: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: ${props => props.mMb || "16px"};
`;

export default function PersonalDetailWrapper({
  title,
  image,
  buttons,
  description,
  tag,
}) {
  const defaultConnector = useSelector(selectConnector);

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
      <Text16 fontWeight="600" color="#fff">
        {tag === "" ? "" : "Personal Details"}
      </Text16>
      <Text color="#777E90">{tag === "" ? "" : Buttontag}</Text>
      <Flex>
        <img src={image} alt="basic" />
        <Flex padding="10px 10px 0px 10px" direction="column">
          <Text16 margin="0px 0px 8px 0px" fontWeight="600" color="#fff">
            {title}
          </Text16>
          <Text mMb="12px"  color="#777E90">{description}</Text>

          <Transparent padding="8px 20px">{buttons}</Transparent>
          {/* <SingleUpload></SingleUpload> */}
        </Flex>
      </Flex>
    </PersonalDetail>
  );
}
