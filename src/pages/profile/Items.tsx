import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Text40,
  HomeTitleWrapper,
} from "../../components/StyledComponents/Text";
import AllItemCard from "../../components/NftCards/Cards/AllItemCard";
import BigItemCard from "../../components/NftCards/Cards/BigItemCard";
import { WindowSize } from "../../hooks/useWindowsize";
import { PrevNextButton } from "../../components/StyledComponents/Button";
import MyCollectionCard from "../../components/NftCards/Cards/MyCollectionCard";

const NftContainer = styled.div`
  text-align: left;
  margin: 66px 0px 60px 152px;

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
    margin: 92px 0px 0px 0px;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: -20px;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: -20px;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Slidebox = styled.div`
  text-color: white;
`;

const TitleWrapper = styled(HomeTitleWrapper)`
@media (max-width: ${({ theme }) => theme.mobile}) {
  position: absolute;
  margin-top: -48px;
}
`
export default function AllItems() {
  const isMobilee = WindowSize();

  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: <PrevNextButton img="/images/Staticlogos/PrevArrow.svg" />,
    nextArrow: <PrevNextButton img="/images/Staticlogos/Arrow.svg" />,
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
          slidesToShow: 1.02,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  const nft = [
    { name: "/images/Nft/A1.svg" },
    { name: "/images/Nft/A2.svg" },
    { name: "/images/Nft/A3.svg" },
    { name: "/images/Nft/A4.svg" },
    { name: "/images/Nft/A5.svg" },
    { name: "/images/Nft/A6.svg" },
    { name: "/images/Nft/A7.svg" },
    { name: "/images/Nft/A8.svg" },
  ];

  return !isMobilee ? (
    <NftContainer>
      <Text40 color={({ theme }) => theme.titles}> Space Collections</Text40>

      <Flex>
        <BigItemCard />
        {nft.map((nfts) => (
          <Slidebox>
            <MyCollectionCard nft={nfts.name} />
          </Slidebox>
        ))}
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <TitleWrapper>
        <Text40 color={({ theme }) => theme.titles}>
          {" "}
          Space <br /> Collections
        </Text40>
      </TitleWrapper>

      <Slider {...settings}>
        {nft.map((nfts) => (
          <MyCollectionCard nft={nfts.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
