import React, { useState } from "react";
import styled from "styled-components";
import {
  Backhome,
  StyledButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";

const Text = styled.text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.editLower};
  span {
    color: ${({ theme }) => theme.blue};
    font-weight: 700;
  }
`;
const Side = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 28px;
`;
export default function Reminder() {
  const [display, setDisplay] = useState(true);
  const Wrapper = styled.div`
    display: flex;
    background: ${({ theme }) => theme.card};
    padding: 25px;
    display: ${display ? "flex" : "none"};
    margin-left: 120px;

    img {
      position: absolute; 
      left: 20px;
      top: -20px;
    }
  `;
  const Wrappers = styled.div`
    display: flex;
    position: relative;
    display: ${display ? "flex" : "none"};
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.card};
  `;
  const Button = styled.button``;
  return (
    <Wrappers>
      <Wrapper>
        <img src="/images/Rocket.svg" alt="rocket" />

        <Text>
          let's go started. Explore our guide or complet your{" "}
          <span>basic account </span> information to activate your account.
        </Text>
      </Wrapper>
      <Side>
        <Backhome>Remind me later</Backhome>
        <Button onClick={() => setDisplay(!display)}>
          <img src="/images/Icons/Close.svg" />
        </Button>
      </Side>
    </Wrappers>
  );
}