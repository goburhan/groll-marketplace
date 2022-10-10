import React from 'react';
import styled from 'styled-components';
import { EmailButton } from './StyledComponents/Button';

import {
    FooterTitle,
    Text24,
    Text14,
    Text16,
    Text12,
} from './StyledComponents/Text';

const Email = styled.input`
 background-color:transparent;
 border-color:transparent;
 padding:5px;
 color:white;
 outline: none;
 ::placeholder {
    color: #777E91;
  }
 @media (max-width:   ${({ theme }) => theme.mobile}) {
}
  }
`;
const InputWrapper = styled.div`
    color: white;
    display: flex;
    width: 94%;
    padding: 4px;
    justify-content: space-between;
    border: 1px solid #777e90;
    border-radius: 25px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 16px;
        width: 100%;
        margin-bottom: 16px;
    }
`;

interface flex {
    margin?: string;
}
const Flex = styled.div<flex>`
display:flex;
align-items:center;
height:100%;
margin :${(props) => props.margin || '2% 10em 0% 10em'} ;
justify-content:space-evenly;
@media (max-width:   ${({ theme }) => theme.mobile}) {
  flex-wrap:wrap;
  justify-content:left;
text-align:left;
}
  }
`;
interface cont {
    width?: any;
}
const Container = styled.div<cont>`
    display: flex;
    gap: 24px;
    width: ${(props) => props.width};
    flex-direction: column;
    a {
        text-decoration: none;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Footer = styled.div`
    width: 100%;
    height: 397px;
    background: ${({ theme }) => theme.footer};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 620px;
        padding: 20px 0px 20px 0px;
    }
`;

const Text = styled(Text16)`
    color: ${({ theme }) => theme.cardTitle};
`;

export default function DesktopFooter() {
    return (
        <Footer>
            <Flex>
                <Container>
                    <Flex margin="2% 5% 0% 0%">
                        <img
                            src="/images/Logo.svg"
                            style={{
                                maxWidth: '53px',
                                cursor: 'pointer',
                                marginRight: '8px',
                            }}
                        />
                        <Text24>GRoll marketplace</Text24>
                    </Flex>

                    <FooterTitle>
                        Enjoy the <span>limitless!</span>
                    </FooterTitle>
                </Container>

                <Container>
                    <Text>Gulf Coin</Text>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Discover
                    </Text14>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Connect Wallet
                    </Text14>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Create Item
                    </Text14>
                </Container>

                <Container>
                    <Text>Info</Text>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Download
                    </Text14>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Demos
                    </Text14>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Support
                    </Text14>
                </Container>
                <Container width="24%">
                    <Text>Join Newsletter</Text>
                    <Text14
                        fontWeight="700"
                        color={({ theme }) => theme.linkItems}
                    >
                        Subscribe our newsletter to get more free design course
                        and resource
                    </Text14>
                    <InputWrapper>
                        <Email placeholder="Enter Your Email" />
                        <EmailButton
                            bg="/images/Emailbutton.svg"
                            type="submit"
                        />
                    </InputWrapper>
                </Container>
            </Flex>
        </Footer>
    );
}
