import React from "react";
import styled from "styled-components";
import { EmailButton } from "./StyledComponents/Button";
import { Divider } from "./StyledComponents/Divider";
import ParentChild from "./Mobile/ParentChild";
import { FooterTitle, Text12 } from "./StyledComponents/Text";

interface text {
  font?: string;
  ml?: string;
}

const Text = styled.div<text>`
color: ${({ theme }) => theme.linkItems};
 margin-bottom:20px;

 font-weight: ${(props) => props.font};

 @media (max-width:  ${({ theme }) => theme.mobile}) {
  margin-bottom:5px;
  margin-left:${(props) => props.ml};
}
cursor: pointer;
  }
`;
const Email = styled.input`
 background-color:transparent;
 border-color:transparent;
 padding:5px;
 color:white;
 outline: none;
 ::placeholder {
    color: #777E91;
  }

  }
`;
const InputWrapper = styled.div`
  color: white;
  display: flex;
  width: 60%;
  padding: 4px;
  justify-content: space-between;
  border: 1px solid #777e90;
  border-radius: 25px;
  margin-top: 16px;
  width: 100%;
  margin-bottom: 16px;
`;
const Flex = styled.div`
display:flex;
align-items:center;
height:100%;
margin : 2% 5% 0% 5%;
justify-content:space-evenly;
flex-wrap:wrap;
  justify-content:left;
text-align:left;

  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  margin-left: auto;
  margin-right: auto;
`;
const Box = styled.div`
  width: 100%;
  text-align: center;
`;
const Footer = styled.div`
  max-width: 100vw;
  height: 620px;
  background: ${({ theme }) => theme.footer};
  padding: 20px 0px 20px 0px;
  margin-top: 100px;
`;
export default function MobileFooter() {
  return (
    <Footer>
      <Flex>
        <Container>
          <img src="/images/FooterLogo.svg" />
          <FooterTitle>Enjoy the limitless!</FooterTitle>
        </Container>

        <Divider width="100%" />
        <ParentChild
          title={"GULF MARKET PLACE"}
          first="Discover"
          second={"Connect Wallet"}
          third="Create Item"
        />
        <Divider width="100%" />
        <ParentChild
          title={"Info"}
          first="Download"
          second={"Demos"}
          third="Support"
        />
        <Divider width="100%" />
        <Container>
          <Text ml="5px" font="bold">
            Join Newsletter
          </Text>
          <Text ml="3px">
            Subscribe our newsletter to get more free design course and resource
          </Text>
          <InputWrapper>
            <Email placeholder="Enter Your Email" />
            <EmailButton bg="/images/Emailbutton.svg" type="submit" />
          </InputWrapper>
        </Container>
        <Box>
          <Divider width="100%" />
          <Text12>Copyright © 2022 Gulf Coin. All rights reserved</Text12>
        </Box>
      </Flex>
    </Footer>
  );
}
