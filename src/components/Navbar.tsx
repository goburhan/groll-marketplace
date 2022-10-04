import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { BlueButton } from './StyledComponents/Button';
import ConnectButton from './ConnectButton';
import { HamburgerMenu } from './Mobile/Menu';
import useTheme from '../hooks/useThemeMode';
import { userSelect } from '../actions/wallet/walletSlice';
import ProfileIcon from './ProfileMenu/ProfileIcon';
import Searchbar from './StyledComponents/Searchbar';

export const Search = styled.input`
    border: 1px solid transparent;
    border-radius: 25px;
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
    width: 48%;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`;
export default function Navbar() {
    const { themeToggler } = useTheme();
    const user = useSelector(userSelect);
    // const [imageUrl, setImageUrl] = useState(null);
    const Navibar = styled.div`
        top: 0px;
        display: flex;
        position: fixed;
        justify-content: space-between;
        width: 100vw;
        z-index: 1;
        padding: 24px 120px 24px 88px;
        background-color: ${({ theme }) => theme.header};
        img {
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            padding: 0px;
            height: 80px;
            width: 100%;
            img {
                margin-left: 32px;
                max-width: 40px;
            }
        }
    `;

    const ThemeButton = styled.button`
        background-color: transparent;
        border: none;
        cursor: pointer;
        img {
            min-width: 24px;
        }
    `;

    interface Item {
        justifyContent?: string;
    }
    const Items = styled.div<Item>`
        color: white;
        display: flex;
        width: 48%;
        gap: 2rem;
        place-items: center;
        justify-content: ${(props) => props.justifyContent};
        text {
            cursor: pointer;
        }
        @media (max-width: ${({ theme }) => theme.tablet}) {
            justify-content: space-around;
            display: none;
        }
    `;
    // console.log(user);

  
    return (
        <Navibar>
            <Link href="/">
                <img
                    src="/images/Logo.svg"
                    style={{ cursor: 'pointer' }}
                    alt="groll"
                />
            </Link>
           
            <HamburgerMenu />

            <Items justifyContent="right">
                <Searchbar />

                {user.nickname !== '' && (
                    <Link href="/createnft">
                        <BlueButton>Create</BlueButton>
                    </Link>
                )}

                <ConnectButton />

                <ProfileIcon />

                <ThemeButton
                    onClick={() => {
                        themeToggler();
                    }}
                >
                    <img src="/images/icons/Themetoggler.svg" alt="themeToggler" />
                </ThemeButton>
            </Items>
        </Navibar>
    );
}
