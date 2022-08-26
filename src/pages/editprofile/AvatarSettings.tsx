import React from "react";
import styled from "styled-components";
import { Divider } from "../../components/StyledComponents/Divider";
import { Text16 } from "../../components/StyledComponents/Text";
import Toggle from "../../components/Toggle";
import UploadAvatar from "../../components/UploadAvatar";
import { WindowSize } from "../../hooks/useWindowsize";
import Backgrounds from "./Backgrounds";
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 260px 200px 40px 80px 40px 80px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-rows: 490px 300px 28px 126px 80px;
  }
`;

interface prop {
  direction?: string;
  justify?: string;
  margin?: string;
  alignItems?: string;
  gap?: string;
  mDirection?: string;
}
const Flex = styled.div<prop>`
  display: flex;
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    gap: ${(props) => props.gap};
    place-content: flex-start;
    flex-direction: ${(props) => props.mDirection};
  }
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
const InputWrapper = styled.div<prop>`
  display: flex;
  gap: 20px;
  width: 74%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0px;
    width: 100%;
  }
`;

export default function AvatarSettings() {
  const isMobilee = WindowSize();
  const settings = {
    speed: 250,
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,

    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          initialSlide: 0,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Flex>
        {/* <FileInput></FileInput> */}
        <Divider mt="18px" Mwidth="100%" width="0px" />
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

      <Flex justify="." direction="column" mDirection="row">
        <Divider width="100%" mb="30px" />
        <Flex gap="10px" alignItems="center" margin="0px 0px 32px 0px">
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

        <Flex gap="10px" alignItems="center">
          <Flex justify="ss" direction="column">
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

      <Backgrounds />
    </Wrapper>
  );
}
