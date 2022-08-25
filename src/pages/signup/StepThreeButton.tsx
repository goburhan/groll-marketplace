import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "../signup/StepOne";
import styled from "styled-components";
import SignUpPage, { StyledSteps } from "../signup";
import BasicCard from "../signup/BasicCard";
import { Text40 } from "../../components/StyledComponents/Text";
import { OpenCloseButton } from "../../components/StyledComponents/Button";
import StepTwo from "./StepTwo";
import KycCard from "./KycCard";
import StepThree from "./StepThree";
import BlueTickCard from "./BlueTickCard";
import { WindowSize } from "../../hooks/useWindowsize";

function ProgressBar(one: any) {
  const [open, setOpen] = useState(one);

  const Mainbar = styled.div`
    background: rgba(0, 172, 255, 0.25);
    width: 10px;
    height: auto;
    margin-right: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-right: 10px;
    }
  `;
  useEffect(() => {
    setOpen(one);
  }, [one]);
  let isOpen = Object.values(open);

  const ChildBar = styled.button`
    background: #00acff;
    ${isOpen[0] === false && "display: none;"}
    width: 10px;
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
  const [open, toggleOpen] = useState(false);
  const isMobile = WindowSize();
  const Header = styled(motion.header)``;
  const Section = styled(motion.section)`
    overflow: hidden;
  `;
  const SignupWrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 236px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: 1fr;
    }
  `;

  const StyledTitle = styled(motion.button)`
    height: max-content;
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 2px;
      font-size: 14px;
      font-weight: 400;
    }
  `;
  const StyledImg = styled.img`
    max-width: 0px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 44px;
    }
  `;
  const Box = styled(motion.div)<prop>`
    display: flex;
    margin-bottom: ${(props) => props.mb};
    flex-direction: ${(props) => props.direction || "column"};
    gap: ${(props) => props.gap};
    align-items: flex-start;
    img {
      margin-left: 33px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      gap: ${(props) => props.mGap};

      img {
        margin-left: 0px;
      }

      margin-bottom: ${(props) => props.mMb};
      img:not(${StyledImg}) {
        display: none;
      }
      text {
        align-self: flex-start;
      }
    }
  `;
  interface prop {
    width?: string;
    direction?: string;
    size?: string;
    mr?: string;
    innerRef?: any;
    mMb?: string;
    mGap?: string;
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
      y: 30,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: [-160, -250],
      height: "1vh",
      transition: {
        duration: 0.5,
      },
    },
  };
  const MChildVariants = {
    closed: {
      opacity: 0,
      height: "0rem",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "80vh",
      opacity: 1,
      y: 150,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: [-20, -70],
      height: "1vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "238px",
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
    open: {
      height: ["140px", "60px"],
      opacity: 1,
      y: [20, 44, 0],
      transition: {
        duration: 0.4,
      },
    },
  };
  const MButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "max-content",
      y: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
    open: {
      height: ["140px", "0px"],
      opacity: 1,
      y: [20, 50, 0],
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ProgressBar one={open}></ProgressBar>
      <div style={{ width: "100%" }}>
        <AnimatePresence>
          <ButtonWrapper
            key="parent"
            initial="closed"
            variants={isMobile ? MButtonParentVariants : ButtonParentVariants}
            animate={open ? "open" : "closed"}
          >
            <StyledTitle
              style={{ cursor: "pointer" }}
              onClick={() => toggleOpen(!open)}
            >
              <Box direction="row">
                <Box>
                  <Box
                    mGap="5px"
                    gap="15px"
                    mb="15px"
                    mMb="0px"
                    direction="row"
                  >
                    <StyledSteps color="#00ACFF">Step 3</StyledSteps>
                    <Progress>25% progress</Progress>
                    <StyledImg
                      src="/images/Staticlogos/BlueTick.svg"
                      alt="basic"
                    />
                  </Box>
                  <StyledSteps
                    lineHeight="1.5"
                    color={({ theme }) => theme.titles}
                  >
                    Apply for The Blue Tick
                  </StyledSteps>
                </Box>

                <img
                  src="/images/Staticlogos/BlueTick.svg"
                  style={{ borderRadius: "0px", marginLeft: "3%" }}
                  alt="basic"
                />
              </Box>
            </StyledTitle>

            <OpenCloseButton
              margin="20px 0px 0px 0px"
              onClick={() => {
                toggleOpen(!open);
              }}
            >
              {open ? (
                <img
                  src="/images/Staticlogos/Uparrow.svg"
                  style={{ height: 20 }}
                />
              ) : (
                <img
                  src="/images/Staticlogos/Downarrow.svg"
                  style={{ height: 20 }}
                />
              )}
            </OpenCloseButton>
          </ButtonWrapper>

          {open && (
            <Section
              key="child"
              initial="closed"
              animate="open"
              exit="exit"
              variants={isMobile ? MChildVariants : ChildVariants}
            >
              <SignupWrapper>
                <StepThree />
                <BlueTickCard />
              </SignupWrapper>
            </Section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
