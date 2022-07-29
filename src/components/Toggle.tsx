import React from "react";
import styled from "styled-components";


const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background:#ffff;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #B1B1B1;
    
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #2AE7A8 ;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      background: linear-gradient(180deg, #271A52 0%, #050A24 100%);
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;


export default function Toggle() {
  return (
    <CheckBoxWrapper>
    <CheckBox id="checkbox" type="checkbox" />
    <CheckBoxLabel htmlFor="checkbox" />
  </CheckBoxWrapper>
  )
}





