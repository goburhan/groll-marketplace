import React from "react";
import styled from "styled-components";
import bg from "./collectionbg.png";
import profile from "./userpicture.svg";
import {

Text16,

  Text18,
  Text40,
} from "../../components/StyledComponents/Text";
import Socials from "../../components/Socials";
import { BlueButton } from "../../components/StyledComponents/Button";
import Statistics from "../../components/Statistics";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  width: 100%;
`;
const ProfilPic = styled.div`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 10% 10% 5% 10%;
  background-image: url({bg});
  background-size: 100%;
  background-repeat: no-repeat;
`;
export default function CollectionsHeader() {
  const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.about || "column"};
    width: 700px;
  `;

  return (
    <HeaderWrapper>
      <Flex>
        <ProfilPic />
        <Text40 color={({ theme }) => theme.white} letterSpacing="-0.03em" >
          Not You Bro!
          <img src="/images/Verified.svg" style={{ minWidth: 40 }} />
        </Text40>
        <Text16 color={({ theme }) => theme.white} fontWeight="400" >
          6969 Degenerate Cyber Trash out of the swamp hangry for the next big
          mint or really any munchies they can find first.
        </Text16>
        <Text18 color={({ theme }) => theme.gray}>Joined: 5th December 2021</Text18>
        <Flex about="row">
          <BlueButton
           
          >
            Follow
          </BlueButton>
          <Socials />
        </Flex>
        <Statistics />
      </Flex>

      <Side>
        <BlueButton
          
        >
          Follow
        </BlueButton>
      </Side>
    </HeaderWrapper>
  );
}
