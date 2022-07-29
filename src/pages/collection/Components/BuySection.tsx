import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../components/StyledComponents/Button";
import {
  CardTitle,
  BuyerTitle,
  General24,
  Twelve,
} from "../../../components/StyledComponents/Text";

const BuyWrapper = styled.div`
  width: 63%;
  padding: 25px;
  border: 1px solid transparent;
  border-radius: 25px;
  margin-top: 50px;
  height: 200px;
  background: ${({ theme }) => theme.card};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
const GreenButton = styled.button(
  ({ theme }) => `
  border: 1px solid transparent;
  background: linear-gradient(85.03deg, #2eb689 -11.59%, #2ae7a8 50.31%);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 25px;
  padding: 18px 70px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width:100%;
    padding: 18px 18px;
  }
`
);
const BuyButton = styled.button`
  border: 1px solid transparent;
  background: linear-gradient(
    244.53deg,
    #00d2ff 18.15%,
    #db00ff 122.78%,
    #09abf9 147.81%
  );
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 25px;
  padding: 18px 70px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 0px;
  }
`;

const Flex = styled.div `
  display:flex;
  flex-direction:column;

`
interface box {
  justify?:string
  mb?:string
  padding?:string
}

const Box = styled.div<box>`
  display: flex;
  width: 100%;

  gap: 12px;
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.mb};
  text {
  }
  img {
    border: 1px solid transparent;
    border-radius: 50%;
    width: relative;
  }
`;
export default function BuySection() {
  return (
    <BuyWrapper>
      <Box mb="14px">
        <img src="/images/Staticlogos/avatar.svg" alt="nft-example" />
        <Flex>
          <BuyerTitle>Highes Bid by Requel</BuyerTitle>
          <General24>1.46 GULF $4,324.5</General24>
        </Flex>
      </Box>
      <Flex>
        <Box>
          <BuyButton>Place a Bid</BuyButton>
          <GreenButton>Purchase Now</GreenButton>
        </Box>
        <Box padding="20px">
          <Twelve>Service Fee</Twelve>
          <Twelve>1.5%</Twelve>
          <Twelve>2.563 Gulf</Twelve>
          <Twelve>$4,563.5</Twelve>
        </Box>

        <Box justify="space-between" padding="0px 0px 20px 20px">
          <Box>
            <Twelve>GasFee</Twelve>
            <Twelve>3.5%</Twelve>
          </Box>

          <Twelve>5/3/2021 - 23h:13 GMT+3</Twelve>
        </Box>
      </Flex>
    </BuyWrapper>
  );
}
