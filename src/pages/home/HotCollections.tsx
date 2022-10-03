import React from 'react';
import styled from 'styled-components';
import {
    Text40,
    HomeTitleWrapper,
} from '../../components/StyledComponents/Text';
import HotCollectionCard from '../../components/NftCards/Cards/HotCollectionCard';

const NftContainer = styled.div`
    text-align: center;
    margin-top: 72px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 0px 32px;
    }
`;
const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 376px);
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`;
const nft = [
    { name: '/images/Nft/hot1.svg' },
    { name: '/images/Nft/hot2.svg' },
    { name: '/images/Nft/hot3.svg' },
];

export default function HotCollections() {
    return (
        <NftContainer>
            <HomeTitleWrapper>
                <Text40 color={({ theme }) => theme.titles}>
                    {' '}
                    Hot collections
                </Text40>
            </HomeTitleWrapper>

            <Flex>
                {nft.map((nfts, key) => (
                    <HotCollectionCard nft={nfts.name} key={key} />
                ))}
            </Flex>
        </NftContainer>
    );
}
