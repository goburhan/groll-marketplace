import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Register } from "../../components/SearchBar";
import {
  Text16,
Text14
} from "../../components/StyledComponents/Text";
import FileUpload from "../../components/Auth/FileUploader/FileUpload";
import SingleUpload from "../../components/Auth/FileUploader/SingleUpload";
import {
  selectConnector,
  updateProfile,
  userSelect,
} from "../../actions/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../components/StyledComponents/Button";
import { Web3ReactHooks } from "@web3-react/core";
import { hooks as coinbaseWalletHooks } from "../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import { hooks as walletConnectHooks } from "../../connectors/walletconnect";
import PersonalDetailWrapper from "../../components/UploadAvatar";
import Checkbox from "@mui/material/Checkbox";
import CustomizedCheckbox from "../connectwallet/Checkbox";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface prop {
  width?: string;
  direction?: string;
  size?: string;
  mr?: string;
  innerRef?: any;
}
interface checkboxProps {
  defaultChecked?: boolean;
  color?: any;
}

const Flex = styled(motion.div)<prop>`
  display: flex;
  width: 60%;
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

export default function StepOne() {
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const defaultConnector = useSelector(selectConnector);
  const isActive = getDefaultConnector().useIsActive();
  const accounts = getDefaultConnector().useAccounts();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();

  function handleChange(e) {
    setUserName(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

  function getDefaultConnector(): Web3ReactHooks {
    switch (defaultConnector) {
      case "metamask":
        return metaMaskHooks;
        break;
      case "coinbase":
        return coinbaseWalletHooks;
        break;
      case "walletconnect":
        return walletConnectHooks;
        break;

      default:
        return metaMaskHooks;
    }
  }
  const user = useSelector(userSelect);
  // console.log(user.nickname);

  return (
    <AnimatePresence>
      <Flex>
        <PersonalDetailWrapper
          title="Upload your avatar"
          image="/images/Staticlogos/Uploadimg.svg"
          buttons="Upload"
          description="We recommend an image of at least 400x400 Gifs work too🙌"
          tag="s"
        />
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
          <Register placeholder="e.g 12/03/1984" />
        </InputWrapper>

        <InputWrapper>
          <Text color="#b1b5c4">BIO / ABOUT ME </Text>
          <Register
            id="bio"
            name="bio"
            height="240px"
            onChange={(e) => bioChange(e)}
            value={bio}
            placeholder="e.g  SpaceShips NFT... "
          />
        </InputWrapper>

        <InputWrapper>
          <Text size="16px" color="#fff">
            Cover
          </Text>

          <FileUpload></FileUpload>
        </InputWrapper>

        <InputWrapper>
          <Text color="#b1b5c4">Email</Text>
          <Register placeholder="example@Gulfcoin.com" />
        </InputWrapper>

        <Checker>
          <CustomizedCheckbox />
          <Text14 color={({ theme }) => theme.lowerdetail}>Yes, you may send me marketing emails</Text14>
        </Checker>

        <Checker>
          <CustomizedCheckbox />
          <Text14 color={({ theme }) => theme.lowerdetail}>I’d like to receive email notifactions</Text14>
        </Checker>

        <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600" margin="20px 0px">Social</Text16>

        <InputWrapper>
          <Text color="#b1b5c4">Instagram</Text>
          <Register placeholder="@goburhan" />
        </InputWrapper>
        <InputWrapper>
          <Text color="#b1b5c4">Twitter</Text>
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
          <Link href="/signup">
            <StyledButton
              onClick={() => {
                dispatch(
                  updateProfile({
                    nickname: userName,
                    brief: bio,
                    coinbase: accounts[0],
                    id: user.id,
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
          </Link>
        </Botwrapper>
      </Flex>
    </AnimatePresence>
  );
}
