import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "../signup/StepOne";
import styled from "styled-components";
import BasicCard from "../signup/BasicCard";
import { Text40, Text14 } from "../../components/StyledComponents/Text";
import { OpenCloseButton } from "../../components/StyledComponents/Button";
import { useSelector } from "react-redux";
import { userSelect } from "../../actions/wallet/walletSlice";
import Link from "next/link";
import { StyledSteps } from ".";
import { WindowSize } from "../../hooks/useWindowsize";

export default function StepOneButton() {
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
  const [open, toggleOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const Section = styled(motion.section)`
    overflow: hidden;
  `;
  const SignupWrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 238px;
    /* opacity: 0; */
    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: 1fr;
    }
  `;

  const StyledTitle = styled(motion.button)`
    height: max-content;
    width: 100%;
    text-align: left;
    color: ${({ theme }) => theme.cardTitle};
    opacity: ${(props) => (user.nickname !== "" ? "0.1" : "1")};
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 120%;
    }
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

  const EditButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-conent: center;
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

  const ButtonWrapper = styled(motion.button)<prop>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
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
    white-space: nowrap;

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
  const ChildVariants = {
    closed: {
      opacity: 0,
      height: "0px",
      y: "-40px",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "max-content",
      opacity: 1,
      y: "40px",
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

  const MChildVariants = {
    closed: {
      opacity: 0,
      height: "0px",
      y: "-40px",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      height: "270vh",
      opacity: 1,
      y: "40px",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: [-40, -190],
      height: "1vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  const MButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "max-content",
      y: 0,
      transition: {
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

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height: "190px",
      y: 0,
      transition: {
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

  const user = useSelector(userSelect);

  useEffect(() => {
    //user.nickname !== "" mean is user doesnt finished first step of register
    if (user.nickname !== "") {
      // toggleOpen(false);
      // setDisable(true);
    }
  });
  console.log(user);

  const isMobile = WindowSize();

  return (
    <div style={{ display: "flex", width: "100%", margin: "40px 0px 0px 0px" }}>
      <ProgressBar one={open} />
      <div style={{ width: "100%" }}>
        <AnimatePresence>
          <ButtonWrapper
            key="parent"
            initial="closed"
            variants={isMobile ? MButtonParentVariants : ButtonParentVariants}
            animate={open ? "open" : "closed"}
            onClick={() => toggleOpen(!open)}
            disabled={disable}
          >
            <StyledTitle style={{ cursor: "pointer" }}>
              <Box direction="row">
                <Box>
                  <Box
                    gap="15px"
                    mGap="5px"
                    mb="15px"
                    mMb="4px"
                    direction="row"
                  >
                    <StyledSteps color="#00ACFF">Step 1</StyledSteps>
                    <Progress>50% progress</Progress>

                    <StyledImg src="/images/Basic.svg" alt="basic" />
                  </Box>
                  <StyledSteps color={({ theme }) => theme.titles}>
                    Basic information
                  </StyledSteps>
                </Box>

                <img src="/images/Basic.svg" alt="basic" />
              </Box>
            </StyledTitle>

            <OpenCloseButton
              margin="20px 0px 0px 0px"
              onClick={() => {
                toggleOpen(!open);
              }}
            >
              {disable ? (
                <Link href="/editprofile">
                  <EditButton>
                    <img src="/images/Icons/Editbutton.svg" />
                    <Text14 color={({ theme }) => theme.gray} fontWeight="600">
                      Edit
                    </Text14>
                  </EditButton>
                </Link>
              ) : open ? (
                <img
                  style={{ height: 20 }}
                  src="/images/Staticlogos/Uparrow.svg"
                />
              ) : (
                <img
                  style={{ height: 20 }}
                  src="/images/Staticlogos/Downarrow.svg"
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
                <StepOne />
                <BasicCard />
              </SignupWrapper>
            </Section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
