import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components/StyledComponents/Flex';
import { Nft } from '../../../components/StyledComponents/Nft';
import { Text14 } from '../../../components/StyledComponents/Text';
import CustomizedCheckbox from '../../../components/Checkbox';

const NftBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #22242f 4.65%, #1a1d28 86.94%);
    border: 1px solid #484d57;
    border-radius: 12px;
    padding: 14px;
    min-height: 370px;
`;

export default function NftBox({ nft }) {
    return (
        <NftBoxWrapper>
            <Flex margin="0px 0px 12px 0px" justifyContent="flex-end">
                <CustomizedCheckbox />
            </Flex>
            <Nft img={nft} />
            <Flex direction="column" gap="16px" margin="20px 0px 0px 0px">
                <Flex gap="10px" alignItems="center">
                    <CustomizedCheckbox />
                    <Text14 color={({ theme }) => theme.rare}>Rare</Text14>
                </Flex>
                <Flex gap="10px" alignItems="center">
                    <CustomizedCheckbox />
                    <Text14 color={({ theme }) => theme.epic}>Epic</Text14>
                </Flex>
                <Flex gap="10px" alignItems="center">
                    <CustomizedCheckbox />
                    <Text14 color={({ theme }) => theme.legendary}>
                        Legendary
                    </Text14>
                </Flex>
            </Flex>
        </NftBoxWrapper>
    );
}
