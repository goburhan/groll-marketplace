import React from 'react';
import styled from 'styled-components';
import BuySection from '../carddetail/Components/BuySection';
import InfoSection from '../carddetail/InfoSection';

const Flex = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    img {
        max-width: 550px;
    }
    align-items: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        img {
            max-width: 100%;
        }
    }
`;
const Card = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 70%;
    border: 1px solid transparent;
    border-radius: 25px;
    min-height: 450px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        background-size: 100%;
        min-height: 310px;
        width: 90%;
    }
`;
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 150px;
    padding: 8rem;
    gap: 30px;
    img {
        max-width: 550px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 0rem;
        gap: 30px;
        justify-content: center;
    }
`;
export default function CardDetails() {
    return (
        <Box>
            <Flex>
                <Card />
                <BuySection />
            </Flex>
            <InfoSection />
        </Box>
    );
}
