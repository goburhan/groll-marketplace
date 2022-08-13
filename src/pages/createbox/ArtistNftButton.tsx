import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import MysteryContent from "./MysteryContent";

export default function ArtistNftButton() {
  const [open, toggleOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const Section = styled(motion.section)`
    display: grid;
    gap: 50px 30px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 230px));
  `;

  const StyledTitle = styled(motion.button)`
    text-align: left;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.cardTitle};
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.01em;
    z-index: 100;
  `;

  interface prop {
    width?: string;
    direction?: string;
    size?: string;
    mr?: string;
    innerRef?: any;
    mb?: any;
    gap?: any;
    disabled?: any;
  }

  const ButtonWrapper = styled(motion.button)<prop>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    img {
      min-height: 20px;
    }
    z-index: 100;
  `;

  const ChildVariants = {
    closed: {
      opacity: 0,
      height: "0rem",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "58vh",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      height: "1vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "100px",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      height: "100px",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  const Mysterybox = [
    { name: "/images/Nft/1.svg" },
    { name: "/images/Nft/2.svg" },
    { name: "/images/Nft/3.svg" },
    { name: "/images/Nft/4.svg" },
    { name: "/images/Nft/5.svg" },
    { name: "/images/Nft/6.svg" },
    { name: "/images/Nft/hot1.svg" },
    { name: "/images/Nft/hot2.svg" },
    { name: "/images/Nft/hot3.svg" },
    { name: "/images/Nft/Up1.svg" },
  ];

  return (
    <div style={{ display: "flex", width: "100%", margin: "40px 0px 0px 0px" }}>
      <div style={{ width: "100%" }}>
        <AnimatePresence>
          <ButtonWrapper
            key="parent"
            initial="closed"
            variants={ButtonParentVariants}
            animate={open ? "open" : "closed"}
            onClick={() => toggleOpen(!open)}
            disabled={disable}
          >
            <StyledTitle style={{ cursor: "pointer" }}>
              Artist Nft's
            </StyledTitle>

            {open ? (
              <img src="/images/Staticlogos/Uparrow.svg" />
            ) : (
              <img src="/images/Staticlogos/Downarrow.svg" />
            )}
          </ButtonWrapper>

          {open && (
            <Section
              key="child"
              initial="closed"
              animate="open"
              exit="exit"
              variants={ChildVariants}
            >
              {Mysterybox.map((nfts, index) => (
                <MysteryContent nft={nfts.name} key={index} />
              ))}
            </Section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
