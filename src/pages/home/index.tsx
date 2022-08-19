import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./Slider";
import TopCollection from "./TopCollection";
import AllItems from "./AllItems";
import HotCollections from "./HotCollections";
import UpComing from "./Upcoming";
import TopArtists from "./TopArtist/TopArtists";
import TopCollectors from "./TopCollectors";
import TopInfluencer from "./TopInfluencers";
import styled from "styled-components";
export default function () {

const HomeWrapper  = styled.div `
 
`



  return (
    <>
      <Slider />
      <TopCollection />
      <AllItems />
      <HotCollections />
      <UpComing />
      <TopInfluencer />
      <TopArtists />
      {/* <TopCollectors /> */}
    </>
  );
}
