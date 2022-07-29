import React from "react";
import styled from "styled-components";
import { LowerDetail } from "../../../components/StyledComponents/Text";
const Flex = styled.div`
  display: flex;
  img{
    border:1px solid transparent;
    border-radius:50%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function BidsOffer() {
  return (
    <Box>
      <Flex>
        <img src="/images/Staticlogos/Bids.svg" />
        <Box>
          <LowerDetail>0.1 eth by 0x34134093 </LowerDetail>
          <LowerDetail>
            26/05/2022, 20:43 Floor bid 15/7/2022 Bid ends
          </LowerDetail>
        </Box>
      </Flex>
    </Box>
  );
}
