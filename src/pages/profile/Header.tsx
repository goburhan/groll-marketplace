import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Title,
  CollectionLower,
  JoinTime,
} from "../../components/StyledComponents/Text";
import Socials from "../../components/Socials";
import {
  StyledButton,
  Transparent,
} from "../../components/StyledComponents/Button";
import Statistics from "../../components/Statistics";
import store from "../../app/store";
import TitleAchviments from "./TitleAchviments";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  width: 100%;
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
}
const Flex = styled.div<prop>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: 700px;
  margin-bottom: ${(props) => props.mb};
  gap: ${(props) => props.gap};
`;

const HeaderWrapper = styled.div<prop>`
  display: flex;
  padding: 10% 10% 5% 10%;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
`;
export function fullImageUrl(url) {
  if (!url) return "";
  if (url.toLowerCase().startsWith("ipfs:/")) {
    let urlArr = url.split("/");
    if (url.indexOf("image") > -1 || url.indexOf("animation") > -1) {
      url =
        "ipfs/" + urlArr[urlArr.length - 2] + "/" + urlArr[urlArr.length - 1];
    } else {
      url = "ipfs/" + urlArr[urlArr.length - 1];
    }
    return store.getState().config.ipfsUrl + "/" + url;
  }
  // not ipfs url

  var cdnUrl = store.getState().config.cdnUrl;
  return cdnUrl ? cdnUrl + url : url;
}
export default function Header() {
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  return (
    <HeaderWrapper img="/images/Profilebg.svg">
      <Flex>
        <ProfilPic img={avatar} />
        <Flex mb="6px" direction="row">
          <Title spacing="-0.01em" style={{ color: "white" }}>
            {user.nickname}
          </Title>
          <img src="/images/Verified.svg" style={{ minWidth: 40 }} />
        </Flex>
        <TitleAchviments />
        <CollectionLower>{user.brief}</CollectionLower>
        <JoinTime>Joined: 5th December 2021</JoinTime>
        <Flex gap="8px" direction="row">
          <Socials />
          <Transparent>Follow</Transparent>
          <Transparent padding="0px 24px">
            <img  src="/images/Icons/Contact.svg" />
            Contact</Transparent>
        </Flex>
        <Statistics />
      </Flex>

      
    </HeaderWrapper>
  );
}
