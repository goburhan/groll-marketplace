import React from "react";
import styled from "styled-components";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import { Vdivider } from "../../StyledComponents/Divider";
import {
  MiniCategoryTitle,
  TabFont,
  MiniCardTitle,
  CardTitle,
} from "../../StyledComponents/Text";

interface prop {
  padding?: string;
}

const Flex = styled.div<prop>`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 24px;
  img {
    min-width: 24px;
    margin-left: 2px;
    min-height: 24px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding:  ${(props) => props.padding};
  }
`;

const Box = styled.div`
  display: grid;
  justify-content: center;
  font-size: ${(props) => props.tabIndex || "22px"};
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;

export const Text = styled.text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.tabIndex || "18px"};
  font-weight: 700;
  line-height: 20px;
`;

export default function TCollectionCard() {
  const NftContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.card};
    border: 1px solid transparent;
    border-radius: 18px;
    min-height: 398px;
    max-width: 300px;
    img {
      width: 100%;
      height: 66%;
      border-radius: 5% 5% 0% 0%;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 3rem;
    }
  `;

  return (
    <NftContainer>
      <img src="/images/nftexample.svg" alt="nft-example" />

      <Box>
        <Flex padding="12px 0px">
          <CardTitle>Not Your Bro!</CardTitle>
          <img
            src="/images/Verified.svg"
            style={{ border: "none" }}
            alt="profile"
          />
        </Flex>

        <MiniCategoryTitle style={{ color: "#B1B5C3" }}>
          Art collection
        </MiniCategoryTitle>
      </Box>
      <Flex>
        <Box>
          <MiniCategoryTitle>1000</MiniCategoryTitle>
          <TabFont>Total</TabFont>
        </Box>
        <Vdivider height="36px" />
        <Box>
          <MiniCategoryTitle>$1m</MiniCategoryTitle>
          <TabFont>Volume</TabFont>
        </Box>
        <Vdivider  height="36px" />
        <Box>
          <MiniCategoryTitle>25</MiniCategoryTitle>
          <TabFont>Items</TabFont>
        </Box>
      </Flex>
    </NftContainer>
  );
}
