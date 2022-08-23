import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AvatarSettings from "./AvatarSettings";
import { selectConnector } from "../../actions/wallet/walletSlice";
import store from "../../app/store";
import { getDefaultConnector } from "../../app/hooks";
import EditSection from "./EditSection";
import Header from "./Header";

const PageWrapper = styled.div`
  display: grid;
  gap: 80px;
  margin: 60px 150px 0px 150px;
  grid-template-columns: 2fr 2fr;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    margin: 0px;
  }
`;
const Wrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px 32px;
  }
`;

export default function Editprofile() {
  return (
    <Wrapper>
      <Header />

      <PageWrapper>
        <EditSection />
        <AvatarSettings />
      </PageWrapper>
    </Wrapper>
  );
}
