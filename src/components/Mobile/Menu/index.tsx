import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface Hamb {
  variants: any;
}

const HamburgerMenuContainer = styled.div<Hamb>`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    position: absolute;
    right: 32px;
    top: 30px;
    z-index: 1;
  }
`;
const MenuContainer = styled(motion.div)`
  width: 140%;
  height: 100%;
  background: ${({ theme }) => theme.mobileMenu};
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  position: fixed;
  z-index: -1;
  top: 4px;
  right: -232px;
  transform: translateX(-4em);
  user-select: none;
  padding: 1em 2.5em;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const Box = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  width: 100%;
  background: black;
`;

const menuVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  animate: { x: 300 },
  closed: {
    clipPath: "circle(30px at 100% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <HamburgerMenuContainer variants={menuVariants}>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuContainer
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={menuTransition}
        >
          {/* <TopContainer>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            
            LOGIN
          </LoginButton>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            JOIN US
          </LoginButton>
        </TopContainer> */}
          <ContentContainer>
            <NavMenu isOpen={isOpen} />
          </ContentContainer>
        </MenuContainer>
      </HamburgerMenuContainer>
    </ClickAwayListener>
  );
}
