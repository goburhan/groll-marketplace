import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Register } from "../../components/SearchBar";

import FileUpload from "../../components/Auth/FileUploader/FileUpload";
import SingleUpload from "../../components/Auth/FileUploader/SingleUpload";
import {
  selectConnector,
  updateProfile,
} from "../../actions/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../components/StyledComponents/Button";
import { Web3ReactHooks } from "@web3-react/core";
import { hooks as coinbaseWalletHooks } from "../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import { hooks as walletConnectHooks } from "../../connectors/walletconnect";
import PersonalDetailWrapper from "../../components/PersonalDetailWrapper";
import Checkbox from "@mui/material/Checkbox";
import Toggle from "../../components/Toggle";
import StepTwoUploader from "../../components/Auth/FileUploader/StepTwoUploader";

interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  innerRef?: any;
}
interface checkboxProps {
  defaultChecked?: boolean;
  color?: any;
}

const Flex = styled.div<prop>`
  display: flex;
  width:60%;
  flex-direction: ${(props) => props.direction || "column"};
  text-align: left;
  justify-content: space-between;
  img {
    max-height: 60px;
    max-width: 60px;
  }
  button {
    place-self: right;
  }
`;
const Botwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Text = styled.text<prop>`
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "12px"};
`;

const InputWrapper = styled.div<prop>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  margin-right: ${(props) => props.mr};
`;
interface boxprops {
  justify?: any;
}

const Clear = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 1px solid transparent;
  color: #777e91;
`;

export default function StepOne() {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const defaultConnector = useSelector(selectConnector);
  const isActive = getDefaultConnector().useIsActive();
  const accounts = getDefaultConnector().useAccounts();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();

  console.log(isActive);

  useEffect(() => {}, []);

  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

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

  const Twelve = styled.text`
    font-family: "Poppins", normaml;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    margin-top: 4px;
    margin-top: ${({ theme }) => theme.mt};
    color: ${({ theme }) => theme.gray};

    span {
      color: ${({ theme }) => theme.linkItems};
    }
  `;
  interface marginProp {
    margin?: string;
  }
  const CardTitle = styled.text<marginProp>`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: ${(props) => props.margin};
    color: ${({ theme }) => theme.cardTitle};
  `;

  return (
    <Flex>
      <img
        style={{ marginTop: "3rem" }}
        src="/images/Staticlogos/Kycicon.svg"
        alt="kyc"
      />
      <CardTitle margin="17px 0px 28px 0px">
        KYC Verification requirements
      </CardTitle>
      <InputWrapper>
        <Text color="#b1b5c4">PASSPORT OR ID NUMBER</Text>
        <Register
          placeholder="e.g 13212456"
          id="userName"
          name="userName"
          onChange={(w) => handleChange(w)}
          value={userName}
        />
      </InputWrapper>

      <InputWrapper>
        <Text color="#b1b5c4">LOCATION</Text>
        <Register placeholder="e.g Istanbul" />
      </InputWrapper>
      <InputWrapper width="100%">
        <Flex direction="row" width="90%">
          <CardTitle>Code Generated</CardTitle>
          <Toggle />
        </Flex>
        <Register
          placeholder=""
          innerRef={(x) => {
            this.input = x;
          }}
        />
      </InputWrapper>

      <InputWrapper>
        <CardTitle>Upload Files</CardTitle>
        <Twelve>
          Confirm your identity by Uploading the picture of the id or passport
          first,then the picture witht he code and passport.
        </Twelve>
        <StepTwoUploader></StepTwoUploader>
      </InputWrapper>

      <Botwrapper>
        <Clear>
          <img src="/images/Staticlogos/Clearicon.svg" />
          Clear all
        </Clear>
        <StyledButton
          onClick={() => {
            dispatch(
              updateProfile({
                nickname: userName,
                brief: bio,
                coinbase: accounts[0],
              })
            );
          }}
          style={{
            height: "48px",
            width: "18%",
            background: "#00ACFF",
          }}
        >
          Confirm
        </StyledButton>
      </Botwrapper>
    </Flex>
  );
}
