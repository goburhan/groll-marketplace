import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Flex } from "../../components/StyledComponents/Flex";
import { Nft } from "../../components/StyledComponents/Nft";
import { Text14 } from "../../components/StyledComponents/Text";
import CustomizedCheckbox from "../connectwallet/Checkbox";

const NftBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(180deg, #22242f 4.65%, #1a1d28 86.94%);
  border: 1px solid #484d57;
  border-radius: 12px;
  padding: 14px;
  min-height: 240px;
`;

export default function MysteryContent({ nft, number }) {
  const [isChecked, setIschecked] = useState(false);
  const [count, setCount] = useState(0);

    console.log(number)
  useEffect(() => {
    // setCount(count + 1);
    // console.log(count);
    // if (isChecked === false) {
    //   setCount(count + 1);
    // console.log(count + "false");
    // } else {
    //   setCount(count - 1);
    // console.log(count);
    // }
  }, [isChecked]);
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
      setCount(count + 1);
      console.log(count);
    } else {
      setCount(count - 1);
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIschecked((current) => !current);
  };

  return (
    <NftBoxWrapper>
      <Nft img={nft} />
      <Flex onChange={handleChange}>
        <CustomizedCheckbox />
      </Flex>
    </NftBoxWrapper>
  );
}
