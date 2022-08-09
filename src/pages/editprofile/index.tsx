import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarSettings from "./AvatarSettings";
import {
  selectConnector,
  updateProfile,
} from "../../actions/wallet/walletSlice";
import FileUpload from "./FileUpload";
import { InputField, Register } from "../../components/SearchBar";
import {
  Backhome,
  BlueButton,
} from "../../components/StyledComponents/Button";
import {
  Text16,
  Text48,
  
  Text14,
} from "../../components/StyledComponents/Text";
import Dropdown from "./Dropdown";
import store from "../../app/store";
import { getDefaultConnector } from "../../app/hooks";

const PageWrapper = styled.div`
  display: grid;
  gap:80px;
  margin: 60px 150px 0px 150px;
  grid-template-columns: 2fr 2fr;
`;
interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  innerRef?: any;
}

const Flex = styled.div<prop>`
  display: flex;
  width: 100%;
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
const Botwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Text = styled.text<prop>`
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "12px"};
`;

const InputWrapper = styled.div<prop>`
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.mr};
`;
interface boxprops {
  justify?: any;
}
const Checker = styled.div<boxprops>`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;
const AddMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: transparent;
  border: 1px solid #484d57;
  width: 30%;
  padding: 10px 2px 10px 2px;
  border-radius: 25px;
  color: #777e91;
  margin-bottom: 6%;
`;
const Clear = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  color: #777e91;
  margin-bottom: 6%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
`;
export default function Editprofile() {
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
    <PageWrapper>
      <Flex>
        <Backhome margin="32px 0px 68px 0px">
          <img src="/images/back.svg" />
          Back to home
        </Backhome>
        <Container>
          <Text48>Edit Your Profile</Text48>
          <Text14 color={({ theme }) => theme.editLower}>
            You can set preferred display name, create{" "}
            <span> your profile URL </span> and manage other personal settings.
          </Text14>
        </Container>

        <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
          Personal Details
        </Text16>

        <InputWrapper>
          <Text color="#b1b5c4">Nickname</Text>
          <InputField
            placeholder="e.g Mehdi Mairez"
            id="userName"
            name="userName"
            onChange={(w) => handleChange(w)}
            value={userName}
          />
        </InputWrapper>

        <InputWrapper>
          <Text color="#b1b5c4">TYPE OF PROFILE</Text>
          <Dropdown header="Collector" />
        </InputWrapper>

        <InputWrapper>
          <Text size="16px" color="#fff">
            Cover
          </Text>

          <FileUpload></FileUpload>
        </InputWrapper>

        <InputWrapper>
          <Text color="#b1b5c4">BIO / ABOUT ME </Text>
          <Register
            id="bio"
            height="240px"
            name="bio"
            onChange={(e) => bioChange(e)}
            value={bio}
            placeholder="e.g  SpaceShips NFT... "
          />
        </InputWrapper>

        <InputWrapper>
          <Text color="#b1b5c4">Email</Text>
          <InputField placeholder="example@Gulfcoin.com" />
        </InputWrapper>

        <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600" margin="8px 0px 20px 0px">Social</Text16>

        <InputWrapper>
          <Text color="#b1b5c4">Instagram</Text>
          <InputField placeholder="@goburhan" />
        </InputWrapper>
        <InputWrapper>
          <Text color="#b1b5c4">Twitter</Text>
          <InputField placeholder="@gobur" />
        </InputWrapper>
        <InputWrapper>
          <Text color="#b1b5c4">Portfolio or website</Text>
          <InputField placeholder="@gobur" />
        </InputWrapper>
        <AddMore>
          <img src="/images/Staticlogos/Addicon.svg" />
          Add more social account
        </AddMore>

        <Botwrapper>
          <Clear>
            <img src="/images/Staticlogos/Clearicon.svg" />
            Clear all
          </Clear>
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
              height: "48px",
            }}
            padding="0px 32px"
          >
            Confirm
          </BlueButton>
        </Botwrapper>
      </Flex>
      <AvatarSettings />
    </PageWrapper>
  );
}
