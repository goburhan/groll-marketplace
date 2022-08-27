import React, { Component, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TCollectionCard from "../../components/NftCards/Cards/TCollectCard";
import {
  HomeTitleWrapper,
  Text40,
} from "../../components/StyledComponents/Text";
import PriceContainer from "../../components/NftCards/PriceContainer";
import PriceSelector from "../../components/Selectors/PriceSelector";

import Dropdown from "../../components/Dropdown";
import Link from "next/link";
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
    padding:0px 0px 0px 32px;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: -4px;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: -4px;
      margin-right: 14%;
      top: 0;
    }
  }
`;

const Slidebox = styled.div`
  text-color: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 3rem;
  }
`;
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 19.5em);
  width: 100%;
  justify-content: space-between;

  margin-top: 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2%;
  }
`;

const icons = [
  { name: "/images/Nft/1.svg" },
  { name: "/images/Nft/2.svg" },
  { name: "/images/Nft/3.svg" },
  { name: "/images/Nft/4.svg" },
  { name: "/images/Nft/5.svg" },
  { name: "/images/Nft/6.svg" },
];

export default function TopCollection() {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
    prevArrow: <PrevNextButton img="/images/Staticlogos/PrevArrow.svg" />,
    nextArrow: <PrevNextButton img="/images/Staticlogos/Arrow.svg" />,
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
      {
        breakpoint: 400,
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
      <HomeTitleWrapper>
        <Text40 color={({ theme }) => theme.titles}> Top collection</Text40>
      </HomeTitleWrapper>

      <Slider {...settings}>
        {icons.map((icon) => (
          <Link style={{ cursor: "pointer" }} href="/carddetail">
            <Slidebox>
              <TCollectionCard icon={icon.name} />
            </Slidebox>
          </Link>
        ))}
      </Slider>
      <Flex>
        <Dropdown title="Price" header="Highes Price" />
        <Dropdown title="Likes" header="Most Liked" />
        <Dropdown title="Creator" header="Verified Only" />
        <PriceSelector />
      </Flex>
    </NftContainer>
  );
}
