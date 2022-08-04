import React from "react";
import styled from "styled-components";
import {
  BlueButton,
  SliderButton,
} from "../../components/StyledComponents/Button";

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
    color: white;
    place-content: center;
    place-items: center;

    color: ${({ theme }) => theme.blue};
    font-weight: 700;
    font-size: 16px;
    line-height: 31px;
  `;
  const Rented = styled.div<Bg>`
    display: flex;
    background-image: url(${({ img }) => img});
    border: 1px solid #f39a14;
    border-radius: 25px;
    min-height: 120px;
    width: 124px;
    flex-direction: column;
    color: white;
    place-content: center;
    place-items: center;
    img {
      max-width: 40px;
    }
  `;
  const BoxWrapper = styled.div`
    display: flex;
    gap: 26px;
    position: absolute;
    bottom: 20px;
    right: 160px;
    align-items: flex-end;
  `;
  
  return (
    <BoxWrapper>
      <Rented img="/images/Staticlogos/Rentbg.svg" />
      <Rented img="/images/Staticlogos/Rentbg2.svg"></Rented>
      <Rentslot>
        <img src="/images/Icons/Addrent.svg" alt="rent" />
        Rentslot
      </Rentslot>
      <Rentslot>
        <img src="/images/Icons/Addrent.svg" alt="rent" />
        Rentslot
      </Rentslot>
      <SliderButton color="#fff">3D Gallery</SliderButton>
    </BoxWrapper>
  );
}
