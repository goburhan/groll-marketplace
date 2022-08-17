import React from "react";
import styled from "styled-components";
import BgBox from "./BgBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Text22 } from "../../../components/StyledComponents/Text";

const Flex = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 14px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Accord = styled(Accordion)`
  margin-right:32px;

`

export default function Backgrounds() {
  return (
    <>
      <Accord
        style={{ background: "transparent", color: "white", fontSize: "32px" }}
      >
        <AccordionSummary
          sx={{ svg: { color: "white" } }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Text22 lineHeight="48px" color={({ theme }) => theme.cardTitle}>Properties</Text22>
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
      </Accord>
    </>
  );
}
