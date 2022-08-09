import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Text16,
  Text18,
  Text40,
} from "../../components/StyledComponents/Text";
import Socials from "../../components/Socials";
import {
  Transparent,
} from "../../components/StyledComponents/Button";
import Statistics from "../../components/Statistics";
import store from "../../app/store";
import TitleAchviments from "./TitleAchviments";
import Rentslot from "./Rentslot";
import { fullImageUrl } from "../../app/hooks";

const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
`;

const ProfilPic = styled.div<prop>`
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  border: 1px solid white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

interface prop {
  img?: any;
  direction?: any;
  mb?: any;
  gap?: any;
  content?:any;
}
const Flex = styled.div<prop>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: 700px;
place-content: ${(props) => props.content};
  margin-block: ${(props) => props.mb};
  gap: ${(props) => props.gap};
`;

const HeaderWrapper = styled.div<prop>`
  display: flex;
  position: relative;
  padding: 140px 10% 20px 168px;
  align-items:end;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  max-height: 580px;
  min-height: 580px;
`;

export default function Header() {
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  const BioWrapper = styled.div<prop>`
  min-height:40px;
  height:60px;
  max-height:160px;
  `;

  return (
    <HeaderWrapper img="/images/Profilebg.svg">
      <Flex >
        <ProfilPic img={avatar} />
        <Flex mb="6px" direction="row">
          <Text40 color={({ theme }) => theme.white}  >
            {user.nickname}
          </Text40>
          <img
            src="/images/Verified.svg"
            style={{ minWidth: 28, marginLeft: 10 }}
          />
        </Flex>
        <TitleAchviments />
          <Text16 color={({ theme }) => theme.white} fontWeight="400">
            Dada loving documentarist and multidisciplinary artist living in
            Dada loving documentarist and multidisciplinary artist living in
            Dada loving documentarist and multidisciplinary artist living in
            Dada loving documentarist and multidisciplinary artist living in
            Dada loving documentarist and multidisciplinary artist living in
           
          </Text16>

          <Text18 color={({ theme }) => theme.gray}>Joined: 5th December 2021</Text18>
          <Flex gap="8px" direction="row">
            <Socials />
            <Transparent>Follow</Transparent>
            <Transparent padding="0px 24px">
              <img src="/images/Icons/Contact.svg" />
              Contact
            </Transparent>
          </Flex>
          <Statistics />
      </Flex>
      <Rentslot />
    </HeaderWrapper>
  );
}
