import React from "react";
import styled from "styled-components";
import { Background } from "../../app/types";
import {
  Backhome,
  CircleButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import BuySection from "./BuySection";
import InfoSection from "./InfoSection";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 52% 23%;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Card = styled.div<Background>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  aspect-ratio: 16:9; 
  background-repeat: no-repeat;
  border: 1px solid transparent;
  border-radius: 25px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-height: 100%;
  min-height: 100vh ;
  margin: 0px 100px;
  gap: 120px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Wrapper = styled.div`
  margin: 160px 160px 100px 160px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export default function CardDetails() {
  return (
    <Wrapper>
      <Backhome padding="10px 12px 10px 12px" margin="0px 0px 80px 0px">
        <img src="/images/back.svg" />
        Back to collection
      </Backhome>
      <Box>
        <Grid>
          <Card img="/images/detailsitem.svg" />
          <BuySection />
        </Grid>
        <Flex gap="60px">
          <InfoSection />
          <Flex gap="16px" direction="column">
            <CircleButton img="/images/Icons/X.svg" />
            <CircleButton img="/images/Icons/Share.svg" />
            <CircleButton img="/images/Icons/Like.svg" />
            <CircleButton img="/images/Icons/More.svg" />
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
}
