import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import UpcomingCard from "../../components/NftCards/Cards/UpcomingCard";
import { WindowSize } from "../../hooks/useWindowsize";
import { PrevNextButton } from "../../components/StyledComponents/Button";

const NftContainer = styled.div`
  text-align: center;
  margin: 72px 120px 100px 120px;

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
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  margin-top:75px;
  justify-content: center;
  align-items: center;
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
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isMobilee = WindowSize();
  const PrevArrow = styled.div`
    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: absolute;
      height: 20px;
      width: 50%;
    }
  `;
  return !isMobilee ? (
    <NftContainer>
      <HomeTitles> Upcoming collections</HomeTitles>
      <Flex>
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <PrevArrow>
        <HomeTitles>Upcoming collections</HomeTitles>
      </PrevArrow>
      <Slider {...settings}>
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </Slider>
    </NftContainer>
  );
}
