import React from "react";
import styled from "styled-components";
import { Divider } from "../StyledComponents/Divider";
import { Text24, Text14, Text16 } from "../StyledComponents/Text";
import { Gprice } from "./Cards/BigItemCard";
import PriceContainer from "./PriceContainer";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.card};
  height: max-content;
  padding: 48px 80px;
  border-radius: 16px;
  box-shadow: 0px 64px 64px -48px rgba(0, 0, 0, 0.24);
  
`;

const NftContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 18px;
  height: max-content;
  img {
    border-radius: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 100%;
    }
  }
`;
interface FlexProps {
  padding?: string;
  margin?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  padding: ${(props) => props.padding || "10px 0px"};
  margin: ${(props) => props.margin};
  justify-content: space-between;
  img {
    max-width: 20px;
    border-radius: 25px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
  }
`;

const Container = styled.div`
  display: flex;
  white-space: normal;
  white-space: nowrap;
  justify-content: space-between;
  padding: 12px 0px;
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
  margin: auto 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15px 15px 15px;
  img {
    margin-right: 2px;
    border: 1px solid white;
  }
`;
const Nft = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.preview};
  border-radius: 16px;
  aspect-ratio: 12 / 8;
  margin: 24px 0px 14px 0px;
  img {
    border-radius: 20px 20px 20px 20px;
  }
`;

export default function NftPreview() {
  return (
    <Preview>
      <Text24>Preview</Text24>
      <NftContainer>
        <Nft></Nft>

        <Flex>
          <Box>
            <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
              Amazing Digital Art
            </Text16>
          </Box>
          <PriceContainer />
        </Flex>

        <Flex>
          <Grid>
            <img
              src="/images/Staticlogos/Miniprofil.svg"
              style={{ maxWidth: "25px" }}
              alt="likes"
            />
            <img
              src="/images/Nft/A3.svg"
              style={{ maxWidth: "25px" }}
              alt="likes"
            />
            <img
              src="/images/Staticlogos/Miniprofile3.svg"
              style={{ maxWidth: "25px", marginRight: "20px" }}
              alt="likes"
            />
          </Grid>

          <Text14 fontWeight="700" color={({ theme }) => theme.linkItems}>
            1 in Stock
          </Text14>
        </Flex>

        <Divider width="100%" />

        <Container>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            <img
              src="/images/Highestbidlogo.svg"
              style={{ marginRight: "4px" }}
              alt="likes"
            />
            Highest Bid{" "}
            <Gprice style={{ marginLeft: "6px", marginRight: "6px" }}>
              0.001 Gulf
            </Gprice>
          </Text14>

          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            New Bid
            <img src="/images/fire.svg" alt="likes" />
          </Text14>
        </Container>
      </NftContainer>
    </Preview>
  );
}
