import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { userSelect } from "../../actions/wallet/walletSlice";
import MysteryContent from "./MysteryContent";
import { Nft } from "../../components/StyledComponents/Nft";
import { Flex } from "../../components/StyledComponents/Flex";
import CustomizedCheckbox from "../connectwallet/Checkbox";

export default function MyNftButton() {
  const [open, toggleOpen] = useState(true);

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
        min-height:20px;
    }
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
      height: "60vh",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      height: "0px",
      transition: {
        duration: 0.5,
      },
    },
  };

  const ButtonParentVariants = {
    closed: {
      opacity: 1,
      height:"30px",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      height:"40px",
      transition: {
        duration: 0.5,
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

  const [isChecked, setIschecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
      setCount(count + 1);
      console.log(count);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIschecked((current) => !current);
  };
  const [checkedState, setCheckedState] = useState(
    new Array(Mysterybox.length).fill(false)
);
const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );

  setCheckedState(updatedCheckedState);
  const [total, setTotal] = useState(0);
  const totalPrice = updatedCheckedState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
        return sum + [index];
      }
      return sum;
    },
    0
  );

  setTotal(totalPrice);
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
