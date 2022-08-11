import React, { useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { BlueButton } from "./StyledComponents/Button";
import { Vdivider } from "./StyledComponents/Divider";
import ConnectButton from "./ConnectButton";
import Link from "next/link";
import { Text14 } from "./StyledComponents/Text";
import { HamburgerMenu } from "./Mobile/Menu";
import useThemeMode from "../hooks/useThemeMode";
import { useSelector } from "react-redux";
import { userSelect } from "../actions/wallet/walletSlice";
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
    padding: 6px 14px 6px 14px;
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

  const Menu = [
    { name: "Discover" },
    { name: "How it Work" },
    { name: "Features" },
  ];

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
        {Menu.map((item) => (
          <Text14 fontWeight="700" color={({ theme }) => theme.linkItems}>
            {item.name}
          </Text14>
        ))}
      </Items>
      <HamburgerMenu />

      <Items justifyContent="right">
        <SearchWrapper>
          <img src="/images/Shape.svg" />
          <Search placeholder="Search Everything" />
        </SearchWrapper>

        {user.nickname !== "" && (
          <Link href="/createnft">
            <BlueButton>Create</BlueButton>
          </Link>
        )}

        <ConnectButton />

        <ProfileIcon />

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
