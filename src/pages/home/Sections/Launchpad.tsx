import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Text40,
    HomeTitleWrapper,
    Text14,
} from '../../../components/StyledComponents/Text';
import UpcomingCard from '../../../components/NftCards/Cards/UpcomingCard';
import { WindowSize } from '../../../hooks/useWindowsize';
import {
    AddWatchList,
    BlueButton,
    CircleButton,
    NavButton,
    PrevNextButton,
    Transparent,
} from '../../../components/StyledComponents/Button';
import { Flex } from '../../../components/StyledComponents/Flex';
import LaunchCard from '../LaunchCard';

const NftContainer = styled.div`
    text-align: center;
    margin: 62px 162px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`;
const Container = styled(Flex)`
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`;

export default function Launchpad() {
    const TitleWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 52px;
        text-align: left;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            position: absolute;
            margin-bottom: 23px;
            height: 20px;
            width: 10%;
        }
    `;
    const isMobilee = WindowSize();
    const nft = [
        { name: '/images/Nft/Up1.svg' },
        { name: '/images/Nft/Up2.svg' },
        { name: '/images/Nft/Up3.svg' },
        { name: '/images/Nft/Up4.svg' },
        { name: '/images/Nft/Up5.svg' },
    ];
    const Grid = styled.div`
        display: grid;
        grid-template-columns: 1.7fr 1fr;
        gap: 80px;
        @media (max-width: ${({ theme }) => theme.mobile}) {
        }
    `;
    const Text20 = styled.text`
        color: ${({ theme }) => theme.gray};
        font-weight: 400;
        font-size: 20px;
        line-height: 48px;
        letter-spacing: -0.01em;
    `;
    return (
        <NftContainer>
            <TitleWrapper>
                <Text40 color={({ theme }) => theme.titles}>Launchpad</Text40>
                <Text20>Some audio art from the gallery</Text20>
            </TitleWrapper>
            <Grid>
                <Container wrap="no-wrap">
                    <LaunchCard nft={'/images/Nft/Up5.svg'} />
                </Container>
                <Flex
                    justifyContent="center"
                    gap="22px"
                    textAlign="left"
                    direction="column"
                >
                    <Flex alignItems="center" gap="30px">
                        <Transparent padding="12px 16px">
                            Featured Launch
                        </Transparent>
                        <AddWatchList />
                        <Text40 color="white">USYK | Blockasset</Text40>
                    </Flex>
                    <Text14 color="white">
                        All of the music that I write is extremely
                        autobiographical. My goal is always to dig deeper within
                        myself because that’s where I feel everything starts
                        when it comes to change in the world. It always begins
                        within ourselves, I know the more transparent I can be
                        with my experiences the more I can affect the world in a
                        positive manner. I don’t open up too much so my music is
                        almost like public therapy for me.All of the music that
                        I write is extremely autobiographical. My goal is always
                        to dig deeper within myself because that’s where I feel
                        everything starts when it comes to change in the world.
                        It always begins within ourselves, I know the more
                        transparent I can be with my experiences the more I can
                        affect the world in a positive manner. I don’t open up
                        too much so my music is almost like public therapy for
                        me.
                    </Text14>
                    <BlueButton padding="12px 14px">
                        Apply for Launchpad
                    </BlueButton>
                </Flex>
            </Grid>
        </NftContainer>
    );
}
