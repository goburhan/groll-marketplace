import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import UpcomingCard from "../../components/NftCards/Cards/UpcomingCard";
import { WindowSize } from "../../hooks/useWindowsize";

const NftContainer = styled.div`
  text-align: center;
  margin: 72px 120px 100px 120px;
  .slick-next {
    color: transparent;
    background-repeat: no-repeat;
  }
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
