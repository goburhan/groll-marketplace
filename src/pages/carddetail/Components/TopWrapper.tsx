import React from "react";
import styled from "styled-components";
import { FlexProp } from "../../../app/types";
import { Divider } from "../../../components/StyledComponents/Divider";
import { Text14 } from "../../../components/StyledComponents/Text";
import { WindowSize } from "../../../hooks/useWindowsize";
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div<FlexProp>`
  display: flex;
  width: ${(props) => props.width};
  align-items: center;
  gap: 10px;
  img {
    border-radius: 50%;
    width: 53px !important;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${(props) => props.direction};
    align-items: flex-start;
    width: 100%;

  }
`;
export default function TopWrapper() {
  const isMobile = WindowSize();
  return (
    <>
      <Flex direction="column">
        <Flex width="40%">
          <img src="/images/Staticlogos/Miniprofil.svg" />
          <Box>
            <Text14 color={({ theme }) => theme.lowerdetail}>Collection</Text14>
            <Text14 color={({ theme }) => theme.lowerdetail}>
              Not Your Bro
            </Text14>
          </Box>
        </Flex>

        {isMobile && <Divider width="100%" />}

        <Flex>
          <img src="/images/Avatar/Avatar3.png" />
          <Box>
            <Text14 color={({ theme }) => theme.lowerdetail}>
              Creator 7.5% royalities
            </Text14>
            <Text14 color={({ theme }) => theme.lowerdetail}>
              0x3cfbd...4323
            </Text14>
          </Box>
        </Flex>
      </Flex>
      {!isMobile && <Divider width="100%" mb="20px" mt="20px" />}
    </>
  );
}
