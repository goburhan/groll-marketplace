import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../StyledComponents/Flex';
import Buttons from './Buttons';
const Icons = [
    {
        icon: 'bscscan',
        url: '',
        title: 'Marketplace',
        sub: [
            { name: 'Creator', url: '', title: 'Marketplace' },
            { name: 'NFT’s', url: '', title: 'Marketplace' },
        ],
    },
    {
        icon: 'twitter',
        url: '',
        title: 'Launchpad',
        sub: [
            { name: 'Creator', url: '', title: 'Marketplace' },
            { name: 'NFT’s', url: '', title: 'Marketplace' },
        ],
    },
    {
        icon: 'discord',
        url: '',
        title: 'Virtual World',
        sub: [
            { name: 'Creator', url: '', title: 'Marketplace' },
            { name: 'NFT’s', url: '', title: 'Marketplace' },
        ],
    },
    {
        icon: 'globe',
        url: '',
        title: 'Nft Competition',
        sub: [
            { name: 'Creator', url: '', title: 'Marketplace' },
            { name: 'NFT’s', url: '', title: 'Marketplace' },
        ],
    },
];
const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 110px;
    height: 100vh;
    width: 88px;
    background-color: ${({ theme }) => theme.header};
    z-index: 10;
    padding: 30px 0px;
    transition: 0.5s;
    border-right: 0.1rem solid #484d57;
    &:hover {
        width: 240px;
        transition: 0.5s;
        align-items: flex-start;
    }
`;
const ItemWrapper = styled.div`
    margin: 0 auto;
    &:hover {
    }
`;
const SideItem = styled.div`
    display: flex;
    padding: 16px;
    gap: 12px;
    white-space: nowrap;
    &:hover {
        cursor: pointer;
        background-color: #282b38;
        border-radius: 8px;
    }
`;
const Item = styled.button``;

const MenuItems = styled(Flex)``;
export default function Sidebar() {
    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Side onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ItemWrapper>
                <Buttons
                    title="Marketplace"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    icons="Marketplace"
                    hover={isHovering}
                />
                <Buttons
                    title="Launchpad"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    icons="Launchpad"
                    hover={isHovering}
                />
                <Buttons
                    title="Virtual World"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    icons="Virtual"
                    hover={isHovering}
                />
                <Buttons
                    title="Nft Competition"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    hover={isHovering}
                    icons="Competition"
                />
                <Buttons
                    title="Insights"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    hover={isHovering}
                    icons="Insights"
                />
                <Buttons
                    title="Collaborations"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    hover={isHovering}
                    icons="Collaboration"
                />
                <Buttons
                    title="Help Center"
                    first="Discover"
                    second="Connect Wallet"
                    third="Create Item"
                    hover={isHovering}
                    icons="HelpCenter"
                />

                {/* {Icons.map((icons,index) => (
                    <SideItem
                        // href={icons.url}
                        key={icons.icon}
                        // target="_blank"
                        // rel="noreferrer"
                    >
                        <img src={`/images/${icons.icon}.svg`} alt="sidebar" />
                        {isHovering && (
                            <MenuItems>
                                <Item
                                    onClick={() => {
                                        setCheckedState(checkedState[index]);
                                    }}
                                >
                                    <Text14 color={({ theme }) => theme.titles}>
                                        {icons.title}
                                    </Text14>
                                </Item>
                                {isOpen && (
                                    <Text14 color={({ theme }) => theme.titles}>
                                        {icons.sub.map((subs) => subs.name)}
                                    </Text14>
                                )}
                            </MenuItems>
                        )}
                    </SideItem>
                ))} */}
            </ItemWrapper>
        </Side>
    );
}
