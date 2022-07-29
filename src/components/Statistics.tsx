import React from "react";
import styled from "styled-components";
import { Vdivider, Divider } from "./StyledComponents/Divider";
import { StatisticValues, TartistLower } from "./StyledComponents/Text";

const Flex = styled.div`
  display:flex;
  align-items:center;
`
;
const Container = styled.div`
  display:flex;
  margin-top:20px;
  flex-direction:column;
  text-align:right;
  `
;

export default function Statistics() {
  return (
    <Flex>
      <Container>
        <StatisticValues>21.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider />
      <Container>
        <StatisticValues>21.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider />
      <Container>
        <StatisticValues>21.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider />
      <Container>
        <StatisticValues>
          {" "}
          <img src="/images/increase.svg" alt="increasing" />
          21.7K
        </StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
    </Flex>
  );
}
