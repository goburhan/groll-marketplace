import ClickAwayListener from "@mui/material/ClickAwayListener";
import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  text-align: left;
  margin: 12px 0px 46px 0px;
  width: 100%;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 3rem;
    width: 88vw;
  }
`;

const DropDownHeader = styled.div`
  display: flex;
  padding: 8px 14px 8px 14px;
  height: 148%;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.blackHover};
  border-radius: 12px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  color: ${({ theme }) => theme.gray};
  font-size: 14px;
`;
const DropDownListContainer = styled.div`
  background-color: ${({ theme }) => theme.header};
  position: absolute;
  width: inherit;
  padding: 0px 8px 6px 8px;
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 20px;
`;
const DropDownList = styled("ul")`
  box-sizing: border-box;
  color: #3faffa;
  font-weight: 500;
  &:first-child {
    padding-top: 1em;
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
export default function Dropdown({ header }) {
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
