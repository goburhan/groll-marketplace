import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../components/StyledComponents/Flex';
import { Text14, Text16 } from '../../components/StyledComponents/Text';

interface Background {
    img?: any;
}
const Container = styled.div`
    display: flex;
    padding: 12px;
    width: 100%;
    gap: 42px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.card};
`;
const NftBox = styled.div<Background>`
    width: 100px;
    height: 100px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 40px;
`;

const Text20 = styled.text`
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
`;
export default function TopContainer({ nft, avatar , username }) {
    return (
        <Container>
            <Flex gap='24px' >

            <NftBox img={avatar} />
            <Flex gap='32px'>

            <Flex direction="column" margin="14px 0px 0px 0px">
                <Text20>{username}</Text20>
                <Text16 color={({ theme }) => theme.blackHover}>
                    Floor:0.71 Gulf
                </Text16>
            </Flex>
            <Flex direction="column" margin="18px 0px 0px 0px">
                <Text16 color={({ theme }) => theme.white}>5.8k Gulf</Text16>
                <Text16 color={({ theme }) => theme.blackHover}>$8.4M</Text16>
                <Text14 color={({ theme }) => theme.blue}>+294.7%</Text14>
            </Flex>
            </Flex>
            </Flex>

            <Flex gap="24px">
                <NftBox img={nft} />
                <NftBox img={nft} />
                <NftBox img={nft} />
            </Flex>
        </Container>
    );
}
