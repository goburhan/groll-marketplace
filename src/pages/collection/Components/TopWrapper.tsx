import React from "react";
import styled from "styled-components";
import { FlexProp } from "../../../app/types";
import { Divider } from "../../../components/StyledComponents/Divider";
import { LowerDetail } from "../../../components/StyledComponents/Text";
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
          <img src="/images/Staticlogos/Userlogo.svg" />
          <Box>
            <LowerDetail>Collection</LowerDetail>
            <LowerDetail>Not Your Bro</LowerDetail>
          </Box>
        </Flex>
        <Flex >
          <img src="/images/Avatar/Avatar3.png" />
          <Box>
            <LowerDetail>Creator 7.5% royalities</LowerDetail>
            <LowerDetail>0x3cfbd...4323</LowerDetail>
          </Box>
        </Flex>
      </Flex>
      <Divider width="100%" mb="20px" mt="20px" />
    </>
  );
}
