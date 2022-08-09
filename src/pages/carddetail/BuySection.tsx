import React from "react";
import styled from "styled-components";
import {
  BuyButton,
  StyledButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import {
  Text16,
  Text24,
  Text14,
  Text12,
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

const Text = styled(Text14)`
  color: ${({ theme }) => theme.gray};
  fontweight: 500;
  span {
    color: ${({ theme }) => theme.linkItems};
  }
`;
export default function BuySection() {
  return (
    <BuyWrapper>
      <Box mb="18px">
        <img src="/images/Staticlogos/avatar.svg" alt="nft-example" />
        <Flex direction="column">
          <Text16 lineHeight="0"  color={({ theme }) => theme.gray}>Highes Bid by Requel</Text16>
          <Text24>1.46 GULF $4,324.5</Text24>
        </Flex>
      </Box>

      <Flex direction="column">
        <Box>
          <BuyButton color="linear-gradient(85.03deg, #2EB689 -11.59%, #2AE7A8 50.31%);">
            Purchase now
          </BuyButton>
          <BuyButton color={({ theme }) => theme.blue}>Place a bid</BuyButton>
        </Box>
        <Box mt="10px">
          <Text>Service fee</Text>
          <Text>
            <span>1.5%</span>
          </Text>
          <Text>2.563 GULF</Text>
          <Text>
            <span>$4,563.5</span>
          </Text>
        </Box>

        <Box justify="space-between">
          <Box>
            <Text14>Gas Fees</Text14>
            <Text14>
              <span>3.5%</span>
            </Text14>
          </Box>

          <Text14>5/3/2021 - 23h:13 GMT+3</Text14>
        </Box>
      </Flex>
    </BuyWrapper>
  );
}
