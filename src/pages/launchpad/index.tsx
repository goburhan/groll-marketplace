import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress';
import React from 'react';
import styled from 'styled-components';
import Socials from '../../components/Socials';
import {
    AddWatchList,
    BackButton,
} from '../../components/StyledComponents/Button';
import { Flex } from '../../components/StyledComponents/Flex';
import {
    Text14,
    Text16,
    Text32,
    Text48,
} from '../../components/StyledComponents/Text';
import RightContainer from './RightContainer';

const PageWrapper = styled.div`
    display: flex;
    padding: 72px 160px 120px 160px;
    flex-direction: column;
    gap: 72px;
    img {
        max-height: 400px;
    }
`;
const PhaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 230px;
`;
const Contract = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 16px;
    background: linear-gradient(180deg, #22242f 4.65%, #1a1d28 86.94%);
    border: 1px solid ${({ theme }) => theme.blackHover};
    border-radius: 90px;
    font-size: 12px;
    gap: 24px;
    img {
        width: 20px;
        cursor: pointer;
    }
    span {
        cursor: pointer;
        color: ${({ theme }) => theme.blue};
        font-size: 14px;
    }
`;

function Contracted() {
    return (
        <Contract>
            <Text14 color="#fff">Contract</Text14>
            <Flex gap="4px">
                <img src="/images/Icons/Copy.svg" />
                <span>0xea41239180923</span>
            </Flex>
        </Contract>
    );
}
export default function Launchpad() {
    return (
        <PageWrapper>
            <BackButton />
            <Grid>
                <Flex gap="132px" direction="column">
                    <div>
                        <Flex gap="12px" direction="column">
                            <Text48>
                                Modern <br /> Club: Meta Pass
                            </Text48>
                            <Text14 color="#fff">
                                Dada loving documentarist and multidisciplinary
                                artist livingin Oslo, Norway. I use original
                                photography, audio, video and text to alter and
                                derail established cultural narratives.
                                Goldsmiths made me do it.
                            </Text14>
                        </Flex>

                        <Flex
                            margin="24px 0px 0px 0px"
                            gap="14px"
                            direction="column"
                        >
                            <Text32 fontWeight="500">
                                Additional Information
                            </Text32>
                            <Flex gap="8px">
                                <AddWatchList />
                                <Contracted />
                                <Socials />
                            </Flex>
                        </Flex>
                    </div>

                    <Flex direction="column">
                        <Flex>
                            <img
                                src="/images/Icons/Roadmap.svg"
                                alt="roadmap"
                            />
                            <Text48>Road map</Text48>
                        </Flex>
                        <PhaseContainer>
                            <Text32>Phase I: Launching the Collection</Text32>
                            <Text14 color={({ theme }) => theme.titles}>
                                {' '}
                                Launch Discord and Website Reward the growing
                                community with giveaways including ETH, NFTs and
                                special roles within the community with
                                whitelisting benefits . Launch the collection of
                                8888 TOONZ into the Metaverse Mid February
                            </Text14>
                        </PhaseContainer>
                        <PhaseContainer>
                            <Text32>Phase II: Community & Connection</Text32>
                            <Text14 color={({ theme }) => theme.titles}>
                                enable our DAO system that will allow holders of
                                the project to have voting power on all major
                                decisions coming to the project via Snapshot.
                                Current HODLERS will be rewarded with exclusive
                                airdrops including additional TOONZ and ETH .
                                Minting rewards will be deployed Official merch
                                store will be released to all current HODLERS
                                with access to high quality merch related to the
                                DEGEN TOONZ brand.
                            </Text14>
                        </PhaseContainer>
                        <PhaseContainer>
                            <Text32>Phase III: Public Service</Text32>
                            <Text14 color={({ theme }) => theme.titles}>
                                activate and fund the Community and Charity
                                wallet. (DAO system will be used to decide upon
                                which charities will be considered ) FIRST IRL
                                MEET UP Merch store is released to the Public
                                (limited designs and quantity)
                            </Text14>
                        </PhaseContainer>
                        <PhaseContainer>
                            <Text32>PHASE IV : TOON TOWN</Text32>
                            <Text14 color={({ theme }) => theme.titles}>
                                The Metaverse action begins! DAO voting starts
                                construction of TOON TOWN in the metaverse.
                                (Buying land on dao desired platform) HODLERS
                                WILL BEGIN TO RECEIVE $TOON TOKEN FOR AMOUNT OF
                                HODLING TIME airdrop to all HODLERS (Tier based
                                & Metaverse ready) Metaverse is launched and
                                Constitution of TOON TOWN curated in a METAVERSE
                                meet up.
                            </Text14>
                        </PhaseContainer>
                    </Flex>
                </Flex>
                <RightContainer />
            </Grid>
        </PageWrapper>
    );
}
