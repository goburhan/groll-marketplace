import React from "react";
import styled from "styled-components";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import { Vdivider } from "../../StyledComponents/Divider";
import {
  MiniCategoryTitle,
  TabFont,
  MiniCardTitle,
  TopCollectorTitle,
} from "../../StyledComponents/Text";

const NftContainer = styled.div`
  max-width: 284px;
  height: 400px;
  margin-top:32px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 25px;
  background: ${({ theme }) => theme.card};
  @media (max-width: ${({ theme }) => theme.mobile}) {
   margin-top:82px;
   max-width: 300px;
`;
interface Nft {
  img?: any;
}

const Box = styled.div<Nft>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 48px;
  position: absolute;
  border: none;
  border-radius: 50%;
  left: 52%;
  margin-left: -54px;
  top: 50%;
  margin-top: -18px;
`;
const BoxWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`;

const NftWrapper = styled.div<Nft>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;

  height: 60%;
  border: 1px solid transparent;
  border-radius: 20px 20px 0px 0px;

  background-position: 50% 0%;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 32px;
  img {
    min-width: 24px;
    min-height: 24px;
  }
`;
const Container = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  font-size: ${(props) => props.tabIndex || "22px"};
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;
export default function TopArtistCard({ nft }) {
  return (
    <NftContainer>
      <NftWrapper img={nft} />
      <Box img="/images/userpicture.svg" />

      <BoxWrapper>
        <TopCollectorTitle>G-NO Digital</TopCollectorTitle>
      </BoxWrapper>
      <Flex>
        <Container>
          <MiniCategoryTitle>1000</MiniCategoryTitle>
          <TabFont>Total</TabFont>
        </Container>
        <Vdivider height="30px" />
        <Container>
          <MiniCategoryTitle>$1m</MiniCategoryTitle>
          <TabFont>Volume</TabFont>
        </Container>
        <Vdivider height="30px" />
        <Container>
          <MiniCategoryTitle>25</MiniCategoryTitle>
          <TabFont>Items</TabFont>
        </Container>
      </Flex>
    </NftContainer>
  );
}
