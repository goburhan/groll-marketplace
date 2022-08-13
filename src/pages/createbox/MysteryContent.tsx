import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
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
export default function MysteryContent({ setProgress }) {
  const [checkedState, setCheckedState] = useState(
    new Array(Mysterybox.length).fill(false)
  );
  const [value, setValue] = useState(0);

  function CheckTrue(index) {
    return index === true;
  }
  let Checked;

  useEffect(() => {
    Checked = checkedState.filter(CheckTrue);
    setProgress(Checked.length);
  }, [checkedState]);



  
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    padding: 8,
    width: "20%",
    height: 5,
    borderRadius: 50,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgba(0, 172, 255,0.2)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#00ACFF",
      opacity: "1",
    },
  }));
  return (
    <>
      {Mysterybox.map((nfts, index) => (
        <NftBoxWrapper>
          <Nft img={nfts.name} />
          <Flex>
            <input
              type="checkbox"
              id={`custom-checkbox-${index}`}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
          </Flex>
        </NftBoxWrapper>
      ))}
    </>
  );
}
