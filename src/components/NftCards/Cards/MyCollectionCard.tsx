import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fullImageUrl } from "../../../app/hooks";
import store from "../../../app/store";
import { Divider } from "../../StyledComponents/Divider";
import {
  CardTitle,
  ItemsFont,
  TabFont,
  Gray14,
} from "../../StyledComponents/Text";
import PriceContainer from "../PriceContainer";
import Profile from "../Profile";
import { Gprice, Nft } from "./BigItemCard";

const NftContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid transparent;
  border-radius: 18px;
  margin-right: 20px;
  margin-top: 6vh;
  height: max-content;
  max-width: 300px;
  img {
    border-radius: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 100%;
    }
  }
`;
interface FlexProps {
  padding?: string;
  margin?: string;
  direction?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  padding: ${(props) => props.padding || "6px 16px"};
  margin: ${(props) => props.margin};
  justify-content: space-between;
  img {
    max-width: 18px;
    border-radius: 25px;
    margin-right: 4px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
  }
`;

const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  padding: ${(props) => props.padding || "0px 0px 0px 12px"};
  img {
    max-width: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  place-items:center;
  img{
    min-width:20px;
    margin-top:6px;
  }

`;

export const Text = styled.text`
  color: ${({ theme }) => theme.linkItems};
  margin-left: 6px;
  font-weight: bold;
  font-size: 12px;
`;

export default function MyCollectionCard({ nft }) {
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  return (
    <NftContainer>
      <Nft>
        <img src={nft} alt="nft-example" />
      </Nft>
      <Flex margin="20px 0px 0px 0px">
          <CardTitle bold="500">Amazing Digital Art</CardTitle>
        <Gray14>Price </Gray14>
      </Flex>
      <Flex >
        <Box>
          <img src="/images/like.svg" />
          <Gray14 >1299k</Gray14>
        </Box>

        <PriceContainer />
      </Flex>

      <Divider width="90%" ml="12px" />

      <Container padding="10px 0px 12px 12px" direction="row">
        <img src={avatar} alt="avatar" style={{ minWidth: 36 }} />
        <Container padding="0px 0px 0px 6px" direction="column">
          <TabFont>Artist</TabFont>
          <TabFont style={{color:"#fff"}}>{user.nickname}</TabFont>
        </Container>
      </Container>
    </NftContainer>
  );
}
