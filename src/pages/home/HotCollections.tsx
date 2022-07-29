import React from "react";
import styled from "styled-components";
import {
  HomeTitles,
  HomeTitleWrapper,
  Title,
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

export default function HotCollections() {
  return (
    <NftContainer>
      <HomeTitleWrapper>
        <HomeTitles> Hot collections</HomeTitles>
      </HomeTitleWrapper>

      <Flex>
        <HotCollectionCard />
        <HotCollectionCard />
        <HotCollectionCard />
      </Flex>
    </NftContainer>
  );
}
