import React from "react";
import styled from "styled-components";
import { Vdivider, Divider } from "./StyledComponents/Divider";
import { StatisticValues, TartistLower } from "./StyledComponents/Text";

interface props {
  gap?: string;
}
const Flex = styled.div<props>`
  display: flex;
  align-items: end;
  gap:${(props)=>props.gap || "20px"} ;
`;
const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  text-align: right;
`;
export default function Statistics() {
  return (
    <Flex>
      <Container>
        <Flex gap="4px">
          <img src="/images/increase.svg" alt="increasing" />

          <StatisticValues>1.7K</StatisticValues>
        </Flex>

        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider height="50px"/>
      <Container>
        <StatisticValues>221.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider height="50px"/>
      <Container>
        <StatisticValues>37.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
      <Vdivider height="50px"/>
      <Container>
        <StatisticValues>21.7K</StatisticValues>
        <TartistLower>Items</TartistLower>
      </Container>
    </Flex>
  );
}
