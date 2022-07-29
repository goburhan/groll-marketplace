import React from "react";
import styled from "styled-components";
import { Twelve } from "../../../components/StyledComponents/Text";

interface text {
  title?: string;
  color?: string;
  border?: string;
  text?: string;
}

export default function BgBox({ title, color, text, border } :text) {

  const Text = styled.text<text>`
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;

    color: ${(props) => props.border};
  `;
  
const Box = styled.div<text>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 14px;
  border-radius: 4px;
  gap: 10px;
  border: 2px solid ${props => props.border};
`;

  return (
    <Box border={border}>
      <Text border={border}>{title}</Text>
      <Twelve> {color}</Twelve>
      <Twelve> {text}</Twelve>
    </Box>
  );
}
