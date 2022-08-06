import React from "react";
import styled from "styled-components";
import BgBox from "./BgBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MiniCardTitle } from "../../../components/StyledComponents/Text";

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 14px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    gap: 14px;
  }
`;

export default function Backgrounds() {
  return (
    <>
      <Accordion
        style={{ background: "transparent", color: "white", fontSize: "32px" }}
      >
        <AccordionSummary
          sx={{ svg: { color: "white" } }}
          expandIcon={<ExpandMoreIcon />}
        >
          <MiniCardTitle>Properties</MiniCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Flex>
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#01CC7F"
              text="0.94% have tried..."
            />
            <BgBox
              title="COLORS"
              color="Purple"
              border="#01CC7F"
              text="20% have tried..."
            />
            <BgBox
              title="TEXTURE"
              color="Purple"
              border="#01CC7F"
              text="2% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#56CCF2"
              text="12% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#EB5757"
              text="5% have tried..."
            />
            <BgBox
              title="BACKGROUND"
              color="Purple"
              border="#E7DF2A"
              text="0.94% have tried..."
            />
          </Flex>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
