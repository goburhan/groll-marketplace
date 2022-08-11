import React from "react";
import styled from "styled-components";
import { FlexProp } from "../../../app/types";
import { Divider } from "../../../components/StyledComponents/Divider";
import { Text14 } from "../../../components/StyledComponents/Text";
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div<FlexProp>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.direction};
  img {
    border: 1px solid transparent;
    border-radius: 50%;
    width: 53px !important;
    margin-right: 6px;
  }
`;
export default function TopWrapper() {
  return (
    <>
      <Flex>
        <Flex width="40%">
          <img src="/images/Staticlogos/Miniprofil.svg" />
          <Box>
            <Text14 color={({ theme }) => theme.lowerdetail}>Collection</Text14>
            <Text14 color={({ theme }) => theme.lowerdetail}>Not Your Bro</Text14>
          </Box>
        </Flex>
        <Flex >
          <img src="/images/Avatar/Avatar3.png" />
          <Box>
            <Text14 color={({ theme }) => theme.lowerdetail}>Creator 7.5% royalities</Text14>
            <Text14 color={({ theme }) => theme.lowerdetail}>0x3cfbd...4323</Text14>
          </Box>
        </Flex>
      </Flex>
      <Divider width="100%" mb="20px" mt="20px" />
    </>
  );
}
