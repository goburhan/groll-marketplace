import { Web3ReactHooks } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarSettings from "./AvatarSettings";
import EditSection from "./EditSection";

const PageWrapper = styled.div`
  display: grid;
  margin: 60px 150px 0px 150px;
  grid-template-columns: 2fr 2fr;
`;

export default function Editprofile() {
  return (
    <PageWrapper>
      <EditSection />
      <AvatarSettings />
    </PageWrapper>
  );
}
