import React from "react";
import styled from "styled-components";
import Dene from "./Shape.svg";

const NavInput = styled.input<prop>`
  width: 250px;
  padding: 0.5em;
  margin: 0.5em;
  text-color: white;
  background-image: url(${Dene});
  background-repeat: no-repeat;
  justify-content: center;
  border: 1px solid white;
  border-radius: 25px;
`;

interface prop {
  onchange?: string;
  innerRef?: any;
  width?: string;
  height?: string;
}

export const Register = styled.textarea<prop>`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "50%"};
  padding: 12px 16px;
  margin: 10px 0 24px 0;
  color: white;
  resize: none;
  background: transparent;
  background-repeat: no-repeat;
  border: 1.5px solid #484d57;
  border-radius: 12px;
  ::placeholder {
    padding:4px 0px 0px 0px;
  }
  :focus {
    outline: none !important;
    border: 1.5px solid #00acff;
  }
`;

