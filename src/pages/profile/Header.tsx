import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Text16, Text18, Text40 } from '../../components/StyledComponents/Text';
import Socials from '../../components/Socials';
import {
    SliderButton,
    Transparent,
} from '../../components/StyledComponents/Button';
import Statistics from '../../components/Statistics';
import store from '../../app/store';
import TitleAchviments from './TitleAchviments';
import Rentslot from './Rentslot';
import { fullImageUrl } from '../../app/hooks';

interface prop {
  img?: any;
  direction?: any;
  mb?: any;
  gap?: any;
  content?: any;
  mt?: any;
  mMt?: any;
}
const ProfilPic = styled.div<prop>`
    background-image: url(${({ img }) => img});
    background-size: 100% 100%;
    border: 1px solid white;
    background-position: center;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 0 auto;
        height: 144px;
        width: 144px;
    }
`;

const Flex = styled.div<prop>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    width: 700px;
    place-content: ${(props) => props.content};
    margin-bottom: ${(props) => props.mb};
    gap: ${(props) => props.gap};
    margin-top: ${(props) => props.mt};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        text-align: center;
        margin-top: ${(props) => props.mMt};
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const HeaderWrapper = styled.div<prop>`
    display: flex;
    position: relative;
    padding: 140px 10% 20px 168px;
    align-items: end;
    background-repeat: no-repeat;
    max-height: 580px;
    min-height: 580px;
    isolation: isolate;

    &::after {
        content: '';
        background-image: url(${({ img }) => img});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        inset: 0;
        z-index: -1;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 0px 27px;
        max-height: 1000px;
        &::after {
            background-size: cover;

            -moz-box-shadow: inset 0px 850px 500px -500px rgba(31, 34, 47, 0.8);
            -webkit-box-shadow: inset 0px 850px 500px -500px rgba(31, 34, 47, 0.8);
            -o-box-shadow: inset 0px 850px 500px -500pxrgba (31, 34, 47, 0.8);
            box-shadow: inset 0px 1000px 500px -300px rgba(31, 34, 47, 0.6);
        }
    }
`;
const EditWrapper = styled.div<prop>`
    display: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin: 10px 0px;
        img {
            width: 26px;
        }
    }
`;
const Er = styled.div<prop>`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
        flex-direction: column-reverse;
        gap: 10px 0px;
    }
`;

export default function Header() {
    const userr = store.getState().user;
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        setAvatar(fullImageUrl(userr.avatar));
    }, []);

    return (
        <HeaderWrapper img="/images/Profilebg.svg">
            <Flex mMt="140px">
                <ProfilPic img={'/images/Avatar/Avatar3.png'} />
                <EditWrapper>
                    <button>
                        <img
                            src="/images/Icons/EditAvatar.svg"
                            alt="editavatar"
                        />
                    </button>
                    <button>
                        <img
                            src="/images/Icons/EditProfile.svg"
                            alt="editprofile"
                        />
                    </button>
                </EditWrapper>
                <Flex mb="6px" direction="row">
                    <Text40 color={({ theme }) => theme.white}>
                        {userr.nickname}
                    </Text40>
                    <img
                        src="/images/Verified.svg"
                        style={{ minWidth: 28, marginLeft: 10 }}
                        alt="verified"
                    />
                </Flex>
                <TitleAchviments />
                <Text16 color={({ theme }) => theme.white} fontWeight="400">
                    Dada loving documentarist and multidisciplinary artist
                    living in Dada loving documentarist and multidisciplinary
                    artist living in Dada
                </Text16>
                <Er>
                    <Text18 color={({ theme }) => theme.gray}>
                        Joined: 5th December 2021
                    </Text18>

                    <Flex mt="8px" gap="20px 8px" direction="row">
                        <Transparent
                            display="none"
                            mDisplay="flex"
                            padding="12px 24px"
                        >
                            Follow
                        </Transparent>
                        {/* BAD CODING ALERT CHANGE THIS LATER  */}
                        <Transparent
                            display="none"
                            mDisplay="flex"
                            padding="12px 24px"
                        >
                            3d Gallery
                        </Transparent>
                        <Socials />
                        <Transparent mDisplay="none" padding="12px 24px">
                            Follow
                        </Transparent>

                        <Transparent mDisplay="none" padding="12px 24px">
                            3d Gallery
                        </Transparent>
                    </Flex>
                    <Statistics />
                </Er>

                <Rentslot />
            </Flex>
        </HeaderWrapper>
    );
}
