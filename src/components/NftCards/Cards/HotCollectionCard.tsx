import React from "react";
import styled from "styled-components";
import { MiniCardTitle, TabFont } from "../../StyledComponents/Text";

const NftContainer = styled.div`
  max-width: 376px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 25px;
  margin: 72px 16px 0px 16px;
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
  padding: 54px;
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  width: auto;
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
  background-size: 100% 100%;

  height: 54%;
  border: 1px solid transparent;
  border-radius: 14px;

  margin: 2% 3% 0 3%;
  background-position: 50% 0%;
`;
const StyledBackIcon = styled.div((userr) => ({
  backgroundImage: `url${userr}`,
}));

export default function HotCollectionCard() {
  return (
    <NftContainer>
      <NftWrapper img="/images/1.png" />
      <Box img="/images/userpicture.svg" />

      <BoxWrapper>
        <MiniCardTitle>G-NO Digital</MiniCardTitle>
        <TabFont>
          Floor <span>$2.12</span>{" "}
        </TabFont>
      </BoxWrapper>
    </NftContainer>
  );
}
