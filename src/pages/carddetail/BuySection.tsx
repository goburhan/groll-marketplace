import React from "react";
import styled from "styled-components";
import {
  BuyButton,
  StyledButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import {
  BuyerTitle,
  General24,
  Gray14,
  Twelve,
} from "../../components/StyledComponents/Text";

const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px 24px;
  border: 1px solid transparent;
  border-radius: 25px;
  background: ${({ theme }) => theme.card};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

interface box {
  justify?: string;
  mb?: string;
  mt?: string;
  padding?: string;
}

const Box = styled.div<box>`
  display: flex;
  gap: 12px;
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  text {
  }
  img {
    border-radius: 50%;
    min-width: 53px;
  }
`;
export default function BuySection() {
  return (
    <BuyWrapper>
      <Box mb="18px">
        <img src="/images/Staticlogos/avatar.svg" alt="nft-example" />
        <Flex direction="column">
          <BuyerTitle>Highes Bid by Requel</BuyerTitle>
          <General24>1.46 GULF $4,324.5</General24>
        </Flex>
      </Box>

      <Flex direction="column">
        <Box>
          <BuyButton color="linear-gradient(85.03deg, #2EB689 -11.59%, #2AE7A8 50.31%);">Purchase now</BuyButton>
          <BuyButton color={({ theme }) => theme.blue}>Place a bid</BuyButton>
        </Box>
        <Box mt="10px">
          <Gray14>Service fee</Gray14>
          <Gray14>
            <span>1.5%</span>
          </Gray14>
          <Gray14>2.563 GULF</Gray14>
          <Gray14>
            <span>$4,563.5</span>
          </Gray14>
        </Box>

        <Box justify="space-between">
          <Box>
            <Gray14>Gas Fees</Gray14>
            <Gray14>
              <span>3.5%</span>
            </Gray14>
          </Box>

          <Gray14>5/3/2021 - 23h:13 GMT+3</Gray14>
        </Box>
      </Flex>
    </BuyWrapper>
  );
}
