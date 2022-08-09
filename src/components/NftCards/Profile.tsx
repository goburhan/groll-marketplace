import React from "react";
import styled from "styled-components";
import { Text16 } from "../StyledComponents/Text";

const Flex = styled.div`
  display: flex;
  padding: 14px 0px;
  align-items: center;

  img {
    border: 1px solid white;
    border-radius: 100% !important;
    min-height: 20px;
    margin-left: 5px;
    min-width: 20px;
  }
`;

export default function Profile() {
  return (
    <Flex>
      <Text16  color={({ theme }) => theme.cardTitle} fontWeight="600">Not Your Bro!</Text16>
      <img
        src="/images/Verified.svg"
        style={{ border: "none" }}
        alt="profile"
      />
    </Flex>
  );
}
