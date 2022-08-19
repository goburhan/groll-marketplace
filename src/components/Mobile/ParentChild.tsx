import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "../StyledComponents/Flex";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

const ButtonParent = styled(motion.div)`
  height: 7rem;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
`;

const ChildDiv = styled(motion.div)`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* opacity: 0; */
`;

const StyledButton = styled.button`
  height: 1.7rem;
  width: 100%;
  text-align: left;
  margin: 1%;
  border: 1px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.blackHover};
  font-size: 16px;
`;
const StyledTitle = styled.button`
  text-align: left;
  border: 1px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.cardTitle};
  font-size: 18px;
`;
const ButtonParentVariants = {
  closed: {
    height: "4rem",
    transition: {
      duration: "0.4",
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
  open: {
    height: "8rem",
    transition: {
      when: "beforeChildren",
      duration: "0.1",
    },
  },
};

const ChildVariants = {
  closed: {
    opacity: "0",
    // x: "100vh"
  },
  open: {
    opacity: "1",
    delay: "0.4",
    // x: "0",
    // height: "4rem",
    transition: {
      duration: "0.4",
    },
  },
  // currently no exit animations working??
  exit: {
    opacity: "0",
    // x: "-100vh",
    // delay: "4"
  },
};

const Flexx = styled.div`
  display: flex;
  justify-content: space-between ;
  align-items: center;
  width: 88vw ;
`;

const ParentChild = ({ first, second, third, title }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <AnimatePresence>
      <ButtonParent
        key="parent"
        variants={ButtonParentVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <StyledTitle
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          <Flexx>
            {title}
            {open ? (
              <img
                src="/images/Staticlogos/Uparrow.svg"
                style={{ height: 12 }}
              />
            ) : (
              <img
                src="/images/Staticlogos/Downarrow.svg"
                style={{ height: 12 }}
              />
            )}
          </Flexx>
        </StyledTitle>

        {open && (
          <>
            <ChildDiv
              key="child"
              variants={ChildVariants}
              initial="closed"
              animate={open ? "open" : "closed"}
              exit="exit"
            >
              {" "}
              <StyledButton>{first}</StyledButton>
              <StyledButton>{second}</StyledButton>
              <StyledButton>{third}</StyledButton>
            </ChildDiv>
          </>
        )}
      </ButtonParent>
    </AnimatePresence>
  );
};

export default ParentChild;
