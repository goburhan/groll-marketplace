import React from 'react';
import styled from 'styled-components';
import PriceContainer from '../PriceContainer';
import Profile from '../Profile';
import { Text14, Text22 } from '../../StyledComponents/Text';
import { Flex } from '../../StyledComponents/Flex';
import { Collaboration } from '../../StyledComponents/Button';

const NftContainer = styled.div`
    width: 300px;
    height: max-content;
    border: 1px solid ${({ theme }) => theme.blackHover};
    border-radius: 25px;
    padding: 14px 12px;
    background: ${({ theme }) => theme.card};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 100px;
        max-width: 300px;
    }
`;
interface Nft {
    img?: any;
}

const Box = styled.div<Nft>`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 54px;
    position: absolute;
    border: 1px solid white;
    border-radius: 50%;
    width: auto;
    left: 50%;
    margin-left: -54px;
    top: 50%;
    margin-top: -18px;
`;
const BoxWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    flex-direction: column;
`;
const Remaining = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 90px;
    padding: 12px 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.gray};
`;

const NftWrapper = styled.div<Nft>`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 260px;
    border: 1px solid transparent;
    border-radius: 20px;
`;

export default function UpcomingCard({ nft }) {
    return (
        <NftContainer>
            <NftWrapper img={nft} />
            {/* <Box img="/images/userpicture.svg" /> */}
            <Flex direction="column" gap="32px">
                <BoxWrapper>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text22 color={({ theme }) => theme.cardTitle}>
                            G-NO Digital
                        </Text22>
                        <Collaboration />
                    </Flex>
                </BoxWrapper>
                <Flex alignItems="center" justifyContent="space-between">
                    <Text14 fontWeight="700" color={({ theme }) => theme.gray}>
                        4 Gulf
                    </Text14>
                    <Remaining>02d 12h 41m</Remaining>
                </Flex>
            </Flex>
        </NftContainer>
    );
}
