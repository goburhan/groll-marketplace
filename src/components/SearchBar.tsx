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
}

export const Register = styled.input<prop>`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "100%"};
  padding: 12px 16px;
  margin: 10px 0 24px 0;
  color:white;
  background: transparent;
  background-repeat: no-repeat;
  border: 1.5px solid #484D57;
  border-radius: 12px;
  ::placeholder {
    padding:  0px 2px;
  }
  :focus {
    outline: none !important;
    border: 1.5px solid #00ACFF;
  }
`;

const Email = styled.input(
  ({ theme }) => `
background-color:transparent;
padding:5px;
outline: none;
::placeholder {
   color: #777E91;
 }
@media (max-width:  ${theme.mobile}) {
}
 }
`
);

export default function StyledInput() {
  return (
    <NavInput
      onchange={""}
      placeholder="Search Everything"
      innerRef={(x) => {
        this.input = x;
      }}
      onMouseEnter={() => this.input.focus()}
    />
  );
}
