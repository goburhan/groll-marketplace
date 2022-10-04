import React from 'react';
import Slider from './Sections/Slider';
import TopCollection from './Sections/TopCollection';
import AllItems from './Sections/AllItems';
import HotCollections from './Sections/HotCollections';
import Upcoming from './Sections/Upcoming';
import TopArtists from './Sections/TopArtist/TopArtists';
import TopInfluencer from './Sections/TopInfluencers';
import Launchpad from './Sections/Launchpad';

export function Home() {
    return (
        <>
            <Slider />
            <TopCollection />
            <AllItems />
            {/* <HotCollections /> */}
            <Upcoming />
            <Launchpad/>
            <TopInfluencer />
            <TopArtists />
            {/* <TopCollectors /> */}
        </>
    );
}
export default Home;
