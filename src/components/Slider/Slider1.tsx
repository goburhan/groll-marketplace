import React from "react";
import styled from "styled-components";
import { SliderButton } from "../StyledComponents/Button";
import { Sliderfont, Text32 } from "../StyledComponents/Text";

interface WrapperProps {
  bg?: any;
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 144px;
  gap: 12px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    line-height: 34px;
    width: 90vw;
    margin-left: 30px;
  }
`;
const Box = styled.div<WrapperProps>`
  display: flex;
  background-image: url(${({ bg }) => bg});
  height: inherit;
  place-items: center;
  background-size: 100% 100%;
  background-size: cover;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 80vh;
  }
`;

export default function Slider1() {
  return (
    <Box bg="/images/slider1bg.png">
      <Flex>
        <Sliderfont>NFT 3D Gallery</Sliderfont>
        <Text32 fontWeight="400">
          Choose the ort of your interest and enjoy the reflection onf the mind
        </Text32>
        <SliderButton>Discover</SliderButton>
      </Flex>
    </Box>
  );
}
