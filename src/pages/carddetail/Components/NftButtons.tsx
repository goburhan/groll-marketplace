import React from 'react';
import styled from 'styled-components';
import { CircleButton } from '../../../components/StyledComponents/Button';
import { Flex } from '../../../components/StyledComponents/Flex';

export default function NftButtons() {
    const ButtonWrapper = styled.div`
        display: flex;
        background: ${({ theme }) => theme.background};
        border-radius: 64px;
        padding: 12px;
        margin-bottom: 1rem;
    `;

    const MobileButtons = styled(CircleButton)`
        background-size: 50%;
    `;
    return (
        <ButtonWrapper>
            <Flex width="100%" gap="24px">
                <MobileButtons img="/images/Icons/Share.svg" />
                <MobileButtons img="/images/Icons/Like.svg" />
                <MobileButtons img="/images/Icons/More.svg" />
            </Flex>
        </ButtonWrapper>
    );
}
