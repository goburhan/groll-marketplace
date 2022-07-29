import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "../signup/StepOne";
import styled from "styled-components";
import SignUpPage from "../signup";
import BasicCard from "../signup/BasicCard";
import { KycTitle, Title } from "../../components/StyledComponents/Text";
import { OpenCloseButton } from "../../components/StyledComponents/Button";
import StepTwo from "./StepTwo";
import KycCard from "./KycCard";

export default function StepOneButton() {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [open, toggleOpen] = useState(false);

  const Header = styled(motion.header)``;
  const Section = styled(motion.section)`
    overflow: hidden;
  `;
  const SignupWrapper = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 2.5% 0px 0px 0.5%;
    /* opacity: 0; */
  `;

  const StyledTitle = styled(motion.button)`
    height: 3rem;
    width: 100%;
    text-align: left;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.cardTitle};
    font-size: 18px;
  `;
  const Progress = styled(motion.text)`
    color: white;
    background: rgba(0, 172, 255, 0.25);
    padding: 0px 10px 0px 10px;
    font-weight: 700;
    margin-top: 1rem;
    padding: 2px 26px 2px 16px;
    font-size: 18px;
  `;
  const Box = styled(motion.div)<prop>`
    display: flex;
    margin-bottom: ${(props) => props.mb};
    flex-direction: ${(props) => props.direction || "column"};
    gap: ${(props) => props.gap};
    align-items: flex-start;
    img {
      margin-top: 1rem;
      max-width: 90px;
    }
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

  const ButtonWrapper = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const ChildVariants = {
    closed: {
      opacity: 0,
      height: "1rem",
      transition: {
        duration: 0.7,
      },
    },

    open: {
      //initial
      height: "160vh",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      height: "1rem",
      transition: {
        duration: 0.7,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      y: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: [100, 0],
      transition: {
        duration: "0.3",
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <ButtonWrapper
          key="parent"
          initial="closed"
          variants={ButtonParentVariants}
          animate={open ? "open" : "closed"}
          onClick={() => toggleOpen(!open)}
        >
          <StyledTitle style={{ cursor: "pointer" }}>
            <Box direction="row">
              <Box>
                <Box gap="15px" mb="15px" direction="row">
                  <Title style={{ color: "#00ACFF" }}>Step 3</Title>
                  <Progress>25% progress</Progress>
                </Box>
                <Title>Apply for The Blue Tick</Title>
              </Box>

              <img
                src="/images/Staticlogos/BlueTick.svg"
                style={{ borderRadius: "0px", marginLeft: "3%" }}
                alt="basic"
              />
            </Box>
          </StyledTitle>

          <OpenCloseButton
            onClick={() => {
              toggleOpen(!open);
            }}
          >
            {open ? (
              <img src="/images/Staticlogos/Uparrow.svg" />
            ) : (
              <img src="/images/Staticlogos/Downarrow.svg" />
            )}
          </OpenCloseButton>
        </ButtonWrapper>

        {open && (
          <Section
            key="child"
            initial="closed"
            animate="open"
            exit="exit"
            variants={ChildVariants}
          >
            <SignupWrapper>
              <StepTwo />
              <KycCard />
            </SignupWrapper>
          </Section>
        )}
      </AnimatePresence>
    </>
  );
}
