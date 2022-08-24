import React from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";

interface text {
  size?: string;
  mt?: string;
}
interface props {
  width?: any;
}
const SelfieContainer = styled.div<props>`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 70%;
  height: max-content;
  padding: 2rem 2rem 4rem 2rem;
  border: 1px solid #00acff;
  border-radius: 50px;
  background: ${({ theme }) => theme.kycCard};
  img {
    min-width: ${(props) => props.width};
    place-self: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 20px;
`;
const Flex = styled.div`
  text-align: center;
`;
const Text = styled.text<text>`
  color: #fff;
  font-size: ${(props) => props.size || "16px"};
  margin-top: ${(props) => props.mt};
`;

export default function BasicCard() {
  return (
    <SelfieContainer>
      <img width="120px" src="/images/Basic.svg" alt="selfie" />
      <Divider mt="0.5rem" mb="2rem" width="100%" />
      <Box>
        <Text>Create NFT'S</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Collect NFT’s</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Buy/Sell NFT’s</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Gift System</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Mint/List for sale 1/1 or 1/20000</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Generate and upload a collection simultaneously</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Prevent Bulk upload</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Prevent Bulk Listing</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Artists Collab %</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Flex>
        <Text mt="58px" size="14px">
          In order to be eligible to apply for the Basic account, You need to
          create an account.
        </Text>
      </Flex>
    </SelfieContainer>
  );
}
