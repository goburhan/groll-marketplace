import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text40 } from "../../components/StyledComponents/Text";
import { WindowSize } from "../../hooks/useWindowsize";
import TopArtistCard from "../../components/NftCards/Cards/TopArtistCard";
import { PrevNextButton } from "../../components/StyledComponents/Button";

const NftContainer = styled.div`
  text-align: center;
  margin: 60px 140px 62px 140px;

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
    margin: 100px 0px;
    padding:0px 32px;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
const TitleWrapper = styled.div`
margin-bottom:40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    margin-bottom:20px;
  }
`;

export default function () {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: true,
    prevArrow: <PrevNextButton img="/images/Staticlogos/PrevArrow.svg" />,
    nextArrow: <PrevNextButton img="/images/Staticlogos/Arrow.svg" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isMobilee = WindowSize();

  const icons = [
    { name: "/images/Nft/1.svg" },
    { name: "/images/Nft/2.svg" },
    { name: "/images/Nft/3.svg" },
    { name: "/images/Nft/4.svg" },
    { name: "/images/Nft/5.svg" },
  ];
  return !isMobilee ? (
    <NftContainer>
      <TitleWrapper>
        <Text40 color={({ theme }) => theme.titles}>Top influencers</Text40>
      </TitleWrapper>
      <Flex>
        {icons.map((icon) => (
          <TopArtistCard nft={icon.name} />
        ))}
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <TitleWrapper>
        <Text40 color={({ theme }) => theme.titles}>Top influencers</Text40>
      </TitleWrapper>
      <Slider {...settings}>
        {icons.map((icon) => (
          <TopArtistCard nft={icon.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
