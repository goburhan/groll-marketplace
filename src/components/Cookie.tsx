import CookieConsent, { Cookies } from 'react-cookie-consent';
import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export default function Cookie() {
    return (
        <CookieConsent
            buttonText="Accept cookies"
            buttonStyle={{
                background:
                    'linear-gradient(244.53deg, #00D2FF 18.15%, #DB00FF 122.78%, #09ABF9 147.81%)',
                border: '1px solid transparent',
                borderRadius: '20px',
                color: 'white',
                fontSize: '14px',
                padding: '7px',
                fontWeight: '600',
            }}
            style={{
                position: 'fixed',
                left: '40vw',
                bottom: '10px',
                backgroundColor: '#282B35',
                alignItems: 'center',
                width: '25vw',
                border: '1px solid transparent',
                borderRadius: '20px',
            }}
        >
            <Flex>
                <img src="/images/Cookies.svg" />
                We use our own cookies. Learn more
            </Flex>
        </CookieConsent>
    );
}
