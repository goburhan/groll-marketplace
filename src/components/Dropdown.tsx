import ClickAwayListener from "@mui/material/ClickAwayListener";
import React, { useState } from "react";
import styled from "styled-components";
import { Text12 } from "./StyledComponents/Text";

interface Props {
  mr?: string;
}
const DropDownContainer = styled("div")<Props>`
  width: 19.5em;
  margin: 0 auto;
  text-align: left;
  line-height: 30px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 0rem;
    width: 88vw;
  }
`;

const DropDownHeader = styled.div`
  display: flex;
  padding: 8px 14px 8px 14px;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.blackHover};
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
  font-size: 14px;
`;
const DropDownListContainer = styled.div`
  background-color: ${({ theme }) => theme.header};
  position: absolute;
  width: 19.5em;
  padding: 0px 8px 8px 8px;
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 20px;
`;
const DropDownList = styled("ul")`
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  color: ${({ theme }) => theme.linkItems};
  font-size: 14px;
  z-index: 1;
  padding: 0px 0px 0px 10px;
  height: 2rem;
  &:hover {
    background-color: #484d57;
    background-size: 100% 100%;
    border-radius: 10px;
  }
`;

const options = ["Mangoes", "Apples", "Oranges"];
export default function Dropdown({ header, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <DropDownContainer>
        <Text12>{title}</Text12>
        <DropDownHeader onClick={toggling}>
          {selectedOption || header}
          <img
            src="/images/Dropdown1.svg"
            style={{ maxWidth: 25 }}
            alt="nft-example"
          />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </ClickAwayListener>
  );
}
