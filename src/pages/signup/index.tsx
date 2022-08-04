import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountInformation from "./StepOneButton";
import SelfieCard from "./KycCard";
import {
  Backhome,
  StyledButton,
} from "../../components/StyledComponents/Button";
import { selectConnector, userSelect } from "../../actions/wallet/walletSlice";

import { useDispatch, useSelector } from "react-redux";
import StepOneButton from "./StepOneButton";
import StepTwoButton from "./StepTwoButton";
import StepThreeButton from "./StepThreeButton";
import Reminder from "./Reminder";
import { getDefaultConnector } from "../../app/hooks";

const Flex = styled.div``;

export default function SignUpPage() {
  const user = useSelector(userSelect);
  const accounts: string[] = getDefaultConnector().useAccounts();

  const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 60px 120px 160px 160px;
    background-color: ${({ theme }) => theme.background};
  `;
  
  return (
    <SignupWrapper>
      <Backhome margin="0px 0px 40px 0px">
        <img src="/images/back.svg"  />
        Back to home
      </Backhome>
      {user.nickname === "" ? <Reminder /> : null}
      <StepOneButton />
      <StepTwoButton />
      <StepThreeButton />
    </SignupWrapper>
  );
}
