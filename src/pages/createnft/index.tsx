import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/StyledComponents/Flex";
import { EditLower, HomeTitles } from "../../components/StyledComponents/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const UploadCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: ${({ theme }) => theme.card};
  
  min-width: 352px;
  min-height: 360px;
  border: 1px solid black;
`;
const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.card};
`;

export default function CreateNft() {
  return (
    <Wrapper>
      <HomeTitles>Upload item</HomeTitles>
      <EditLower>
        Choose <span> “Single” </span>if you want your collectible to be one of
        a kind or <span>“Multiple” </span> if you want to sell one collectible
        multiple times, you can also create a <span> “collection”</span> or a{" "}
        <span>“Mystery Box” </span> .
      </EditLower>
      <Flex>
        <UploadCard>
          <ImageWrapper></ImageWrapper>
        </UploadCard>
      </Flex>
    </Wrapper>
  );
}
