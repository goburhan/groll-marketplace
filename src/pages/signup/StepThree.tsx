import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import Toggle from "../../components/Toggle";

interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  justify?: string;
  innerRef?: any;
}
interface checkboxProps {
  defaultChecked?: boolean;
  color?: any;
}

const Flex = styled.div<prop>`
  display: flex;
  width: 60%;
  flex-direction: ${(props) => props.direction || "column"};
  text-align: left;
  justify-content: ${(props) => props.justify};
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
  margin-top: 3rem;
`;

const InputWrapper = styled.div<prop>`
  display: flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
  margin-right: ${(props) => props.mr};
`;
interface boxprops {
  justify?: any;
}

const Clear = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #777e91;
  gap: 4px;
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

  const TabFont = styled.text`
    font-weight: 400;
    font-size: 14px;
    width: 80%;
    line-height: 20px;
    span {
      color: ${({ theme }) => theme.cardTitle};
      font-weight: bold;
    }

    color: ${({ theme }) => theme.gray};
  `;

  return (
    <Flex>
      <img
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
        src="/images/Staticlogos/BlueTick.svg"
        alt="kyc"
      />
      <CardTitle>Blue check Verification requirements</CardTitle>

      <InputWrapper>
          <CardTitle margin="16px 0px">Apply for Blue Tick ?</CardTitle>
          <Toggle />
      </InputWrapper>

      <TabFont>
        In order to be eligible to apply for the blue checkmark, your account
        must meet the following criteria for verification: The Account Must Be
        Authentic: In order to be considered for verification, your account must
        represent a registered business or entity, or it must belong to a real
        person.
      </TabFont>

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
