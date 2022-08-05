import React, { useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  BlueButton,
  MobileMenu,
  StyledButton,
} from "./StyledComponents/Button";
import { Vdivider } from "./StyledComponents/Divider";
import ConnectButton from "./ConnectButton";
import Link from "next/link";
import { ItemsFont } from "./StyledComponents/Text";
import { useContext } from "react";
import { MenuToggle } from "./Mobile/Menu/menuToggle";
import { HamburgerMenu } from "./Mobile/Menu";
import useThemeMode from "../hooks/useThemeMode";
import { useSelector } from "react-redux";
import { userSelect } from "../actions/wallet/walletSlice";
import store from "../app/store";
import ProfileIcon from "./ProfileMenu/ProfileIcon";
import { fullImageUrl } from "../app/hooks";



export default function Navbar() {
  const { theme, themeToggler } = useThemeMode();
  const user = useSelector(userSelect);
  const [imageUrl, setImageUrl] = useState(null);
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  console.log(user.avatar);
  const Navibar = styled.div`
    top: 0px;
    display: flex;
    position: fixed;
    width: 100vw;
    z-index: 1;
    padding: 24px 160px 24px 160px;
    background-color: ${({ theme }) => theme.header};
    img {
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 14px 20px 14px 14px;
      width: 100%;
    }
  `;
  const Search = styled.input`
    border: 1px solid transparent;
    border-radius: 25px;
    background-color: transparent;
    color: white;

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }
    :focus {
      outline: none;
    }
  `;

  const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `;

  const SearchWrapper = styled.div`
    display: flex;
    border: 1px solid #484d57;
    border-radius: 25px;
    background-color: transparent;
    padding: 6px 44px 6px 15px;
    width: 48%;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  `;

  interface Item {
    justifyContent?: string;
  }
  const Items = styled.div<Item>`
    color: white;
    display: flex;
    width: 48%;
    gap: 2rem;
    place-items: center;
    justify-content: ${(props) => props.justifyContent};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: space-around;
      display: none;
    }
  `;
  console.log(user);
  return (
      <Navibar>
        <Link href="/">
          <img
            src="/images/Logo.svg"
            style={{ maxWidth: "53px", cursor: "pointer" }}
          />
        </Link>
        <Items>
          <Vdivider ml="2rem" height="70%" />
          {/* <img src="/images/divider.svg" style={{ maxWidth: "53px" }} /> */}
          <ItemsFont>Discover</ItemsFont>
          <ItemsFont>How it Work</ItemsFont>
          <ItemsFont>Features</ItemsFont>
        </Items>
        <HamburgerMenu />

        <Items justifyContent="right">
          <SearchWrapper>
            <img src="/images/Shape.svg" />
            <Search placeholder="Search Everything" />
          </SearchWrapper>

          {user.nickname !==  "" && 
          <Link href="/createnft">
          <BlueButton>Create</BlueButton> 
          </Link>
          
          }

          <ConnectButton />
          {/* <img
            style={{ borderRadius: "50%", maxHeight: "60px", minWidth: "60px" }}
            src={avatar}
          /> */}
          <ProfileIcon />

          
          {/* <img src="/images/bell.svg" />   */}
          <ThemeButton
            onClick={() => {
              themeToggler();
            }}
          >
            <img src="/images/triangle.svg" />
          </ThemeButton>
        </Items>
      </Navibar>
  );
}
