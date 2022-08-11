import React from "react";
import styled from "styled-components";
import { Transparent } from "../../components/StyledComponents/Button";
import { Text14 } from "../../components/StyledComponents/Text";

const UploadCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 16px;
  gap: 12px;
  text-align:center;
  border: 1px solid ${({ theme }) => theme.uploadNftBorder};
  border-radius: 16px;
  :hover {
    border: 1px solid ${({ theme }) => theme.blue};

    button {
      background: ${({ theme }) => theme.blue};
    }
  }
`;
export default function LeftBoxs({ img, text, button }) {
  return (
    <UploadCard>
      <img src={`/images/${img}.svg`} />
      <Text14 color={({ theme }) => theme.gray}>{text}</Text14>
      <Transparent padding="12px 24px">{button}</Transparent>
    </UploadCard>
  );
}
