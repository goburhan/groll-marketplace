import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopArtistCard from "../../components/NftCards/Cards/TopArtistCard";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import PriceContainer from "../../components/NftCards/PriceContainer";

const NftContainer = styled.div`
  text-align: center;
  margin: 72px 192px 55px 192px;
  .slick-prev:before {
    content: "🡐";
    color: #777e90;
    font-size: 30px;
  }
  .slick-next:before {
    content: "🡒";
    color: #777e90;
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 100px 1rem 0px 3rem;
    justify-content: center;
    position: relative;
    width: 100%;
    .slick-prev {
      content: "🡐";
      margin-left: 82%;
      z-index: 1;
      margin-top: 3%;
      top: 0;
    }

    .slick-next {
      content: "🡒";
      margin-top: 3%;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Slidebox = styled.div`
  text-color: white;
`;
const TitleWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    height: 20px;
  }
`;
export default function TopCollectors() {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
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
        <HomeTitles> Top Collectors</HomeTitles>
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
