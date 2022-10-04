import React, { Component, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    HomeTitleWrapper,
    Text40,
} from '../../../components/StyledComponents/Text';
import TopContainer from '../TopContainer';
import { Transparent } from '../../../components/StyledComponents/Button';

const NftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    margin: 62px 160px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 100px 0px;
        padding: 0px 0px 0px 32px;
        width: 100%;
    }
`;

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 72px;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns:  1fr;
        
    }
`;

const icons = [
    { name: '/images/Nft/1.svg', nft: '/images/Nft/A1.svg' , username:'Nft Name' },
    { name: '/images/Nft/2.svg', nft: '/images/Nft/A2.svg' , username:'Nft Worlds' },
    { name: '/images/Nft/3.svg', nft: '/images/Nft/A3.svg' , username:'Goburhan' },
    { name: '/images/Nft/4.svg', nft: '/images/Nft/A4.svg' , username:'Mairez' },
    { name: '/images/Nft/5.svg', nft: '/images/Nft/A5.svg' , username:'Oldman' },
    { name: '/images/Nft/6.svg', nft: '/images/Nft/A6.svg' , username:'Youngboys' },
];

export default function TopCollection() {
    return (
        <NftContainer>
            <HomeTitleWrapper>
                <Text40 color={({ theme }) => theme.titles}>
                    {' '}
                    Top collection
                </Text40>
                <Transparent padding='8px 58px'>
                    See More
                </Transparent>
            </HomeTitleWrapper>
            <Flex>
                {icons.map((icon,key) => (
                    <TopContainer
                        key={key}
                        avatar={icon.name}
                        nft={icon.nft}
                        username={icon.username}
                    />
                ))}
            </Flex>
        </NftContainer>
    );
}
