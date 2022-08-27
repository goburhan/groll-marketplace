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

const NftContainer = styled.div`
  text-align: center;
  margin: 62px 160px;

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
    padding: 0px 0px 0px 32px;
    width: 100%;
    ${HomeTitleWrapper} {
      margin-top: -70px;
    }
    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: -52px;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: -52px;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 60px 20px;
`;

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          slidesToShow: 1.1,
          slidesToScroll: 1,
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
      <HomeTitleWrapper>
        <Text40 color={({ theme }) => theme.titles} margin="0px 10px 0px 0px">
          All items
        </Text40>
      </HomeTitleWrapper>
      <Flex>
        <BigItemCard />
        {nft.map((nfts) => (
          <AllItemCard nft={nfts.name} />
        ))}
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <HomeTitleWrapper>
        <Text40 color={({ theme }) => theme.titles}> All items</Text40>
      </HomeTitleWrapper>

      <Slider {...settings}>
        {nft.map((nfts) => (
          <AllItemCard nft={nfts.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
