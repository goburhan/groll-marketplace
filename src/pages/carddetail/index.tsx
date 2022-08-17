import React from "react";
import styled from "styled-components";
import { Background } from "../../app/types";
import {
  Backhome,
  CircleButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import BuySection from "./Components/BuySection";
import InfoSection from "./InfoSection";
import { WindowSize } from "../../hooks/useWindowsize";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 52% 23%;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-rows: 100vw;
    grid-template-columns: 83vw;
  }
`;
const Card = styled.div<Background>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  aspect-ratio: 16:9; 
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 100vh;
  margin: 0px 100px;
  gap: 120px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-grid;
    grid-template-columns: 1fr;
    margin: 0px;
    gap: 32px;
  }
`;
const Wrapper = styled.div`
  margin: 160px 160px 100px 160px;

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px 32px;
    max-width: 100vw;
  }
`;

export default function CardDetails() {
  const isMobilee = WindowSize();

  return (
    <Wrapper>
      <Backhome padding="10px 12px 10px 12px" margin="0px 0px 0px 0px">
        <img src="/images/back.svg" />
        Back to collection
      </Backhome>
      <Box>
        <Grid>
          <Card img="/images/detailsitem.svg" />
          <BuySection />
        </Grid>
        <Flex wrap="no-wrap" gap="20px">
          <InfoSection />
          <Flex gap="16px" direction="column" display="none">
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
