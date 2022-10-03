import React from 'react';
import styled from 'styled-components';

export const Search = styled.input`
    border: 1px solid transparent;
    background-color: transparent;
    color: white;
    ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }
    :focus {
        outline: none;
    }
`;
export const SearchWrapper = styled.div`
    display: flex;
    border: 1px solid #484d57;
    border-radius: 25px;
    background-color: transparent;
    padding: 6px 14px 6px 14px;
    gap: 72px;
    justify-content: space-between;
    img {
        max-width: 24px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`;

export default function Searchbar() {
    return (
        <SearchWrapper>
            <img src="/images/Shape.svg" />
            <Search placeholder="Search Everything" />
        </SearchWrapper>
    );
}
