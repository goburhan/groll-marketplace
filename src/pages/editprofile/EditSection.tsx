import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  updateProfile,
} from "../../actions/wallet/walletSlice";
import FileUpload from "./FileUpload";
import { Register} from "../../components/SearchBar";
import {
  Backhome,
  StyledButton,
} from "../../components/StyledComponents/Button";
import {
  CardTitle,
  EditLower,
  EditProfileTitle,
} from "../../components/StyledComponents/Text";
import Dropdown from "./Dropdown";
import { getDefaultConnector } from "../../app/hooks";

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
  width: 90%;
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
export default function EditSection() {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const accounts = getDefaultConnector().useAccounts();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

  return (
    <Flex>
      <Backhome  >
        <img src="/images/back.svg" />
        Back to home
      </Backhome>
      <Container>
        <EditProfileTitle>Edit Your Profile</EditProfileTitle>
        <EditLower>
          You can set preferred display name, create{" "}
          <span> your profile URL </span> and manage other personal settings.
        </EditLower>
      </Container>

      <CardTitle margin="0px 0px 30px 0px" color="#fff">
        Personal Details
      </CardTitle>

      <InputWrapper>
        <Text color="#b1b5c4">Nickname</Text>
        <Register
          height="56px"
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
        <Register placeholder="example@Gulfcoin.com" />
      </InputWrapper>

      <CardTitle margin="8px 0px 20px 0px">Social</CardTitle>

      <InputWrapper>
        <Text color="#b1b5c4">Instagram</Text>
        <Register placeholder="@goburhan" />
      </InputWrapper>
      <InputWrapper>
        <Text color="#b1b5c4">Twitter</Text>
        <Register placeholder="@gobur" />
      </InputWrapper>
      <InputWrapper>
        <Text color="#b1b5c4">Portfolio or website</Text>
        <Register placeholder="@gobur" />
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
        <StyledButton
          onClick={() => {
            dispatch(
              updateProfile({
                nickname: userName,
                brief: bio,
                coinbase: accounts[0],
              })
            );
          }}
          style={{
            height: "48px",
            width: "18%",
            background: "#00ACFF",
          }}
        >
          Confirm
        </StyledButton>
      </Botwrapper>
    </Flex>
  );
}
