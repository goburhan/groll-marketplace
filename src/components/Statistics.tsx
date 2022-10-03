import React from 'react';
import styled from 'styled-components';
import { Vdivider } from './StyledComponents/Divider';
import { Text28, Text14 } from './StyledComponents/Text';

interface props {
    gap?: string;
}
const Flex = styled.div<props>`
    display: flex;
    align-items: end;
    gap: ${(props) => props.gap || '20px'};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        gap: 8px;
    }
`;
const Container = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    text-align: right;
`;
export default function Statistics() {
    return (
        <Flex>
            <Container>
                <Flex gap="4px">
                    <img src="/images/increase.svg" alt="increasing" />

                    <Text28>1.7K</Text28>
                </Flex>

                <Text14
                    color={({ theme }) => theme.editLower}
                    letterSpacing="-0.01em"
                >
                    Follower
                </Text14>
            </Container>
            <Vdivider height="50px" />
            <Container>
                <Text28>221.7K</Text28>
                <Text14
                    color={({ theme }) => theme.editLower}
                    letterSpacing="-0.01em"
                >
                    Boost
                </Text14>
            </Container>
            <Vdivider height="50px" />
            <Container>
                <Text28>37.7K</Text28>
                <Text14
                    color={({ theme }) => theme.editLower}
                    letterSpacing="-0.01em"
                >
                    Items
                </Text14>
            </Container>
            <Vdivider height="50px" />
            <Container>
                <Text28>21.7K</Text28>
                <Text14
                    color={({ theme }) => theme.editLower}
                    letterSpacing="-0.01em"
                >
                    Total Gain
                </Text14>
            </Container>
        </Flex>
    );
}
