import React from "react";
import styled from "styled-components";
import { Divider } from "../../../components/StyledComponents/Divider";
import { LowerDetail } from "../../../components/StyledComponents/Text";
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div(({theme})=>`
  display: flex;
  img {
    border: 1px solid transparent;
    border-radius: 50%;
    max-width: 50px !important;
    margin-right: 6px;
  }
  
`);

export default function TopWrapper() {
  return (
    <Box>
      <Flex>
        <Flex>
          <img src="/images/Staticlogos/Userlogo.svg"  />
          <Box>
            <LowerDetail>Collection</LowerDetail>
            <LowerDetail>Not Your Bro</LowerDetail>
          </Box>
        </Flex>
        <Flex>
          <img src="/images/Staticlogos/Userlogo.svg" />
          <Box>
            <LowerDetail>Creator 7.5% royalities</LowerDetail>
            <LowerDetail>0x3cfbd...4323</LowerDetail>
          </Box>
        </Flex>
      </Flex>
      <Divider/>
    </Box>
  );
}
