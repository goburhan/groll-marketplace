import React from "react";
import styled from "styled-components";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import { Vdivider } from "../../StyledComponents/Divider";
import {  Text22, Text14, Text16 } from "../../StyledComponents/Text";

interface prop {
  padding?: string;
}

const Flex = styled.div<prop>`
  display: flex;
  white-space: normal;
  white-space: nowrap;
  justify-content: space-evenly;
  padding: 12px 24px;
  img {
    min-width: 24px;
    margin-left: 2px;
    min-height: 24px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${(props) => props.padding};
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

export default function TCollectionCard({ icon }) {
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
      <img src={icon} alt="nft-example" style={{ marginBottom: "20px" }} />

      <Box>
        <Flex padding="12px 0px">
          <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">Not Your Bro!</Text16>
          <img
            src="/images/Verified.svg"
            style={{ border: "none" }}
            alt="profile"
          />
        </Flex>

        <Text14
          fontWeight="700"
          style={{ color: "#B1B5C3" }}
          letterSpacing="-0.01em"
        >
          Art collection
        </Text14>
      </Box>
      <Flex>
        <Box>
          <Text14
            color={({ theme }) => theme.cardTitle}
            fontWeight="700"
            letterSpacing="-0.01em"
          >
            1000
          </Text14>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            Total
          </Text14>
        </Box>
        <Vdivider height="36px" />
        <Box>
          <Text14
            color={({ theme }) => theme.cardTitle}
            fontWeight="700"
            letterSpacing="-0.01em"
          >
            $1m
          </Text14>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            Volume
          </Text14>
        </Box>
        <Vdivider height="36px" />
        <Box>
          <Text14
            color={({ theme }) => theme.cardTitle}
            fontWeight="700"
            letterSpacing="-0.01em"
          >
            25
          </Text14>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            Items
          </Text14>
        </Box>
      </Flex>
    </NftContainer>
  );
}
