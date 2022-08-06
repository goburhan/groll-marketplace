import React from "react";
import styled from "styled-components";
import { EmailButton } from "./StyledComponents/Button";

import {
  CardTitle,
  FooterTitle,
  General24,
  ItemsFont,
  Twelve,
} from "./StyledComponents/Text";



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
margin :${(props) => props.margin || "2% 10em 0% 10em"} ;
justify-content:space-evenly;
@media (max-width:   ${({ theme }) => theme.mobile}) {
  flex-wrap:wrap;
  justify-content:left;
text-align:left;
}
  }
`;
interface cont {
  width?:any;
}
const Container = styled.div<cont>`
  display: flex;
  gap: 24px;
  width:${(props) => props.width };
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
  width: 99vw;
  height: 397px;
  background: ${({ theme }) => theme.footer};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 620px;
    padding: 20px 0px 20px 0px;
  }
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
                maxWidth: "53px",
                cursor: "pointer",
                marginRight: "8px",
              }}
            />
            <General24>GRoll marketplace</General24>
          </Flex>

          <FooterTitle>
            Enjoy the <span>limitless!</span>
          </FooterTitle>
        </Container>

        <Container>
          <CardTitle bold="500">Gulf Coin</CardTitle>
          <ItemsFont>Discover</ItemsFont>
          <ItemsFont>Connect Wallet</ItemsFont>
          <ItemsFont>Create Item</ItemsFont>
        </Container>

        <Container>
          <CardTitle bold="500">Info</CardTitle>
          <ItemsFont>Download</ItemsFont>
          <ItemsFont>Demos</ItemsFont>
          <ItemsFont>Support</ItemsFont>
        </Container>
        <Container width="24%">
          <CardTitle bold="500">Join Newsletter</CardTitle>
          <ItemsFont>
            Subscribe our newsletter to get more free design course and resource
          </ItemsFont>
          <InputWrapper>
            <Email placeholder="Enter Your Email" />
            <EmailButton bg="/images/Emailbutton.svg" type="submit" />
          </InputWrapper>
        </Container>
      </Flex>
    </Footer>
  );
}
