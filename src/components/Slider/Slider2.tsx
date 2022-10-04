import React from 'react';
import styled from 'styled-components';
import { BlueButton, SliderButton } from '../StyledComponents/Button';
import { Sliderfont, Text22, Text32 } from '../StyledComponents/Text';

interface WrapperProps {
    bg?: any;
    gap?: string;
}

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 24%;
    margin-left: 144px;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        line-height: 34px;
        width: 90vw;
        gap: 28px;
        margin-left: 30px;
    }
`;
const Container = styled.div<WrapperProps>`
    display: flex;
    background: #282b35;
    height: inherit;
    justify-content: space-between;
    place-items: center;
    background-size: cover;
    img {
        margin-right: 172px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`;

const Box = styled.div<WrapperProps>`
    display: flex;
    flex-direction: ${(props) => props.dir || 'column'};
    gap: ${(props) => props.gap};
    span {
        color: ${({ theme }) => theme.white};
        font-weight: 300;
        font-size: 20px;
    }
`;
export const NFT = styled(Sliderfont)`  
    color: ${(props) => props.color};
    font-weight: 700;
    letter-spacing: 0.08em;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`;
export default function Slider1() {
    return (
        <Container bg="/images/slider1bg.png">
            <Flex>
                <Sliderfont>
                    Discover Over <span> 1000+ {' '}
                    <NFT color="#00ACFF">NFT</NFT> </span> collections{' '}
                </Sliderfont>
                <Box dir="row" gap="40px">
                    <Box>
                        <Text22 letterSpacing="0.225em" color="white">
                            400k+
                        </Text22>
                        <span>Users</span>
                    </Box>
                    <Box>
                        <Text22 letterSpacing="0.225em" color="white">
                            10k+
                        </Text22>
                        <span>Artwork</span>
                    </Box>
                    <Box>
                        <Text22 letterSpacing="0.225em" color="white">
                            100k+
                        </Text22>
                        <span>Artists</span>
                    </Box>
                </Box>

                <BlueButton padding="12px 28px" mPadding="8px 66px">
                   Get Started
                </BlueButton>
            </Flex>
            <img src="/images/SliderCards.svg" alt="" />
        </Container>
    );
}
