import React from "react";
import { Title, LowerDetail } from "../../../components/StyledComponents/Text";
import styled from "styled-components";
import SelectButton from "./SelectButton";

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width:45%;
  @media (max-width:  ${({ theme }) => theme.mobile}) {
    width:90%;
  
  }
`;

const PriceBox = styled.div(
  ({ theme }) => `
border: 1px solid #2EB689;
border-radius:20px;
padding:10px;
margin-right:1rem;
color:#2EB689;
font-weight: 700;
font-size: 14px;
line-height: 16px
`
);
const PriceBox2 = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius:20px;
  padding:10px;
  color:#B1B5C3 ;
  margin:0px 1rem 0px 0px;
  font-weight: 700;
 
  font-size: 14px;
  line-height: 16px
  `
;

const Text = styled.text`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #00b2ff;
`;

export default function InfoSection() {
  return (
    <Box>
      <Flex>
        <Title>Not Your Bro # 6548</Title>
        <img src="/images/verified.svg" />
      </Flex>
      <Flex>
        <PriceBox>2.5 Gulf</PriceBox>
        <PriceBox2>$4,429.873</PriceBox2>
        <Text>About This Collection</Text>
      </Flex>
      <LowerDetail>
        Not Your Bro is a movement celebrating and empowering Womxn, LGBTQIA+
        people & their allies.
      </LowerDetail>
      <SelectButton />
    </Box>
  );
}
