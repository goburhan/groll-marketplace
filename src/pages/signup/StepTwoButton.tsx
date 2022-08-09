import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "../signup/StepOne";
import styled from "styled-components";
import SignUpPage from "../signup";
import BasicCard from "../signup/BasicCard";
import {  Text40 } from "../../components/StyledComponents/Text";
import { OpenCloseButton } from "../../components/StyledComponents/Button";
import StepTwo from "./StepTwo";
import KycCard from "./KycCard";

function ProgressBar(one: any) {
  const [open, setOpen] = useState(one);

  const Mainbar = styled.div`
    background: rgba(0, 172, 255, 0.25);
    width: 10px;
    height: auto;
    margin-right: 40px;
  `;
  useEffect(() => {
    setOpen(one);
  }, [one]);
  let isOpen = Object.values(open);

  const ChildBar = styled.button`
    background: #00acff;
    width: 10px;
    ${isOpen[0] === false && "display: none;"}
    border: none;
    height: ${isOpen[0] === true ? "100%" : "0px"};
  `;

  return (
    <Mainbar>
      <ChildBar></ChildBar>
    </Mainbar>
  );
}

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
    width: 92%;
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
    letter-spacing: -0.02em;
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
      height: "0rem",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "100vh",
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: [-130, -190],
      height: "1vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "190px  ",
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
    open: {
      height: ["140px", "60px"],
      opacity: 1,
      y: [20, 60, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ProgressBar one={open} />
      <div style={{ width: "100%" }}>
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
                    <Text40 color="#00ACFF">Step 2</Text40>
                    <Progress>25% progress</Progress>
                  </Box>
                  <Text40 color={({ theme }) => theme.titles}>Apply for KYC</Text40>
                </Box>

                <img
                  src="/images/Staticlogos/Kyclogo.svg"
                  style={{ marginLeft: "6.2%" }}
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
      </div>
    </div>
  );
}
