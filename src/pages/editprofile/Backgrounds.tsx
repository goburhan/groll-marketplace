import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { WindowSize } from "../../hooks/useWindowsize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 74%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0px;
  }
`;
interface prop {
  direction?: string;
  justify?: string;
  margin?: string;
  alignItems?: string;
  mDirection?: string;
}
const Circle = styled.div<prop>`
  border-radius: 50%;
  max-height: 80px;
  min-width: 80px;
  background: ${(props) => props.color};
`;

export default function Backgrounds() {
  const isMobilee = WindowSize();
  const colors = [
    { name: "#fff" },
    { name: "#282B35" },
    { name: "#364252" },
    { name: "#C5C6C8" },
    { name: "#00D2FF" },
    { name: "#896BA0" },
  ];
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      {isMobilee ? (
        <Slider {...settings}>
          <InputWrapper>
            {colors.map((color) => (
              <Circle key={color.name} color={color.name} />
            ))}
          </InputWrapper>
        </Slider>
      ) : (
        <InputWrapper>
          {colors.map((color) => (
            <Circle key={color.name} color={color.name} />
          ))}
        </InputWrapper>
      )}
    </>
  );
}
