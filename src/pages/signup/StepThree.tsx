import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  selectConnector,
  updateProfile,
} from "../../actions/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { BlueButton, ClearAll } from "../../components/StyledComponents/Button";
import Toggle from "../../components/Toggle";
import { Text14, Text16 } from "../../components/StyledComponents/Text";
import { getDefaultConnector } from "../../app/hooks";

interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  justify?: string;
  innerRef?: any;
}

const Flex = styled.div<prop>`
  display: flex;
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      display: none;
    }
  }
`;
const Botwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const InputWrapper = styled.div<prop>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${(props) => props.mr};
`;
interface boxprops {
  justify?: any;
}

export default function StepOne() {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const defaultConnector = useSelector(selectConnector);
  const isActive = getDefaultConnector().useIsActive();
  const accounts = getDefaultConnector().useAccounts();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();

  // console.log(isActive);

  useEffect(() => {}, []);

  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

  return (
    <Flex>
      <img
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
        src="/images/Staticlogos/BlueTick.svg"
        alt="kyc"
      />
      <Text16 color={({ theme }) => theme.cardTitle}>
        Blue check Verification requirements
      </Text16>

      <InputWrapper>
        <Text16 color={({ theme }) => theme.cardTitle} margin="16px 0px">
          Apply for Blue Tick ?
        </Text16>
        <Toggle />
      </InputWrapper>

      <Text14
        style={{ width: "80%" }}
        color={({ theme }) => theme.gray}
        fontWeight="600"
      >
        In order to be eligible to apply for the blue checkmark, your account
        must meet the following criteria for verification: The Account Must Be
        Authentic: In order to be considered for verification, your account must
        represent a registered business or entity, or it must belong to a real
        person.
      </Text14>

      <Botwrapper>
        <ClearAll />
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
