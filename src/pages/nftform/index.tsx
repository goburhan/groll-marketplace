import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectConnector,
  updateProfile,
} from "../../actions/wallet/walletSlice";
import FileUpload from "../editprofile/FileUpload";
import { InputField, Register } from "../../components/SearchBar";
import {
  BackButton,
  BlueButton,
  Transparent,
} from "../../components/StyledComponents/Button";
import {
  Text16,
  Text48,
  Text14,
  Text12,
} from "../../components/StyledComponents/Text";
import Dropdown from "../editprofile/Dropdown";
import store from "../../app/store";
import { getDefaultConnector } from "../../app/hooks";
import { Divider } from "../../components/StyledComponents/Divider";
import Toggle from "../../components/Toggle";
import { Background, FlexProp } from "../../app/types";
import NftPreview from "../../components/NftCards/NftPreview";

interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  alignItems?: string;
  innerRef?: any;
  gap?: string;
}
const Text = styled(Text14)`
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
  span {
    color: ${({ theme }) => theme.linkItems};
  }
`;
const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 300px;
`;
const Page = styled.div`
  margin: 60px 150px 0px 150px;
`;
const Collections = styled.div`
  display: grid;
  width: 85%;
  margin: 30px 0px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

const Flex = styled.div<prop>`
  display: flex;
  width: 100%;
  gap: ${(props) => props.gap || "0px"};
  flex-direction: ${(props) => props.direction || "column"};
  text-align: left;
  justify-content: space-between;
  img {
    max-width: 100px;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  button {
    place-self: right;
  }
`;

const InputWrapper = styled.div<prop>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.direction || "column"};
  margin-right: ${(props) => props.mr};
`;

const LinkWrapper = styled.div<prop>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const Clear = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  place-items: center;
  padding: 20px 0px;
  gap: 8px;
  border: 1px solid ${(props) => props.color};
  border-radius: 16px;
  color: ${(props) => props.color};
`;

const Botwrapper = styled.div<FlexProp>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width || "100%"};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  button {
    margin: 60px auto;
    padding: 12px 24px;
  }
`;
export default function NftForm() {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const user = store.getState().user;
  const defaultConnector = useSelector(selectConnector);
  const accounts = getDefaultConnector().useAccounts();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dispatch = useDispatch();
  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }
  let id;
  let avatar;
  useEffect(() => {
    id = user.id;
    avatar = user.avatar;
  });

  return (
    <Page>
      <BackButton margin="154px 0px 68px 0px" />

      <PageWrapper>
        <Flex>
          <Botwrapper width="60%" margin="0px 0px 44px 0px">
            <Text48>Create single collectible</Text48>
          </Botwrapper>

          <Text16
            color={({ theme }) => theme.cardTitle}
            fontWeight="600"
            margin="8px 0px 4px 0px"
          >
            Upload File
          </Text16>

          <InputWrapper>
            <Text12 weight="400">Drag or choose your file to upload</Text12>
            <FileUpload></FileUpload>
          </InputWrapper>

          <Text16
            color={({ theme }) => theme.cardTitle}
            fontWeight="600"
            margin="8px 0px 4px 0px"
          >
            Item Details
          </Text16>

          <InputWrapper>
            <Text>ITEM NAME</Text>
            <InputField placeholder="e. g.  “Redeemable Bitcoin Card with logo” " />
          </InputWrapper>
          <InputWrapper>
            <Text>Description</Text>
            <InputField placeholder="e. g. “After purchasing you will able to recived the logo...” " />
          </InputWrapper>

          <InputWrapper>
            <Text>PRICE</Text>
            <InputField placeholder="e. g. “#price” " />
          </InputWrapper>

          <LinkWrapper>
            <InputWrapper>
              <Text>EXTERNAL LINKS</Text>
              <InputField placeholder="e. g. “#price” " />
            </InputWrapper>

            <InputWrapper>
              <Text>ROYALITIES</Text>
              <Dropdown header="Collector" />
            </InputWrapper>

            <InputWrapper>
              <Text>PROPERTIE</Text>
              <InputField placeholder="e. g. “#price” " />
            </InputWrapper>
          </LinkWrapper>

          <InputWrapper>
            <Text>HASHTAG</Text>
            <InputField placeholder="e. g. “#Nftmusic”" />
          </InputWrapper>
          <Divider width="100%" mb="44px" mt="20px" />

          <Flex gap="32px">
            <Flex direction="row">
              <Flex>
                <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
                  Put on sale
                </Text16>
                <Text color="#777E90">You'll receive bids on this item</Text>
              </Flex>
              <Toggle />
            </Flex>

            <Flex direction="row">
              <Flex>
                <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
                  Unlock once purchased
                </Text16>
                <Text color="#777E90">
                  Content will be unlocked after successful transaction
                </Text>
              </Flex>

              <Toggle />
            </Flex>

            <Flex direction="row">
              <Flex>
                <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
                  Choose collection
                </Text16>
                <Text color="#777E90">
                  Choose an exiting collection or create a new one
                </Text>
              </Flex>

              <Toggle />
            </Flex>
          </Flex>
          <Collections>
            <Clear color="#9197AE">
              <img src="/images/Icons/Circleplus.svg" />
              Create Collection
            </Clear>
            <Clear color="#FDC673">
              <img src="/images/Icons/Legendplus.svg" />
              Legend Crypto
            </Clear>
            <Clear color="#7614F3">
              <img src="/images/Icons/Epicplus.svg" />
              Epic Crypto
            </Clear>
            <Clear color="#09ABF9">
              <img src="/images/Icons/Rareplus.svg" />
              Rare Crypto
            </Clear>
          </Collections>

          <Botwrapper>
            <BlueButton
              onClick={() => {
                dispatch(
                  updateProfile({
                    nickname: userName,
                    brief: bio,
                    coinbase: accounts[0],
                    id: id,
                    avatar: avatar,
                  })
                );
              }}
              style={{
                background: "#00ACFF",
              }}
            >
              Create item
              <img src="/images/Icons/Rightarrow.svg" />
            </BlueButton>
          </Botwrapper>
        </Flex>
        <Container>
          <NftPreview />
          <Transparent>Switch to Multiple</Transparent>
        </Container>
      </PageWrapper>
    </Page>
  );
}
