import React from 'react';
import styled from 'styled-components';
import VisualArt from './VisualArt';
import { Text40 } from '../../../components/StyledComponents/Text';
import AudioArt from './AudioArt';

const TopArtistContainer = styled.div`
    display: flex;
    position: relative;
    text-align: center;
    flex-direction: column;
    margin: 100px 162px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 38px 0px 0px 0px;
    }
`;
const PrevArrow = styled.div`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        position: absolute;
        margin-left: 32px;
    }
`;
export default function TopArtists() {
    return (
        <TopArtistContainer>
            <PrevArrow>
                <Text40 color={({ theme }) => theme.titles}>
                    {' '}
                    Top artists
                </Text40>
            </PrevArrow>
            <VisualArt />
            <AudioArt />
        </TopArtistContainer>
    );
}
