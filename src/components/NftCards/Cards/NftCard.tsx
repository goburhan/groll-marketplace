import React from "react";
import styled from "styled-components";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";

const NftContainer = styled.div`
  display: grid;
  background: linear-gradient(180deg, #101e4d 0%, #050a24 100%);
  background-size: auto;
  grid-template-columns: 300px;
  border: 1px solid transparent;
  border-radius: 18px;
  width: 300px;
  img {
    border-radius: 5% 5% 0% 0%;
  }
`;
const Flex = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  img {
    max-width: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  vertical-align: center;
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;

export const Text = styled.text`
  color: #fff;
  color: ${(props) => props.color};
`;

export default function NftCard() {
  return (
    <NftContainer>
      <img src="/images/nftexample.svg" alt="nft-example" />

      <Flex>
        <Text color="#fff">STATIC NAME</Text>
        <Text>Price</Text>
      </Flex>
      <Flex>
        <Box>
          <img src="/images/like.svg" alt="likes" />
          <Text>1250K</Text>
        </Box>
        <PriceContainer />
      </Flex>
      <img src="/images/nftdivider.svg" alt="likes" />
      <Profile />
    </NftContainer>
  );
}
