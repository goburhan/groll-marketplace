import React from "react";
import styled from "styled-components";
import { SliderButton } from "../StyledComponents/Button";
import Bg from "./slider1bg.png";
import { Sliderfont } from "../StyledComponents/Text";

export default function Slider1() {
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: left;
    gap: 16px;
    margin-top: 144px;
    margin-left: 160px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      line-height: 34px;
      width:90vw;
      margin-left: 30px;
    }
  `;
  const Text = styled.text`
    font-weight: 400;
    font-size: 32px;
    color: #fff;
    /* identical to box height, or 175% */

    letter-spacing: -0.02em;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  `;

  interface WrapperProps {
    bg?: any;
  }

  const Box = styled.div<WrapperProps>`
    background-image: url(${({ bg }) => bg});
    height: 60vh;
    background-size: 100% 100%;
    background-size: cover;
  
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 80vh;
    }
  `;
  return (
    <Box bg="/images/slider1bg.png">
      <Flex>
        <Sliderfont>NFT 3D Gallery</Sliderfont>
        <Text>
          Choose the ort of your interest and enjoy the reflection onf the mind
        </Text>
        <SliderButton>Discover</SliderButton>
      </Flex>
    </Box>
  );
}
