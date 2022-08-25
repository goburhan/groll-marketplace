import React from "react";
import styled from "styled-components";
import { Text22, Text12 } from "../StyledComponents/Text";

const Container = styled.div<border>`
  display: flex;
  border-radius: 25px;
  padding: ${(props) => props.padding || "0px 10px 10px 10px"}; 
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  img{
    margin-top: 12px;
  }
  border: ${(props) => props.border || "1px solid #484D57"};
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 8px;
`;

interface border {
  border?: string;
  text?: string;
  padding?: string;
}
const Wrapper = styled.div`
  display: flex;
  padding: 0px 10px 14px 10px;
  border: 1px solid #484D57;
  border-radius: 15px;
  margin: 24px auto;
  flex-direction: column;
  width: 90%;
  img{
    max-width: 36px;
    min-height: 36px;
  }
`;
export default function BalanceContainer() {
  return (
    <Wrapper>
      <Container border="none">
        <img src="/images/Icons/ProfileMenu/Balance.svg" alt="balance" />

        <Box>
          <Text12 weight="400">Balance</Text12>
          <Text22 color={({ theme }) => theme.cardTitle} >4.123 GULF</Text22>
        </Box>
      </Container>
      <Container padding="6px 44px">Manage fun on Coinbase</Container>
    </Wrapper>
  );
}
