import React, { Component, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TCollectionCard from "../../components/NftCards/Cards/TCollectCard";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import PriceContainer from "../../components/NftCards/PriceContainer";
import PriceSelector from "../../components/Selectors/PriceSelector";
import Next from "./NextArrow.svg";
import Dropdown from "../../components/Dropdown";
import Link from "next/link";
const NftContainer = styled.div`
  text-align: center;
  margin: 60px 140px 62px 140px;

  .slick-prev:before {
    content: "🡐";
    position: absolute;
    color: #777e90;
    font-size: 30px;
  }
  .slick-next:before {
    content: "🡒";
    color: #777e90;
    position: absolute;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 100px 0rem 0px 3rem;
    width: 100%;
    .slick-prev{
      margin-left: 82%;
      z-index: 1;
      margin-top: 3%;
      top: 0;
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2rem;
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

const PrevArrow = styled.div`
  margin-bottom: 60px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    margin-bottom: 0px;
    height: 20px;
  }
`;

export default function TopCollection() {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,

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

  return (
    <NftContainer>
      <PrevArrow>
        <HomeTitles> Top collection</HomeTitles>
      </PrevArrow>

      <Slider {...settings}>
        <Slidebox>
          <Link href="/collection">
            <TCollectionCard />
          </Link>
        </Slidebox>
        <Slidebox>
          <Link href="/carddetails">
            <TCollectionCard />
          </Link>
        </Slidebox>
        <Slidebox>
          <TCollectionCard />
        </Slidebox>
        <Slidebox>
          <TCollectionCard />
        </Slidebox>
        <Slidebox>
          <TCollectionCard />
        </Slidebox>
        <Slidebox>
          <TCollectionCard />
        </Slidebox>
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
