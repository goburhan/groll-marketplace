import React from "react";
import styled from "styled-components";

interface prop {
  onchange?: string;
  innerRef?: any;
  width?: string;
  height?: string;
}

export const Register = styled.textarea<prop>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "50%"};
  padding: 12px 16px;
  margin: 10px 0px 24px 0px;
  resize: none;
  color: white;
  background: transparent;
  border: 1.5px solid #484d57;
  border-radius: 12px;
  ::placeholder {
  }
  :focus {
    outline: none !important;
    border: 1.5px solid #00acff;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px 12px;
    height:190px;
  }
`;
export const InputField = styled.input<prop>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: 16px;
  margin: 10px 0 24px 0;
  resize: none;
  color: white;
  background: transparent;
  border: 1.5px solid #484d57;
  border-radius: 12px;
  ::placeholder {
  }
  :focus {
    outline: none !important;
    border: 1.5px solid #00acff;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 48px;
    padding: 10px 12px;
  }
`;
