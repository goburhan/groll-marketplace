import React from "react";
import styled from "styled-components";
import {
  BigCardTitle,
  LowerDetail,
  TabFont,
} from "../../StyledComponents/Text";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import Bg from "./nftexample.svg";

const NftContainer = styled.div`
  background: ${({ theme }) => theme.card};
  max-width: 620px;
  height: max-content;
  padding: 0px 0px 20px 0px;
  border-radius: 18px;
  margin-top: 6vh;
  margin-right: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
    }
  }
`;
const Flex = styled.div`
  display: flex;
  margin: 28px 38px 0px 38px;
  justify-content: space-between;
  img {
    max-width: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px 0px 0px 0px;
  }
`;
const Bottom = styled.div`
  display: flex;
  margin: 14px 56px 0px 38px;
  justify-content: space-between;
  img {
    max-width: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  white-space: nowrap;
  place-items: center;
  gap: 16px;
  img {
    max-width: 20px;
  }
  text {
    display: flex;
    align-items: center;
  }
`;
const Box = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15px 15px 15px;
  img {
    border-radius: 50%;
  }
`;

export const Nft = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  img {
    border-radius: 20px 20px 20px 20px;
  }
`;

export const Gprice = styled.text`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.gprice};
`;

export default function BigItemCard() {
  return (
    <NftContainer>
      <Nft>
        <img src="/images/Staticlogos/bignft.png" alt="nft-example" />
      </Nft>

      <Flex>
        <Box>
          <BigCardTitle bold="500"> STATIC NAME</BigCardTitle>
        </Box>
        <PriceContainer />
      </Flex>
      <Bottom>
        <Container>
          <Grid>
            <img
              src="/images/Staticlogos/Miniprofil.svg"
              style={{ maxWidth: "25px" }}
              alt="likes"
            />
            <img
              src="/images/Staticlogos/Miniprofil.svg"
              style={{ maxWidth: "25px" }}
              alt="likes"
            />
            <img
              src="/images/Staticlogos/Miniprofil.svg"
              style={{ maxWidth: "25px" }}
              alt="likes"
            />
          </Grid>
          <LowerDetail>1 in Stock</LowerDetail>
        </Container>
        <Container>
          <TabFont>
            <img
              src="/images/Highestbidlogo.svg"
              style={{ marginRight: "4px" }}
              alt="likes"
            />
            Highest Bid{" "}
          </TabFont>
          <Gprice style={{ marginLeft: "6px", marginRight: "6px" }}>
            0.001 Gulf
          </Gprice>
          <TabFont>
            New Bid
            <img src="/images/fire.svg" alt="likes" />
          </TabFont>
        </Container>
      </Bottom>
    </NftContainer>
  );
}
