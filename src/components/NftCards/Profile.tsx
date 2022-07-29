import React from "react";
import styled from "styled-components";
import { CardTitle } from "../StyledComponents/Text";

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
      <CardTitle>Not Your Bro!</CardTitle>
      <img
        src="/images/Verified.svg"
        style={{ border: "none" }}
        alt="profile"
      />
    </Flex>
  );
}
