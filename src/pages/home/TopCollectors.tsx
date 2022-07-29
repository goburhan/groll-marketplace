import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopArtistCard from "../../components/NftCards/Cards/TopArtistCard";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import PriceContainer from "../../components/NftCards/PriceContainer";
import { PrevNextButton } from "../../components/StyledComponents/Button";

const NftContainer = styled.div`
  text-align: center;
  margin: 72px 192px 70px 192px;
  
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

const TitleWrapper = styled.div`
margin-bottom:23px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    height: 20px;
    margin-bottom:0px;
  }
`;
export default function TopCollectors() {
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
        <HomeTitles> Top Collectors</HomeTitles>
      </TitleWrapper>

      <Slider {...settings}>
      {icons.map((icon) => (
          <TopArtistCard nft={icon.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
