import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopArtistCard from '../../../../components/NftCards/Cards/TopArtistCard';
import { Text14, Text32 } from '../../../../components/StyledComponents/Text';
import { PrevNextButton } from '../../../../components/StyledComponents/Button';

const NftContainer = styled.div`
    display: block;
    text-align: left;
    align-items: flex-start;

    .slick-prev:before {
        display: none;
        position: absolute;
        color: #777e90;
        font-size: 30px;
    }
    .slick-next:before {
        color: #777e90;
        display: none;
        position: absolute;
        font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 12px 0px;
        padding: 0px 0px 0px 32px;
        width: 100%;

        .slick-prev {
            margin-left: 82%;
            z-index: 1;
            margin-top: 16px;
            top: 0;
            bottom: 0;
        }
        .slick-next {
            margin-top: 16px;
            margin-right: 14%;
            top: 0;
        }
    }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.dir};
    margin-top: 50px;
`;
const TitleWrapper = styled.div`
    margin-bottom: 32px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        position: absolute;
        margin-top: -52px;
    }
`;
export default function VisualArt() {
    const settings = {
        infinite: false,
        speed: 250,
        slidesToShow: 5,
        prevArrow: <PrevNextButton img="/images/Staticlogos/PrevArrow.svg" />,
        nextArrow: <PrevNextButton img="/images/Staticlogos/Arrow.svg" />,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    const icons = [
        { name: '/images/Nft/1.svg' },
        { name: '/images/Nft/2.svg' },
        { name: '/images/Nft/3.svg' },
        { name: '/images/Nft/4.svg' },
        { name: '/images/Nft/5.svg' },
    ];
    return (
        <NftContainer>
            <TitleWrapper>
                <Flex dir="column">
                    <Text32>Audio art</Text32>
                    <Text14
                        color={({ theme }) => theme.filterText}
                        letterSpacing="-0.01em"
                    >
                        Some audio art from the gallery
                    </Text14>
                </Flex>
            </TitleWrapper>

            <Slider {...settings}>
                {icons.map((icon, key) => (
                    <TopArtistCard nft={icon.name} key={key} />
                ))}
            </Slider>
        </NftContainer>
    );
}
