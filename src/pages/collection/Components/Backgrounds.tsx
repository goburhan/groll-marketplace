import React from "react";
import styled from "styled-components";
import BgBox from "./BgBox";
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  @media (max-width:  ${({ theme }) => theme.mobile}) {
    justify-content:center;
    gap: 14px;
  }
`;

export default function Backgrounds() {
  return (
    <>
      {/* <Accordion style={{background:"transparent" , color:"white" , fontSize:"32px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >Properties</AccordionSummary>
        <AccordionDetails>
          <Flex>
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
          </Flex>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
}
