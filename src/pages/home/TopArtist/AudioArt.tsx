import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopArtistCard from "../../../components/NftCards/Cards/TopArtistCard";
import { Text14, Text32 } from "../../../components/StyledComponents/Text";
import { PrevNextButton } from "../../../components/StyledComponents/Button";

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
    margin: 12px 0rem 0px 3rem;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: 16%;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: 16%;
      margin-right: 14%;
      top: 0;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  margin-top: 50px;
`;
const TitleWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    margin-top: -36px;
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const icons = [
    { name: "/images/Nft/1.svg" },
    { name: "/images/Nft/2.svg" },
    { name: "/images/Nft/3.svg" },
    { name: "/images/Nft/4.svg" },
    { name: "/images/Nft/5.svg" },
  ];
  return (
    <NftContainer>
      <TitleWrapper>
        <Flex dir="column">
          <Text32>Audio art</Text32>
          <Text14 color={({ theme }) => theme.filterText} letterSpacing="-0.01em">
            Some audio art from the gallery
          </Text14>
        </Flex>
      </TitleWrapper>

      <Slider {...settings}>
        {icons.map((icon) => (
          <TopArtistCard nft={icon.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
