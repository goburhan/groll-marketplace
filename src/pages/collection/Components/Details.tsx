import React from "react";
import styled from "styled-components";
// import ParentChild from "../../../views/Components/Mobile/ParentChild";
import BgBox from "./BgBox";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
  // Typography,
// } from "@mui/material";
import { LowerDetail } from "../../../components/StyledComponents/Text";
import { Divider } from "../../../components/StyledComponents/Divider";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export default function Details() {
  return (
    <>
      <Divider width="100%" mb="2rem" mt="2rem" />
      {/* <Accordion
        style={{ background: "transparent", color: "white", fontSize: "32px" }}
      >
        {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Details
        </AccordionSummary> 
        <AccordionDetails>
          <Flex>
            <Box>
              <LowerDetail>Contract Address</LowerDetail>
              <LowerDetail>0x1231241</LowerDetail>
            </Box>
            <Box>
              <LowerDetail>Token Id</LowerDetail>
              <LowerDetail>REŞasbf42</LowerDetail>
            </Box>
            <Box>
              <LowerDetail>Token Standart</LowerDetail>
              <LowerDetail>ERC-721</LowerDetail>
            </Box>
            <Box>
              <LowerDetail>Blockchain</LowerDetail>
              <LowerDetail>BSC Network</LowerDetail>
            </Box>
            <Box>
              <LowerDetail>Metadata</LowerDetail>
              <LowerDetail>Decenteralized</LowerDetail>
            </Box>
            <Box>
              <LowerDetail>Date of Mint</LowerDetail>
              <LowerDetail> 05/03/2021 - 23h:13 GMT+3</LowerDetail>
            </Box>
          </Flex>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
}
