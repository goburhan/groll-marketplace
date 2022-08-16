import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.6em 1em;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0em;
  left: -1.6em;

  border: 1px solid #757575;
  border-radius: 0.2em;

  ${Label}:hover & {
    opacity: 0.9;
  }


  &::after {
    content: "";
    position: absolute;
    display: block;
  }

  &:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;

    border: solid #fff;
    border-width: 0 2px 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;

    width: 35%;
    height: 70%;
    border: solid #fff;
    border-width: 0 2px 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::chechked {
    cursor: not-allowed;
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
