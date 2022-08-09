import React from "react";
import {
  Text40,
  Text14,
} from "../../components/StyledComponents/Text";
import styled from "styled-components";
import { Flex } from "../../components/StyledComponents/Flex";
import SelectButton from "../collection/Components/SelectButton";

const Flexs = styled(Flex)`
  align-items: center;
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

const PriceBox = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.color};
  border-radius: 16px;
  padding: 4px 16px;
  font-weight: 700;
  margin-right: 1rem;
`;
const PriceBox2 = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 16px;
  padding: 4px 16px;
`;

export default function InfoSection() {
  return (
    <Box>
      <Flexs margin="0px 0px 18px 0px">
        <Text40 color={({ theme }) => theme.titles} letterSpacing="-0.03em"  >Not Your Bro # 6548</Text40>
        <img
          src="/images/verified.svg"
          style={{ minWidth: 34, marginLeft: 10 }}
        />
      </Flexs>
      <Flexs margin="0px 0px 14px 0px">
        <PriceBox color="#2eb689">
          <img src="/images/Icons/Logo.svg" />
          <Text14 color="#2EB689">2.5 Gulf</Text14>
        </PriceBox>
        <PriceBox color="#484D57">
          <Text14 color={({ theme }) => theme.gray}>$4,429.87</Text14>
        </PriceBox>
        <Text14 fontWeight="700" color="#00ACFF">
          About this collection
        </Text14>
      </Flexs>
      <Text14 color={({ theme }) => theme.lowerdetail}>
        Not Your Bro is a movement celebrating and empowering Womxn, LGBTQIA+
        people & their allies.
      </Text14>
      <SelectButton />
    </Box>
  );
}
