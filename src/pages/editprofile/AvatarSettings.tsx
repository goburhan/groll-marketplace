import React from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";
import { Text16 } from "../../components/StyledComponents/Text";
import Toggle from "../../components/Toggle";
import UploadAvatar from "../../components/UploadAvatar";
const Wrapper = styled.div`
  display: grid;
  margin-top: 28%;
  grid-template-rows: 260px 200px 40px 80px 40px 80px;
`;

interface prop {
  direction?: string;
  justify?: string;
  margin?: string;
  alignItems?: string;
}
const Flex = styled.div<prop>`
  display: flex;
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
`;
const Text = styled.text<prop>`
  color: ${(props) => props.color};
  line-height: 20px;
`;
const AddMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #484d57;
  width: 40%;
  height: 40px;
  padding: 10px 2px 10px 2px;
  border-radius: 25px;
  color: #777e91;
  margin-bottom: 6%;
  img {
    margin-right: 10px;
  }
`;
const InputWrapper = styled.div<prop>`
  display: flex;
  gap: 20px;
  width: 74%;
`;
const Circle = styled.div<prop>`
  border-radius: 50%;
  max-height: 80px;
  min-width: 80px;
  background: ${(props) => props.color};
`;

const colors = [
  { name: "#fff" },
  { name: "#282B35" },
  { name: "#364252" },
  { name: "#C5C6C8" },
  { name: "#00D2FF" },
  { name: "#896BA0" },
];

export default function AvatarSettings() {
  return (
    <Wrapper>
      <Flex>
        {/* <FileInput></FileInput> */}
        <UploadAvatar
          tag=""
          title="Profile Photo 2D"
          image="/images/Avatar/Editavatar1.svg"
          buttons="Upload"
          description=" We recommend an image of at least 400x400 Gifs work too🙌"
        />
        <UploadAvatar
          tag=""
          title="Profile photo 3D"
          image="/images/Avatar/Editavatar2.svg"
          buttons="Create avatar"
          description=" Create your free avatar, customize it with hundreds of options, and use in our platforme."
        />
      </Flex>

      <Flex justify="." direction="column">
        <Divider width="100%" mb="40px" />
        <Flex alignItems="center" margin="0px 0px 32px 0px">
          <Flex direction="column">
            <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
              3D Photo Avatar
            </Text16>
            <Text color="#777E90">
              You can shoose and Customize your 3D Photo avatar
            </Text>
          </Flex>
          <Toggle />
        </Flex>

        <Flex alignItems="center">
          <Flex  justify="ss" direction="column">
            <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
              2D Photo Avatar
            </Text16>
            <Text color="#777E90">
              You can shoose and Customize your 2D Photo avatar
            </Text>
          </Flex>

          <Toggle />
        </Flex>
      </Flex>

      <Divider width="100%" mb="28px" />

      <Flex>
        <AddMore>
          <img src="/images/Staticlogos/Addicon.svg" />
          Create your 3D Gallery
        </AddMore>
        <AddMore>
          <img src="/images/Staticlogos/Addicon.svg" />
          Apply for a blue Tick
        </AddMore>
      </Flex>

      <Divider width="100%" mb="28px" />

      <Flex>
        <Flex justify="s" direction="column">
          <Text16 color={({ theme }) => theme.cardTitle} fontWeight="600">
            2D Photo Avatar
          </Text16>
          <Text color="#777E90">
            You can shoose and Customize your 2D Photo avatar
          </Text>
        </Flex>
        <Toggle />
      </Flex>

      <InputWrapper>
        {colors.map((color) => (
          <Circle key={color.name} color={color.name} />
        ))}
      </InputWrapper>
    </Wrapper>
  );
}
