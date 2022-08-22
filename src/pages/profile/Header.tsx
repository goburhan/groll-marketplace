import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text16, Text18, Text40 } from "../../components/StyledComponents/Text";
import Socials from "../../components/Socials";
import {
  SliderButton,
  Transparent,
} from "../../components/StyledComponents/Button";
import Statistics from "../../components/Statistics";
import store from "../../app/store";
import TitleAchviments from "./TitleAchviments";
import Rentslot from "./Rentslot";
import { fullImageUrl } from "../../app/hooks";

const ProfilPic = styled.div<prop>`
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  border: 1px solid white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
  }
`;

interface prop {
  img?: any;
  direction?: any;
  mb?: any;
  gap?: any;
  content?: any;
  mt?: any;
  mMt?: any;
}
const Flex = styled.div<prop>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: 700px;
  place-content: ${(props) => props.content};
  margin-bottom: ${(props) => props.mb};
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.mt};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    text-align: center;
    margin-top: ${(props) => props.mMt};
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Grid = styled.div<prop>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-content: ${(props) => props.content};
  margin-bottom: ${(props) => props.mb};
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.mt};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    text-align: center;
    margin-top: ${(props) => props.mMt};
    justify-content: center;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const HeaderWrapper = styled.div<prop>`
  display: flex;
  position: relative;
  padding: 140px 10% 20px 168px;
  align-items: end;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  max-height: 580px;
  min-height: 580px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0px 27px;
    background-size: cover;
    max-height: 1000px;
  }
`;
const EditWrapper = styled.div<prop>`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 10px 0px;
    img{
      width: 26px;
    }
  }
`;

export default function Header() {
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  return (
    <HeaderWrapper img="/images/Profilebg.svg">
      <Flex mMt="100px">
        <ProfilPic img={avatar} />
        <EditWrapper>
          <button>
            <img src="/images/Icons/EditAvatar.svg" alt="editavatar" />
          </button>
          <button>
            <img src="/images/Icons/EditProfile.svg" alt="editprofile" />
          </button>
        </EditWrapper>
        <Flex mb="6px" direction="row">
          <Text40 color={({ theme }) => theme.white}>{user.nickname}</Text40>
          <img
            src="/images/Verified.svg"
            style={{ minWidth: 28, marginLeft: 10 }}
          />
        </Flex>
        <TitleAchviments />
        <Text16 color={({ theme }) => theme.white} fontWeight="400">
          Dada loving documentarist and multidisciplinary artist living in Dada
          loving documentarist and multidisciplinary artist living in Dada
        </Text16>

        <Text18 color={({ theme }) => theme.gray}>
          Joined: 5th December 2021
        </Text18>

        <Flex mt="8px" gap="8px" direction="row">
          <Transparent display="none" mDisplay="flex" padding="12px 24px">
            Follow
          </Transparent>

          <Transparent display="none" mDisplay="flex" padding="12px 24px">
            3d Gallery
          </Transparent>
          <Socials />
          <Transparent mDisplay="none" padding="12px 24px">
            Follow
          </Transparent>

          <Transparent mDisplay="none" padding="12px 24px">
            3d Gallery
          </Transparent>
        </Flex>
        <Statistics />
        <Rentslot />
      </Flex>
    </HeaderWrapper>
  );
}
