import React from "react";
import styled from "styled-components";
import { Divider } from "../../StyledComponents/Divider";
import { Text14, Text16, Text12 } from "../../StyledComponents/Text";
import PriceContainer from "../PriceContainer";
import { Gprice } from "./BigItemCard";

const NftContainer = styled.div`
  display: grid;
  grid-template-rows: 1.8fr 1fr;
  background: ${({ theme }) => theme.card};
  border: 1px solid transparent;
  border-radius: 18px;
  margin-right: 20px;
  margin-top: 6vh;
  min-height: max-content;
  max-width: 300px;
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
interface Background {
  img?: any;
}

const Nft = styled.div<Background>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  margin: 16px 16px 0px 16px;
`;

const Flex = styled.div<FlexProps>`
  display: flex;
  padding: ${(props) => props.padding || "10px 16px"};
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
  padding: 12px 40px 18px 20px;
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
  vertical-align: center;
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15px 15px 15px;
  img {
    margin-right: 2px;
    border: 1px solid white;
  }
`;

export default function Deneme({ nft }) {
  return (
    <NftContainer>
      <Nft img={nft} />
      <div>
        <Flex>
          <Box>
            <Text16 color={({ theme }) => theme.cardTitle}>
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

        <Divider width="90%" ml="12px" />

        <Container>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            <img
              src="/images/Highestbidlogo.svg"
              style={{ marginRight: "4px" }}
              alt="likes"
            />
            Highest Bid{" "}
          </Text14>
          <Gprice style={{ marginLeft: "6px", marginRight: "6px" }}>
            0.001 Gulf
          </Gprice>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">
            New Bid
            <img src="/images/fire.svg" alt="likes" />
          </Text14>
        </Container>
      </div>
    </NftContainer>
  );
}
