import React from "react";
import styled from "styled-components";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import { MiniCardTitle, TabFont } from "../../StyledComponents/Text";
import bg from "./1.png";

const NftContainer = styled.div`
  max-width: 280px;
  height: 457px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 25px;
  background: ${({ theme }) => theme.card};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 100px;
    max-width: 300px;
  }
`;
interface Nft {
  img?: any;
}

const Box = styled.div<Nft>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 54px;
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  width: auto;
  left: 50%;
  margin-left: -54px;
  top: 50%;
  margin-top: -18px;
`;
const BoxWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
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

export default function UpcomingCard() {
  return (
    <NftContainer>
      <NftWrapper img="/images/1.png" />
      <Box img="/images/userpicture.svg" />

      <BoxWrapper>
        <MiniCardTitle>G-NO Digital</MiniCardTitle>
      </BoxWrapper>
    </NftContainer>
  );
}
