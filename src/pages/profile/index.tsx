import React from "react";
import Header from "./Header";
import SectionSelectButtons from "./SectionSelect";
import styled from "styled-components";

export default function Profile() {
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Flex>
      <Header></Header>
      <SectionSelectButtons />
    </Flex>
  );
}
