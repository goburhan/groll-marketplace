import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../components/Checkbox';
import { Gprice } from '../../components/NftCards/Cards/BigItemCard';
import PriceContainer from '../../components/NftCards/PriceContainer';
import { Divider } from '../../components/StyledComponents/Divider';
import { Text14, Text16 } from '../../components/StyledComponents/Text';
import CustomizedCheckbox from '../../components/Checkbox';

const NftContainer = styled.div`
    display: grid;
    grid-template-rows: 1.8fr 1fr;
    background: ${({ theme }) => theme.card};
    border: 1px solid transparent;
    border-radius: 18px;
    margin-right: 20px;
    margin-top: 16vh;
    min-height: max-content;
    max-width: 300px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        img {
            width: 100%;
        }
    }
`;
interface FlexProps {
    padding?: string;
    margin?: string;
}
interface Background {
    img?: any;
}

const Nft = styled.div<Background>`
    background-image: url(${({ img }) => img});
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 16px;
    margin: 16px 16px 0px 16px;
`;

const Flex = styled.div<FlexProps>`
    display: flex;
    padding: ${(props) => props.padding || '10px 16px'};
    margin: ${(props) => props.margin};
    justify-content: space-between;
    img {
        max-width: 20px;
        border-radius: 25px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        position: relative;
    }
`;

const Container = styled.div`
    display: flex;
    white-space: normal;
    white-space: nowrap;
    justify-content: space-between;
    padding: 12px 40px 18px 20px;
    img {
        max-width: 20px;
    }
    text {
        display: flex;
        align-items: center;
    }
`;
const Box = styled.div`
    display: flex;
    margin: auto 0;
    vertical-align: center;
    img {
        margin-right: 2px;
        max-width: 18px;
    }
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: 15px 15px 15px;
    img {
        margin-right: 2px;
        border: 1px solid white;
    }
`;

const nft = [
    { name: '/images/Nft/A1.svg' },
    { name: '/images/Nft/A2.svg' },
    { name: '/images/Nft/A3.svg' },
    { name: '/images/Nft/A4.svg' },
    { name: '/images/Nft/A5.svg' },
    { name: '/images/Nft/A6.svg' },
    { name: '/images/Nft/A7.svg' },
    { name: '/images/Nft/A8.svg' },
];

export default function Deneme() {
    return <div>gokhan</div>;
}
