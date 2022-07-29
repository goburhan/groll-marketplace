import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopArtistCard from "../../../components/NftCards/Cards/TopArtistCard";
import {
  TartistLower,
  TartistTitle,
  Title,
} from "../../../components/StyledComponents/Text";
import PriceContainer from "../../../components/NftCards/PriceContainer";
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
    margin: 100px 0rem 0px 3rem;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: 3%;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: 3%;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Slidebox = styled.div`
  text-color: white;
  margin-top: 36px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  margin-top: 50px;
`;
const TitleWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    height: 20px;
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
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <NftContainer>
      <TitleWrapper>
        <Flex dir="column">
          <TartistTitle>Audio art</TartistTitle>
          <TartistLower>Some audio art from the gallery</TartistLower>
        </Flex>
      </TitleWrapper>

      <Slider {...settings}>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
        <Slidebox>
          <TopArtistCard />
        </Slidebox>
      </Slider>
    </NftContainer>
  );
}
