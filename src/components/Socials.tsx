import React from 'react';
import styled from 'styled-components';

const social = [
    { name: 'bscscan', url: ' ' },
    { name: 'twitter', url: ' ' },
    { name: 'discord', url: '' },
    { name: 'globe', url: '' },
];
interface Social {
    display?: string;
    mDisplay?: string;
}

const Flex = styled.div<Social>`
    display: flex;
    background: linear-gradient(180deg, #22242F 4.65%, #1A1D28 86.94%);
    align-items: center;
    border-radius: 80px;
    border: 1px solid #484d57;
    padding: 8px 16px 8px 16px;
    width: max-content;
    gap: 16px;
    img {
        max-width: 24px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column: span 1;
    }
`;

export default function Socials() {
    return (
        <Flex>
            {social.map((icons) => (
                <a
                    href={icons.url}
                    key={icons.name}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={`/images/${icons.name}.svg`} alt="socialmedia" />
                </a>
            ))}
        </Flex>
    );
}
