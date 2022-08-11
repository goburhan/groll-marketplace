import React from "react";
import styled from "styled-components";
import { Background } from "../../app/types";
import {
  BackButton,
  BlueButton,
  Transparent,
} from "../../components/StyledComponents/Button";
import { Flex, Grid } from "../../components/StyledComponents/Flex";
import Searchbar from "../../components/StyledComponents/Searchbar";
import { Text14, Text40 } from "../../components/StyledComponents/Text";
import CustomizedCheckbox from "../connectwallet/Checkbox";
import LeftBoxs from "./LeftBoxs";
import NftBox from "./NftBox";

const Wrapper = styled.div`
  margin: 144px 160px;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 50px 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const nft = [
  { name: "/images/Nft/A1.svg" },
  { name: "/images/Nft/A2.svg" },
  { name: "/images/Nft/A3.svg" },
  { name: "/images/Nft/A4.svg" },
  { name: "/images/Nft/A5.svg" },
  { name: "/images/Nft/A6.svg" },
  { name: "/images/Nft/A7.svg" },
  { name: "/images/Nft/A8.svg" },
  { name: "/images/Nft/A3.svg" },
  { name: "/images/Nft/A4.svg" },
];

export default function CreateBox() {
  return (
    <Wrapper>
      <BackButton margin="0px 0px 44px 0px" />

      <Flex margin="0px 0px 48px 0px" gap="8px" direction="column">
        <Flex justifyContent="space-between">
          <Text40 color={({ theme }) => theme.titles}>
            Create Your Mystery Box
          </Text40>
          <Flex gap="10px" alignItems="center">
            <Searchbar />
            <CustomizedCheckbox />
            <Text14 color={({ theme }) => theme.titles}>Select all</Text14>
          </Flex>
        </Flex>
        <Text14 color={({ theme }) => theme.gray}>
          Please Choose your Box Type and select your Arts to drag in.
        </Text14>
      </Flex>

      <Grid columns="1fr 3fr" gap="58px">
        <Flex gap="44px" direction="column">
          <LeftBoxs
            button="Mystery Box"
            text="A wholesome farm owner in Montana. Upcoming gallery solo show in Germany"
            img="Createmystery"
          />
          <LeftBoxs
            button="Loot Box"
            text="A wholesome farm owner in Montana. Upcoming gallery solo show in Germany"
            img="Createmystery"
          />
        </Flex>
        <CardWrapper>
          {nft.map((nfts) => (
            <NftBox nft={nfts.name} />
          ))}
        </CardWrapper>
      </Grid>
      <Flex justifyContent="flex-end" gap="40px" margin="40px 0px">
        <Transparent>Cancel</Transparent>
        <BlueButton>Confirm</BlueButton>
      </Flex>
    </Wrapper>
  );
}
