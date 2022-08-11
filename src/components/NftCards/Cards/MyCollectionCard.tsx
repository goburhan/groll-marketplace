import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fullImageUrl } from "../../../app/hooks";
import store from "../../../app/store";
import { Background } from "../../../app/types";
import { Divider } from "../../StyledComponents/Divider";
import { Text14, Text16 } from "../../StyledComponents/Text";
import PriceContainer from "../PriceContainer";

const NftContainer = styled.div`
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  background: ${({ theme }) => theme.card};
  border: 1px solid transparent;
  border-radius: 18px;
  margin-right: 20px;
  margin-top: 6vh;
  min-height: max-content;
  width: 300px;
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
  padding: ${(props) => props.padding || "10px 16px"};
  margin: ${(props) => props.margin};
  justify-content: space-between;
  img {
    max-width: 20px;
    border-radius: 25px;
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
    max-width: 42px;
    max-height: 38px;
    border-radius: 50%;
  }
`;
const Box = styled.div`
  display: flex;
  margin: auto 0;
  vertical-align: center;
  img {
    margin-right: 2px;
    max-width: 18px;
  }
`;
const Nft = styled.div<Background>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  margin: 16px 16px 0px 16px;
`;

export default function MyCollectionCard({ nft }) {
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  return (
    <NftContainer>
      <Nft img={nft} />

      <div>
        <Flex margin="12px 0px 0px 0px">
          <Text16 color={({ theme }) => theme.cardTitle}>
            Amazing Digital Art
          </Text16>
          <Text14 color={({ theme }) => theme.gray}>Price </Text14>
        </Flex>
        <Flex padding="0px 16px 10px 16px">
          <Box>
            <img src="/images/like.svg" />
            <Text14 color={({ theme }) => theme.gray}>1299k</Text14>
          </Box>
          <PriceContainer />
        </Flex>

        <Divider width="90%" ml="12px" />

        <Container padding="10px 0px 12px 12px" direction="row">
          <img src={avatar} alt="avatar" style={{ minWidth: 36 }} />
          <Container padding="0px 0px 0px 6px" direction="column">
            <Text14 color={({ theme }) => theme.gray} fontWeight="600">
              Artist
            </Text14>
            <Text14 fontWeight="600" style={{ color: "#fff" }}>
              {user.nickname}
            </Text14>
          </Container>
        </Container>
      </div>
    </NftContainer>
  );
}
