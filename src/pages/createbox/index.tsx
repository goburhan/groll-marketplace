import React, { useState } from "react";
import styled from "styled-components";
import {
  BackButton,
  BlueButton,
  Transparent,
} from "../../components/StyledComponents/Button";
import { Flex, Grid } from "../../components/StyledComponents/Flex";
import Searchbar from "../../components/StyledComponents/Searchbar";
import { Text14, Text40 } from "../../components/StyledComponents/Text";
import CustomizedCheckbox from "../connectwallet/Checkbox";
import ArtistNftButton from "./ArtistNftButton";
import LeftBoxs from "./LeftBoxs";
import MyNftButton from "./MyNftButton";
import MysteryContent from "./MysteryContent";
import NftBox from "./NftBox";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
const MysteryWrapper = styled.div`
  display: grid;
  gap: 50px 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 230px));
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

const Lootbox = [
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
const Mysterybox = [
  { name: "/images/Nft/1.svg" },
  { name: "/images/Nft/2.svg" },
  { name: "/images/Nft/3.svg" },
  { name: "/images/Nft/4.svg" },
  { name: "/images/Nft/5.svg" },
  { name: "/images/Nft/6.svg" },
  { name: "/images/Nft/hot1.svg" },
  { name: "/images/Nft/hot2.svg" },
  { name: "/images/Nft/hot3.svg" },
  { name: "/images/Nft/Up1.svg" },
];

export default function CreateBox() {
  const [selected, setSelected] = useState("");
  const [progress , setProgress] = useState(0);
  function changeSelected(e: any) {
    setSelected(e);
    console.log(selected);
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    padding: 8,
    width: "20%",
    height: 5,
    borderRadius: 50,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgba(0, 172, 255,0.2)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#00ACFF",
      opacity: "1",
    },
  }));

  console.log("indexteki progress" + progress)
  return (
    <Wrapper>
      <BackButton margin="0px 0px 44px 0px" />
      <BorderLinearProgress variant="determinate" value={progress} />

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
          <LeftBoxs changeSelected={changeSelected} />
        </Flex>

        {selected === "lootbox" && (
          <CardWrapper>
            {Lootbox.map((nfts) => (
              <NftBox nft={nfts.name} />
            ))}
          </CardWrapper>
        )}
        {selected === "mysterybox" && (
          <Flex direction="column">
            <MyNftButton setProgress={setProgress} />
            <ArtistNftButton setProgress={setProgress} />
          </Flex>
        )}
      </Grid>
      <Flex
        style={selected === "" ? { display: "none" } : {}}
        justifyContent="flex-end"
        gap="40px"
        margin="40px 0px"
      >
        <Transparent>Cancel</Transparent>
        <BlueButton>Confirm</BlueButton>
      </Flex>
    </Wrapper>
  );
}
