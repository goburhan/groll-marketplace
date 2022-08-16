import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Transparent } from "../../components/StyledComponents/Button";
import { Text14 } from "../../components/StyledComponents/Text";

export default function LeftBoxs({ changeSelected }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    changeSelected(selected);
  }, [selected]);

  const UploadCard = styled.button`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 16px;
    gap: 12px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.uploadNftBorder};

    border-radius: 16px;
    :hover {
      border: 1px solid ${({ theme }) => theme.blue};
      button {
        background: ${({ theme }) => theme.blue};
      }
    }
  `;
  return (
    <>
      <UploadCard
        onClick={() => {
          setSelected("lootbox");
        }}
        style={selected === "lootbox" ? { border: "1px solid #00ACFF" } : {}}
      >
        <img src={`/images/Createmystery.svg`} />
        <Text14 color={({ theme }) => theme.gray}>
          A wholesome farm owner in Montana. Upcoming gallery solo show in
          Germany
        </Text14>
        <Transparent
          style={selected === "lootbox" ? { background: "#00ACFF " } : {}}
          padding="12px 24px"
        >
          Loot Box
        </Transparent>
      </UploadCard>

      <UploadCard
        onClick={() => {
          setSelected("mysterybox");
        }}
        style={selected === "mysterybox" ? { border: "1px solid #00ACFF" } : {}}
      >
        <img src={`/images/Createmystery.svg`} />
        <Text14 color={({ theme }) => theme.gray}>
          A wholesome farm owner in Montana. Upcoming gallery solo show in
          Germany
        </Text14>
        <Transparent
          style={selected === "mysterybox" ? { background: "#00ACFF " } : {}}
          padding="12px 24px"
        >
          Mystery Box
        </Transparent>
      </UploadCard>
    </>
  );
}
