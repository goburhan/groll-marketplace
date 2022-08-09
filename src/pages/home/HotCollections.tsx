import React from "react";
import styled from "styled-components";
import {
  Text40,
  HomeTitleWrapper,
} from "../../components/StyledComponents/Text";
import HotCollectionCard from "../../components/NftCards/Cards/HotCollectionCard";

const NftContainer = styled.div`
  text-align: center;
  margin-top: 72px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 3rem;
  }
`;
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 376px);

  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
const nft = [
  { name: "/images/Nft/Hot1.svg" },
  { name: "/images/Nft/Hot2.svg" },
  { name: "/images/Nft/Hot3.svg" },

];

export default function HotCollections() {
  return (
    <NftContainer>
      <HomeTitleWrapper>
        <Text40 color={({ theme }) => theme.titles}> Hot collections</Text40>
      </HomeTitleWrapper>

      <Flex>
      {nft.map((nfts) => (
            <HotCollectionCard nft={nfts.name} />
        ))}
      </Flex>
    </NftContainer>
  );
}
