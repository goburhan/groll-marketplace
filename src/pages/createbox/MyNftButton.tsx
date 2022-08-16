import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import MysteryContent from "./MysteryContent";

export default function MyNftButton({ setProgress }) {
  const [open, toggleOpen] = useState(true);
  const [value, setValue] = useState(0);

  const Section = styled(motion.section)`
    display: grid;
    gap: 50px 30px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(230px, 230px));
  `;

  const StyledTitle = styled(motion.button)`
    text-align: left;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.cardTitle};
    font-size: 32px;
    line-height: 32px;
    font-weight: bold;
    letter-spacing: -0.01em;
  `;

  interface prop {
    width?: string;
    direction?: string;
    size?: string;
    mr?: string;
    innerRef?: any;
    mb?: any;
    gap?: any;
  }

  const ButtonWrapper = styled(motion.button)<prop>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      max-height: 12px;
    }
  `;

  const ChildVariants = {
    closed: {
      opacity: 0,
      height: "0px",

      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      height: "0rem",
      y: [0,-30],
      transition: {
        duration: 0.5,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "60px",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      height: "60px",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "100%" }}>
        <AnimatePresence>
          <ButtonWrapper
            key="parent"
            initial="closed"
            variants={ButtonParentVariants}
            animate={open ? "open" : "closed"}
            onClick={() => toggleOpen(!open)}
          >
            <StyledTitle style={{ cursor: "pointer" }}>My Nft's</StyledTitle>

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
              <MysteryContent setGokhan={setValue} />
            </Section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
