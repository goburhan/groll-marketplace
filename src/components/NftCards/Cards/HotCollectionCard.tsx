import React from "react";
import styled from "styled-components";
import { Text22, Text14 } from "../../StyledComponents/Text";

const NftContainer = styled.div`
  max-width: 376px;
  position: relative;
  border-radius: 25px;
  margin: 0px 16px;
  background: ${({ theme }) => theme.card};
  height: 434px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 42px 0px 0px 0px;
    width: 100%;
  }
`;

interface Nft {
  img?: any;
}

const Box = styled.div<Nft>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 54px;
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  left: 50%;
  margin-left: -54px;
  top: 50%;
  margin-top: -48px;
  img {
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: 20%;
  align-items: center;
  flex-direction: column;
`;
const NftWrapper = styled.div<Nft>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 54%;
  border: 1px solid transparent;
  border-radius: 14px;

  margin: 2% 3% 0 3%;
`;

export default function HotCollectionCard({ nft }) {
  return (
    <NftContainer>
      <NftWrapper img={nft} />
      <Box img="/images/userpicture.svg" />

      <BoxWrapper>
        <Text22 color={({ theme }) => theme.cardTitle} lineHeight="48px">
          G-NO Digital
        </Text22>
        <Text14 color={({ theme }) => theme.gray} fontWeight="600">
          Floor <span>$2.12</span>{" "}
        </Text14>
      </BoxWrapper>
    </NftContainer>
  );
}
