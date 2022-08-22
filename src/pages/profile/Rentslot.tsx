import React, { useEffect } from "react";
import styled from "styled-components";
import {
  BlueButton,
  SliderButton,
} from "../../components/StyledComponents/Button";
import Slider from "react-slick";
import { WindowSize } from "../../hooks/useWindowsize";

export default function Rentslot() {
  interface Bg {
    img?: any;
  }
  const Rentslot = styled.div<Bg>`
    display: flex;
    background-image: url(${({ img }) => img});
    border: 1px solid ${({ theme }) => theme.blue};
    border-radius: 25px;
    padding: 28px;
    gap: 4px;
    flex-direction: column;
    max-width: 124px;
    place-content: center;
    place-items: center;

    color: ${({ theme }) => theme.blue};
    font-weight: 700;
    font-size: 16px;
    line-height: 31px;
    img {
      margin: 0 auto;
    }
  `;
  const Rented = styled.div<Bg>`
    display: flex;
    background-image: url(${({ img }) => img});
    border: 1px solid #f39a14;
    border-radius: 25px;
    background-repeat: no-repeat;
    min-height: 120px;
    min-width: 124px;
    flex-direction: column;
    color: white;
    place-content: center;
    place-items: center;
    img {
      max-width: 40px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 124px;
    }
  `;
  const BoxWrapper = styled.div`
    display: flex;
    gap: 26px;
    position: absolute;
    bottom: 20px;
    right: 160px;
    align-items: flex-end;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: static;
      width: 100%;
      margin-top: 20px;
    }
  `;

  const StyledSlider = styled(Slider)`
    display: flex;
    .slick-slide {
      margin:0px 26px 0px 0px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: initial;
      width: 90vw;

      .slick-slide {
        margin-right: 0px;
        margin-left: 0px;
      }
    }
  `;

  const StyledButton = styled(SliderButton)`
    display: flex;
    padding:12px 22px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      opacity: 0;
    }
  `;
  const settings = {
    speed: 250,
    slidesToShow:5,
    infinite: false,
    slidesToScroll: 1,
    
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          initialSlide: 0,
          variableWidth: false,
        },
      },
    ],
  };

  let isMobilee = WindowSize();

  return (
    <BoxWrapper>
      <StyledSlider {...settings}>
        <Rented img="/images/Staticlogos/Rentbg.svg" />
        <Rented img="/images/Staticlogos/Rentbg2.svg" />
        <Rentslot>
          <img src="/images/Icons/Addrent.svg" alt="rent" />
          Rentslot
        </Rentslot>
        <Rentslot>
          <img src="/images/Icons/Addrent.svg" alt="rent" />
          Rentslot
        </Rentslot>
        <StyledButton  style={{ border: "1px solid #fff" }} color="#fff">
          3D Gallery
        </StyledButton>
      </StyledSlider>
    </BoxWrapper>
  );
}
