import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Text40,
  HomeTitleWrapper,
} from "../../components/StyledComponents/Text";
import UpcomingCard from "../../components/NftCards/Cards/UpcomingCard";
import { WindowSize } from "../../hooks/useWindowsize";
import { PrevNextButton } from "../../components/StyledComponents/Button";

const NftContainer = styled.div`
  text-align: center;
  margin: 62px 162px;
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
    padding: 0px 32px;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: 30px;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: 30px;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Flex = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, 300px);
  // justify-content: center;
  // align-items: center;
  display:flex;

  gap: 22px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
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
  const TitleWrapper = styled.div`
    margin-bottom: 62px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: absolute;
      margin-bottom: 23px;
      height: 20px;
      width: 10%;
    }
  `;
  const isMobilee = WindowSize();
  const nft = [
    { name: "/images/Nft/Up1.svg" },
    { name: "/images/Nft/Up2.svg" },
    { name: "/images/Nft/Up3.svg" },
    { name: "/images/Nft/Up4.svg" },
    { name: "/images/Nft/Up5.svg" },
  ];
  return !isMobilee ? (
    <NftContainer>
      <TitleWrapper>
        <Text40 color={({ theme }) => theme.titles}>
          Upcoming collections
        </Text40>
      </TitleWrapper>
      <Flex>
        {nft.map((nfts) => (
          <UpcomingCard nft={nfts.name} />
        ))}
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <TitleWrapper>
        <Text40 color={({ theme }) => theme.titles}>
          Upcoming collections
        </Text40>
      </TitleWrapper>
      <Slider {...settings}>
        {nft.map((nfts) => (
          <UpcomingCard nft={nfts.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
