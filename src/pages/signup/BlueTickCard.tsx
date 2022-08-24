import React from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";

interface text {
  size?: string;
  mt?: string;
}
const SelfieContainer = styled.div`
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
  margin-bottom: 1rem;
`;
const Text = styled.text<text>`
  color:#fff;
  font-size: ${(props) => props.size || "16px"};
  margin-top: ${(props) => props.mt};
`;

export default function BlueTickCard() {
  return (
    <SelfieContainer>
      <img width="120px" src="/images/Staticlogos/BlueTick.svg" alt="selfie" />
      <Divider mt="0.5rem" mb="2rem" width="100%" />
      <Box>
        <Text>Enable the 3d Gallery</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable NFT Competition </Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable Atlas</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable the 3d Gallery</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable NFT Competition </Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable Atlas</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable the 3d Gallery</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable NFT Competition </Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Enable Atlas</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Text mt="3rem" size="14px">
        In order to be eligible to apply for the blue checkmark, your account
        must meet the following criteria for verification: The Account Must Be
        Authentic: In order to be considered for verification, your account must
        represent a registered business or entity, or it must belong to a real
        person.
      </Text>
    </SelfieContainer>
  );
}
