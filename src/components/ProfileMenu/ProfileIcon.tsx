import * as React from "react";
import store from "../../app/store";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {  Text14, Text18 } from "../StyledComponents/Text";
import BalanceContainer from "./BalanceContainer";
import { Divider } from "../StyledComponents/Divider";
import Link from "next/link";
import Toggle from "../Toggle";
import { AnimatePresence, motion } from "framer-motion";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { addressWrapper, fullImageUrl, getDefaultConnector } from "../../app/hooks";
import { Flex } from "../StyledComponents/Flex";

interface nft {
  img?: string;
}
const ProfileButton = styled(motion.button)<nft>`
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  min-height: 56px;
  min-width: 56px;
  border-radius: 50%;
`;
const ProfileWrapper = styled.div<nft>`
  min-height: 56px;
  min-width: 56px;
`;

export default function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [nick, setNick] = useState(user.nickname);
  useEffect(() => {
    setNick(user.nickname);
  }, []);
  //////DROPDOWN STARTED///////
  function Menu() {
    const accounts: string[] = getDefaultConnector().useAccounts();


    const Container = styled.div`
      display: flex;
      position: absolute;
      flex-direction: column;
      right: 0;
      text-align: left;
      margin-right: 100px;
      background: ${({ theme }) => theme.card};
      width: 300px;
      height: max-content;
      border-radius: 15px;
      padding: 20px 0px;
      img {
        max-width: 30px;
        max-height: 30px;
      }
    `;
    const Wrapper = styled.div`
      display: flex;
      padding: 10px 20px 0px 20px;
      text-align: left;
    `;
    const Wrappers = styled.div`
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      text-align: left;
      gap: 12px;
    `;
    const Box = styled.div`
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      gap: 8px;
    `;

    interface prop {
      margin?: string;
    }
    const MenuItem = styled.div<prop>`
      display: flex;
      text-align: center;
      margin-top: ${(props) => props.margin || "12px"};
      gap: 10px;
      cursor: pointer;
    `;
let Address
    if (accounts !== undefined && accounts.length > 0) {
      Address = addressWrapper(user.coinbase);
    } else {
      Address = "Connect";
    }
    const MenuItems = [
      { name: "Edit my profile", url: "/editprofile", icon: "Editprofile" },
      { name: "My items", url: "/", icon: "Myitems" },
      { name: "Apply for KYC / Blue Tick", url: "/signup", icon: "Applykyc" },
      { name: "Manage Settings", url: "/", icon: "Settings" },
      { name: "Communication", url: "/", icon: "Communication" },
      // { name: "Dark theme", url: "", icon: "Theme" },
      // { name: "Disconnect", url: "", icon: "Disconnect" },
    ];

    return (
      <Container>
        <Wrapper>
          <Link href="/profile">
            <ProfileButton img={avatar}></ProfileButton>
          </Link>
          <Box>
            <Text18 letterSpacing="0" color={({ theme }) => theme.lowerDetail} fontWeight="600" >{nick}</Text18>
            <Flex>
              <Text14
                color={({ theme }) => theme.gray}
                fontWeight="600"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(user.coinbase);
                }}
              >
                {Address}{" "}
              </Text14>
              <img
                style={{ marginLeft: "6px" }}
                src="/images/Icons/ProfileMenu/Copy.svg"
              />
            </Flex>
          </Box>
        </Wrapper>

        <BalanceContainer />

        {MenuItems.map((items) => {
          return (
            <Wrappers>
              <Link
                href={items.url}
                key={items.name}
                target="_blank"
                rel="noreferrer"
              >
                <MenuItem>
                  <img src={`/images/Icons/ProfileMenu/${items.icon}.svg`} />

                  <Text14 color={({ theme }) => theme.editLower}>
                    {items.name}
                  </Text14>
                </MenuItem>
              </Link>
              <Divider />
            </Wrappers>
          );
        })}

        <Wrappers>
          <MenuItem
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={`/images/Icons/ProfileMenu/Theme.svg`} />

              <Text14>Dark Theme</Text14>
            </div>

            <Toggle />
          </MenuItem>
          <Divider />

          <MenuItem margin="0px">
            <img src={`/images/Icons/ProfileMenu/Disconnect.svg`} />
            <Text14 color={({ theme }) => theme.editLower}>Disconnect</Text14>
          </MenuItem>
        </Wrappers>
      </Container>
    );
  }
  //////DROPDOWN FINISHED/////
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
    open: {
      height: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const ChildVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },

    open: {
      opacity: 1,
      y: ["0vw", "0vw"],
      x: ["16vw", "12vw"],
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: ["0vw", "0vw"],
      x: ["12vw", "-1vw"],
      transition: {
        duration: 0.4,
      },
    },
  };
  const Section = styled(motion.section)``;
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ProfileWrapper>
        <AnimatePresence>
          <ProfileButton
            key="parent"
            initial="closed"
            variants={ButtonParentVariants}
            animate={open ? "open" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
            img="/images/Avatar/Avatar3.png"
          ></ProfileButton>
          {isOpen && (
            <Section
              key="child"
              initial="closed"
              animate="open"
              exit="exit"
              variants={ChildVariants}
            >
              <Menu></Menu>
            </Section>
          )}
        </AnimatePresence>
      </ProfileWrapper>
    </ClickAwayListener>
  );
}
