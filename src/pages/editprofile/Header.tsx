import React from "react";
import styled from "styled-components";
import { BackButton } from "../../components/StyledComponents/Button";
import { Flex } from "../../components/StyledComponents/Flex";
import { Text14, Text48 } from "../../components/StyledComponents/Text";

const Wrapper = styled.div`
  margin: 154px 150px 0px 150px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 122px 0px 0px 0px;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <BackButton margin="32px 0px 68px 0px" />

      <Flex direction="column">
        <Text48>Edit Your Profile</Text48>
        <Text14 color={({ theme }) => theme.editLower}>
          You can set preferred display name, create{" "}
          <span> your profile URL </span> and manage other personal settings.
        </Text14>
      </Flex>
    </Wrapper>
  );
}
