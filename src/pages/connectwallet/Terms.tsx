import React from "react";
import styled from "styled-components";
import { LowerDetail } from "../../components/StyledComponents/Text";
import Checkbox from "@mui/material/Checkbox";
import {
  GetStartedNow,
  Transparent,
  TransparentCancel,
} from "../../components/StyledComponents/Button";
import AcceptSignModal from "../../components/AcceptSignModal";
import CustomizedCheckbox from "./Checkbox";
import { motion } from "framer-motion";

export default function Terms() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  interface checkboxProps {
    defaultChecked?: boolean;
    color?: any;
    iconStyle?: any;
  }

  const Flex = styled(motion.div)`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: left;
    div {
    }
    img {
      border: 1px solid transparent;
      border-radius: 25px;
    }
  `;

  interface boxprops {
    justify?: any;
    gap?: any;
  }
  const Box = styled.div<boxprops>`
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: ${({ justify }) => justify};
    margin-bottom: ${(props) => props.gap};
  `;
  const Title = styled.text`
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: ${({ theme }) => theme.termTitle};
  `;

  
  const Twelve = styled.text`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    margin-top: ${({ theme }) => theme.mt};
    color: ${({ theme }) => theme.gray};

    span {
      color: ${({ theme }) => theme.linkItems};
    }
  `;

  return (
    <Flex>
      <Title>Terms of service</Title>
      <Twelve style={{ marginTop: "8px", marginBottom: "38px" }}>
        Please take a few minutes to read and understand <br />
        <span>Stacks Terms of Service.</span> To continue, you’ll need to accept
        the terms of services by checking the boxes.
      </Twelve>
      <img src="/images/Termsimg.svg" alt="terms" />

      <div>
        <Box style={{ marginTop: "38px" }}>
          <CustomizedCheckbox />
          <LowerDetail>I am at least 13 year old</LowerDetail>
        </Box>
        <Box style={{ marginBottom: "38px" }}>
          <CustomizedCheckbox />
          <LowerDetail>I agree Stack terms of service</LowerDetail>
        </Box>
      </div>

      <Box>
        <TransparentCancel>Cancel</TransparentCancel>
        <AcceptSignModal />
      </Box>
    </Flex>
  );
}
