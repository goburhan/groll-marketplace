import React, { useState } from 'react';
import styled from 'styled-components';
import { Text14 } from './StyledComponents/Text';

const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 100px;
    height: 100vh;
    width: 88px;
    background-color: ${({ theme }) => theme.header};
    z-index: 10;
    padding: 30px 0px;
    transition: 0.5s;
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
const SideItem = styled.a`
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
export default function Sidebar() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const Icons = [
        { name: 'bscscan', url: '', title: 'Marketplace' },
        { name: 'twitter', url: '', title: 'Launchpad' },
        { name: 'discord', url: '', title: 'Virtual World' },
        { name: 'globe', url: '', title: 'Nft Competition' },
    ];

    return (
        <Side onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ItemWrapper>
                {Icons.map((icons) => (
                    <SideItem
                        href={icons.url}
                        key={icons.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`/images/${icons.name}.svg`}
                            alt="socialmedia"
                        />
                        {isHovering && (
                            <Text14 color={({ theme }) => theme.titles}>
                                {icons.title}
                            </Text14>
                        )}
                    </SideItem>
                ))}
            </ItemWrapper>
        </Side>
    );
}
