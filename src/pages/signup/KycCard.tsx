import React from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";

interface text {
  size?: string;
  mt?: string;
}
interface props {
  width?:any;
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
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 1rem;
`;
const Text = styled.text<text>`
  color: #fff;
  font-size: ${(props) => props.size || "16px"};
  margin-top: ${(props) => props.mt};
`;

export default function KycCard() {
  return (
    <SelfieContainer>
      <img width="120px" src="/images/Staticlogos/Kyclogo.svg" alt="selfie" />
      <Divider mt="0.5rem" mb="2rem" width="100%" />
      <Box>
        <Text>Secure your account</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Avoid legal issues</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Reinforce customer trust</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Fraud prevention</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Secure your account</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Protect your funds</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Avoid legal issues</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Reinforce customer trust</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
      <Box>
        <Text>Fraud prevention</Text>
        <img src="/images/bluetick.svg" alt="selfie" />
      </Box>
     
    </SelfieContainer>
  );
}
