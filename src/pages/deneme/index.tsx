import React from "react";
import styled from "styled-components";

const Border = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0px;
    width: 1px;
    height: 200px;
    background-color: #000000; // The color of your border
  }
`;
const Wrapper = styled.div`
  margin: 10%;
`;
export default function index() {
  return (
    <Wrapper>
      <Border>index</Border>
    </Wrapper>
  );
}
