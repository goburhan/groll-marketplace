import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 14px 4px 14px;
    color: white;
    justify-content: flex-end;
    text-align: end;
    border: 1px solid #00d2ff;
    border-radius: 20px;
`;

export const Text = styled.text`
    color: ${(props) => props.color || '#fff'};
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
`;

export default function PriceContainer() {
    return (
        <Container>
            <Text color="#00D2FF">2.45 GULF</Text>
            <Text color="#777E90">534$</Text>
        </Container>
    );
}
