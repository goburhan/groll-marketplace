import React from 'react';
import Slider from './Slider';
import TopCollection from './TopCollection';
import AllItems from './AllItems';
import HotCollections from './HotCollections';
import UpComing from './Upcoming';
import TopArtists from './TopArtist/TopArtists';
import TopInfluencer from './TopInfluencers';

export function Home() {
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
export default Home;
