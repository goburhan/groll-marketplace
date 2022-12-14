import React from 'react';
import styled from 'styled-components';
import { Text40, Text14 } from '../../components/StyledComponents/Text';
import { Flex } from '../../components/StyledComponents/Flex';
import SelectButton from './Components/SelectButton';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 0px 0px;
        max-width: 83vw;
    }
`;

const PriceBox = styled.div`
    display: flex;
    border: 1px solid ${(props) => props.color};
    border-radius: 16px;
    padding: 4px 16px;
    font-weight: 700;
    margin-right: 1rem;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-right: 6px;
        padding: 4px 20px;
        white-space: nowrap;
    }
`;

export default function InfoSection() {
    return (
        <Box>
            <Flex alignItems="center" margin="0px 0px 18px 0px">
                <Text40
                    color={({ theme }) => theme.titles}
                    letterSpacing="-0.03em"
                >
                    Not Your Bro # 6548
                </Text40>
                <img
                    src="/images/Verified.svg"
                    style={{ minWidth: 34, marginLeft: 14 }}
                    alt="verified"
                />
            </Flex>
            <Flex
                gap="8px"
                alignItems="center"
                margin="0px 0px 14px 0px"
                wrap="no-wrap"
            >
                <PriceBox color="#2eb689">
                    <img src="/images/Icons/Logo.svg" alt='gulf' />
                    <Text14 fontWeight="700" color="#2EB689">
                        2.5 Gulf
                    </Text14>
                </PriceBox>
                <PriceBox color="#484D57">
                    <Text14 fontWeight="700" color={({ theme }) => theme.gray}>
                        $4,429.87
                    </Text14>
                </PriceBox>
                <Text14 fontWeight="700" color="#00ACFF">
                    About this collection
                </Text14>
            </Flex>
            <Text14 color={({ theme }) => theme.lowerdetail}>
                Not Your Bro is a movement celebrating and empowering Womxn,
                LGBTQIA+ people & their allies.
            </Text14>
            <SelectButton />
        </Box>
    );
}
