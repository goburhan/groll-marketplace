import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InputField } from "../../components/SearchBar";
import {
  updateProfile,
} from "../../actions/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { BlueButton } from "../../components/StyledComponents/Button";
import Toggle from "../../components/Toggle";
import StepTwoUploader from "../../components/Auth/FileUploader/StepTwoUploader";
import { Text16 } from "../../components/StyledComponents/Text";
import { getDefaultConnector } from "../../app/hooks";

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
  width: ${(props) => props.width  };
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
  const accounts = getDefaultConnector().useAccounts();
  const dispatch = useDispatch();

  // console.log(isActive);

  useEffect(() => {}, []);

  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

  const Text12 = styled.text`
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

  return (
    <Flex>
      <img
        style={{ marginTop: "3rem" }}
        src="/images/Staticlogos/Kycicon.svg"
        alt="kyc"
      />
      <Text16 color={({ theme }) => theme.cardTitle} margin="17px 0px 28px 0px">
        KYC Verification requirements
      </Text16>
      <InputWrapper>
        <Text color="#b1b5c4">PASSPORT OR ID NUMBER</Text>
        <InputField
          placeholder="e.g 13212456"
          id="userName"
          name="userName"
          onChange={(w) => handleChange(w)}
          value={userName}
        />
      </InputWrapper>

      <InputWrapper>
        <Text color="#b1b5c4">LOCATION</Text>
        <InputField placeholder="e.g Istanbul" />
      </InputWrapper>
      <InputWrapper width="100%">
        <Flex direction="row" width="100%">
          <Text16 color={({ theme }) => theme.cardTitle}>Code Generated</Text16>
          <Toggle />
        </Flex>
        <InputField
          placeholder=""
          innerRef={(x) => {
            this.input = x;
          }}
        />
      </InputWrapper>

      <InputWrapper>
        <Text16 color={({ theme }) => theme.cardTitle}>Upload Files</Text16>
        <Text12>
          Confirm your identity by Uploading the picture of the id or passport
          first,then the picture witht he code and passport.
        </Text12>
        <StepTwoUploader></StepTwoUploader>
      </InputWrapper>

      <Botwrapper>
        <Clear>
          <img src="/images/Staticlogos/Clearicon.svg" />
          Clear all
        </Clear>
        <BlueButton
          onClick={() => {
            dispatch(
              updateProfile({
                nickname: userName,
                brief: bio,
                coinbase: accounts[0],
              })
            );
          }}
       
        >
          Confirm
        </BlueButton>
      </Botwrapper>
    </Flex>
  );
}
