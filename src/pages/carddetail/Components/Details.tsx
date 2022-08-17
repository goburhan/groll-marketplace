import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Text14, Text22 } from "../../../components/StyledComponents/Text";
import { Divider } from "../../../components/StyledComponents/Divider";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width:100%;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Text = styled(Text14)`
  color: ${({ theme }) => theme.lowerdetail};
`;
const Accord = styled(Accordion)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 87vw;
  }
`;
export default function Details() {
  return (
    <>
      <Divider width="100%" mb="2rem" mt="2rem" />
      <Accord
        style={{ background: "transparent", color: "white", fontSize: "32px" }}
        sx={{boxShadow: "none",  "&.MuiAccordion-root:before": { backgroundColor: "transparent"  } }}
      >
        <AccordionSummary
          sx={{ svg: { color: "white" } }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Text22 lineHeight="48px" color={({ theme }) => theme.cardTitle}>
            Details
          </Text22>
        </AccordionSummary>
        <AccordionDetails>
          <Flex>
            <Box>
              <Text>Contract Address</Text>
              <Text>0x1231241</Text>
            </Box>
            <Box>
              <Text>Token Id</Text>
              <Text>REŞasbf42</Text>
            </Box>
            <Box>
              <Text>Token Standart</Text>
              <Text>ERC-721</Text>
            </Box>
            <Box>
              <Text>Blockchain</Text>
              <Text>BSC Network</Text>
            </Box>
            <Box>
              <Text>Metadata</Text>
              <Text>Decenteralized</Text>
            </Box>
            <Box>
              <Text>Date of Mint</Text>
              <Text color={({ theme }) => theme.lowerdetail}>
                {" "}
                05/03/2021 - 23h:13 GMT+3
              </Text>
            </Box>
          </Flex>
        </AccordionDetails>
      </Accord>
    </>
  );
}
