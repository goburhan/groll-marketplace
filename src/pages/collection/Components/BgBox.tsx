import React from "react";
import styled from "styled-components";
import { Twelve } from "../../../components/StyledComponents/Text";

interface text {
  title?: string;
  color?: string;
  border?: string;
  text?: string;
}

export default function BgBox({ title, color, text, border }: text) {
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
    border-radius: 4px;
    white-space: nowrap;
    padding: 14px;
    gap:4px;
    width:100%;
    border: 2px solid ${(props) => props.border};
  `;

  return (
    <Box border={border}>
      <Text border={border}>{title}</Text>
      <Twelve> {color}</Twelve>
      <Twelve> {text}</Twelve>
    </Box>
  );
}
