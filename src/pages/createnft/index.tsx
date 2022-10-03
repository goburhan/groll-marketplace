import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
    BackButton,
    Transparent,
} from '../../components/StyledComponents/Button';
import { Flex } from '../../components/StyledComponents/Flex';
import { Text40, Text14 } from '../../components/StyledComponents/Text';

interface img {
    img?: any;
}
interface prop {
    margin?: string;
    bold?: string;
    padding?: string;
    mb?: string;
}
const Wrapper = styled.div`
    display: flex;
    place-items: center;
    flex-direction: column;
    margin-bottom: 260px;
    @media (max-width: 768px) {
        margin-bottom: 0px;
        margin: 0px 32px;
    }
`;

const UploadCard = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: space-between;
    padding: 16px;
    width: 352px;
    min-height: 366px;
    border: 1px solid ${({ theme }) => theme.uploadNftBorder};
    border-radius: 16px;
    :hover {
        border: 1px solid ${({ theme }) => theme.blue};

        button {
            background: ${({ theme }) => theme.blue};
        }
    }
`;

const ImageWrapper = styled.div<img>`
    background-image: url(${({ img }) => img});
    background-size: 100% 100%;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.card};
    width: 100%;
    height: 80%;

    background-repeat: no-repeat;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin-bottom: 32px;
`;
const Button = styled(Transparent)`
    padding: 8px 32px;
`;

const TextWrapper = styled(Flex)`
    margin: 0px 0px 20px 0px;
    flex-direction: column;
    width: 35%;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
    }
`;

export default function CreateNft() {
    return (
        <>
            <BackButton
                margin="152px 0px 104px 148px"
                mMargin="130px 0px 32px 32px"
            />

            <Wrapper>
                <TextWrapper>
                    <Text40
                        color={({ theme }) => theme.titles}
                        margin="0px 0px 8px 0px"
                    >
                        Upload item
                    </Text40>
                    <Text14 color={({ theme }) => theme.editLower}>
                        Choose <span> “Single” </span>if you want your
                        collectible to be one of a kind or{' '}
                        <span>“Multiple” </span> if you want to sell one
                        collectible multiple times, you can also create a{' '}
                        <span> “collection”</span> or a{' '}
                        <span>“Mystery Box” </span> .
                    </Text14>
                </TextWrapper>

                <CardWrapper>
                    <UploadCard>
                        <ImageWrapper img="/images/Singlenft.svg" />
                        <Link href="/nftform">
                            <Button>Create Single</Button>
                        </Link>
                    </UploadCard>
                    <UploadCard>
                        <ImageWrapper img="/images/Multiplenft.svg" />
                        <Button>Create Multiple</Button>
                    </UploadCard>
                    <UploadCard>
                        <ImageWrapper img="/images/Collectionnft.svg" />
                        <Button>Create Collection</Button>
                    </UploadCard>
                    <UploadCard>
                        <ImageWrapper img="/images/Nftbox.svg" />
                        <Link href="/createbox">
                            <Button>Create a NFT Box</Button>
                        </Link>
                    </UploadCard>
                </CardWrapper>
                <Text14 color={({ theme }) => theme.editLower}>
                    We do not own your private keys and cannot access your funds
                    without your confirmation.
                </Text14>
            </Wrapper>
        </>
    );
}
