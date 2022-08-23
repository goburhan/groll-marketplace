import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectConnector,
  updateProfile,
} from "../../actions/wallet/walletSlice";
import FileUpload from "./FileUpload";
import { InputField, Register } from "../../components/SearchBar";
import {
  BackButton,
  Backhome,
  BlueButton,
  ClearAll,
} from "../../components/StyledComponents/Button";
import { Text16, Text48, Text14 } from "../../components/StyledComponents/Text";
import Dropdown from "./Dropdown";
import { getDefaultConnector } from "../../app/hooks";
import store from "../../app/store";
import Header from "./Header";

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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-row-start: 3;
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export default function EditSection() {
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
  useEffect(() => {}, []);
  let id;
  let avatar;
  useEffect(() => {
    id = user.id;
    avatar = user.avatar;
  });

  return (
    <Flex>
      <Text16
        margin="0px 0px 28px 0px"
        color={({ theme }) => theme.cardTitle}
        fontWeight="600"
      >
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

      <Text16
        color={({ theme }) => theme.cardTitle}
        fontWeight="600"
        margin="8px 0px 20px 0px"
      >
        Social
      </Text16>

      <InputWrapper>
        <Text color="#b1b5c4">Instagram</Text>
        <InputField placeholder="@instagram" />
      </InputWrapper>
      <InputWrapper>
        <Text color="#b1b5c4">Twitter</Text>
        <InputField placeholder="@twitter" />
      </InputWrapper>
      <InputWrapper>
        <Text color="#b1b5c4">Portfolio or website</Text>
        <InputField placeholder="e.g. www.example.com" />
      </InputWrapper>
      <AddMore>
        <img src="/images/Staticlogos/Addicon.svg" />
        Add more social account
      </AddMore>

      <Botwrapper>
        <ClearAll />
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
  );
}
