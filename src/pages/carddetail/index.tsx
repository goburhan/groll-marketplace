import React from "react";
import styled from "styled-components";
import { Background } from "../../app/types";
import {
  BackButton,
  Backhome,
  CircleButton,
} from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import { WindowSize } from "../../hooks/useWindowsize";
import BuySection from "./Components/BuySection";
import NftButtons from "./Components/NftButtons";
import InfoSection from "./InfoSection";

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
  display:flex;
  place-content:center;
  align-items:flex-end;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 120px 32px;
    max-width: 100vw;
  }
`;

export default function CardDetails() {
const isMobile = WindowSize();

  return (
    <Wrapper>
      <BackButton padding="10px 12px 10px 12px" margin="0px 0px 80px 0px" mMargin="40px 0px 48px 0px" />
        
      <Box>
        <Grid>
          <Card img="/images/detailsitem.svg">
          {isMobile &&   <NftButtons />}  
          </Card>
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
