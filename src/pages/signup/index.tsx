import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountInformation from "./StepOneButton";
import SelfieCard from "./KycCard";
import { BackButton, Backhome } from "../../components/StyledComponents/Button";
import { selectConnector, userSelect } from "../../actions/wallet/walletSlice";

import { useDispatch, useSelector } from "react-redux";
import StepOneButton from "./StepOneButton";
import StepTwoButton from "./StepTwoButton";
import StepThreeButton from "./StepThreeButton";
import Reminder from "./Reminder";
import { getDefaultConnector } from "../../app/hooks";
import { Text40 } from "../../components/StyledComponents/Text";


export const StyledSteps = styled(Text40)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    line-height: ${props => props.lineHeight};
  }

`

export default function SignUpPage() {
  const user = useSelector(userSelect);
  const accounts: string[] = getDefaultConnector().useAccounts();

  const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 60px 120px 160px 160px;
    background-color: ${({ theme }) => theme.background};
    @media (max-width: ${({ theme }) => theme.mobile}) {  
      padding: 0px;
      margin-top:120px;
    }
  `;
  return (
    <SignupWrapper>
      <BackButton margin="0px 0px 20px 0px" mMargin="0px" />

      {user.nickname === "" ? <Reminder /> : null}
      {/* <Reminder /> */}
      <StepOneButton />
      <StepTwoButton />
      <StepThreeButton />
    </SignupWrapper>
  );
}
