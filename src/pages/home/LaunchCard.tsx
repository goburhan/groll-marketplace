import React from 'react';
import styled from 'styled-components';
import { Collaboration, LiveButton } from '../../components/StyledComponents/Button';
import { Flex } from '../../components/StyledComponents/Flex';
import { Text14, Text22 } from '../../components/StyledComponents/Text';

const NftContainer = styled.div`
    width: 80%;
    height: max-content;
    border: 1px solid ${({ theme }) => theme.blackHover};
    border-radius: 25px;
    padding:48px 40px 36px 40px;
    background: ${({ theme }) => theme.card};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 100px;
        max-width: 300px;
    }
`;
interface Nft {
    img?: any;
}

const BoxWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    flex-direction: column;
`;
const Price = styled.div`
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
    height: 360px;
    border: 1px solid transparent;
    border-radius: 20px;
`;

export default function LaunchCard({ nft }) {
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
                        <LiveButton />
                    </Flex>
                </BoxWrapper>
                <Flex alignItems="center" justifyContent="space-between">
                    <Price>Items 3000</Price>
                    <Price>Price 300Gulf</Price>
                </Flex>
            </Flex>
        </NftContainer>
    );
}
