import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "../signup/StepOne";
import styled from "styled-components";
import SignUpPage from "../signup";
import BasicCard from "../signup/BasicCard";
import { KycTitle, TabFont } from "../../components/StyledComponents/Text";
import { OpenCloseButton } from "../../components/StyledComponents/Button";
import { useSelector } from "react-redux";
import { userSelect } from "../../actions/wallet/walletSlice";
import Link from "next/link";

export default function StepOneButton() {
  function ProgressBar(one: any) {
    const [gokhan, setGokhan] = useState(one);

    const Mainbar = styled.div`
      background: rgba(0, 172, 255, 0.25);
      width: 10px;
      height: auto;
      margin-right: 40px;
    `;
    useEffect(() => {
      setGokhan(one);
    }, [one]);
    let burhan = Object.values(gokhan);

    const ChildBard = styled.button`
      background: #00acff;
      ${burhan[0] === false && "display: none;"}
      width: 10px;
      border: none;
      height: ${burhan[0] === true ? "100%" : "0px"};
    `;

  
    return (
      <Mainbar>
        <ChildBard></ChildBard>
      </Mainbar>
    );
  }
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [open, toggleOpen] = useState(false);
  const [disable, setDisable] = useState(false);
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
    opacity: ${(props) => (user.nickname !== "" ? "0.1" : "1")};
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
  const EditButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-right: 22px;
    justify-conent: center;
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
    opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
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
      height: "160vh",
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
      height: "190px",
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
  const user = useSelector(userSelect);

  useEffect(() => {
    //user.nickname !== "" mean is user doesnt finished first step of auth
    if (user.nickname !== "") {
      toggleOpen(false);
      setDisable(true);
    }
  });
  console.log(user);

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
            disabled={disable}
          >
            <StyledTitle style={{ cursor: "pointer" }}>
              <Box direction="row">
                <Box>
                  <Box gap="15px" mb="15px" direction="row">
                    <KycTitle style={{ color: "#00ACFF" }}>Step 1</KycTitle>
                    <Progress>50% progress</Progress>
                  </Box>
                  <KycTitle>Basic information</KycTitle>
                </Box>

                <img
                  src="/images/Basic.svg"
                  style={{ borderRadius: "0px", marginLeft: "2%" }}
                  alt="basic"
                />
              </Box>
            </StyledTitle>

            <OpenCloseButton
              onClick={() => {
                toggleOpen(!open);
              }}
            >
              {disable ? (
                <Link href="/editprofile">
                  <EditButton>
                    <img src="/images/Icons/Editbutton.svg" />
                    <TabFont>Edit</TabFont>
                  </EditButton>
                </Link>
              ) : open ? (
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
