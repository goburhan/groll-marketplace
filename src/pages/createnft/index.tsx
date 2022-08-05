import React from "react";
import styled from "styled-components";
import { Backhome } from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import { EditLower, HomeTitles } from "../../components/StyledComponents/Text";

interface img {
  img?: any;
}
interface prop {
  margin?: string;
  bold?: string;
  padding?: string;
  mb?: string;
}
const Wrapper = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  margin-bottom: 260px;
`;

const UploadCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 352px;
  min-height: 366px;
  border: 1px solid ${({ theme }) => theme.uploadNftBorder};

  border-radius: 16px;

  :hover {
    border: 1px solid ${({ theme }) => theme.blue};
  }
`;

const ImageWrapper = styled.div<img>`
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  height: 80%;

  background-repeat: no-repeat;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
`;

export const Button = styled.button<prop>`
  border: 1px solid #353945;
  font-weight: 500;
  color: #fff;
  font-size: 16px;
  border-radius: 90px;
  background: transparent;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 4px;
  :hover {
    background-color: ${({ theme }) => theme.blue};
    border: 1px solid ${({ theme }) => theme.blue};
  }
`;

export default function CreateNft() {
  return (
    <>
      <Backhome margin="148px 0px 104px 148px">
        <img src="/images/back.svg" />
        Back to home
      </Backhome>
      <Wrapper>
        <Flex
          margin="0px 0px 20px 0px"
          direction="column"
          width="35%"
          textAlign="center"
        >
          <HomeTitles margin="0px 0px 8px 0px">Upload item</HomeTitles>
          <EditLower>
            Choose <span> “Single” </span>if you want your collectible to be one
            of a kind or <span>“Multiple” </span> if you want to sell one
            collectible multiple times, you can also create a{" "}
            <span> “collection”</span> or a <span>“Mystery Box” </span> .
          </EditLower>
        </Flex>

        <CardWrapper>
          <UploadCard>
            <ImageWrapper img="/images/Singlenft.svg" />
            <Button>Create Single</Button>
          </UploadCard>
          <UploadCard>
            <ImageWrapper img="/images/Multiplenft.svg" />
            <Button>Create Multiple</Button>
          </UploadCard>
          <UploadCard>
            <ImageWrapper img="/images/Collectionnft.svg" />
            <Button>Create Collection</Button>
          </UploadCard>
          <UploadCard>
            <ImageWrapper img="/images/Nftbox.svg" />
            <Button>Create a NFT Box</Button>
          </UploadCard>
        </CardWrapper>
        <EditLower>
          We do not own your private keys and cannot access your funds without
          your confirmation.
        </EditLower>
      </Wrapper>
    </>
  );
}
