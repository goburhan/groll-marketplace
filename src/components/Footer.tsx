import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ParentChild from "./Mobile/ParentChild";
import {
  BrowserView,
  MobileView,
  isBrowser,
  useMobileOrientation,
  isMobile,
} from "react-device-detect";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import { WindowSize } from "../hooks/useWindowsize";

export default function Footer() {
  const { isLandscape } = useMobileOrientation();

  const Text = styled.div(
    ({ theme }) => `
color: ${theme.colors.linkItems};
 margin-bottom:20px;
 text-align:${(props) => props.align};

 font-weight: ${(props) => props.font};
 @media (max-width:  ${theme.mobile}) {
  margin-bottom:5px;
  margin-left:${(props) => props.ml};
}
cursor: pointer;
  }
`
  );
  const Email = styled.input(
    ({ theme }) => `
 background-color:transparent;
 border-color:transparent;
 padding:5px;
 color:white;
 outline: none;
 ::placeholder {
    color: #777E91;
  }
 @media (max-width:  ${theme.mobile}) {
}
  }
`
  );
  const InputWrapper = styled.div(
    ({ theme }) => `
    color: white;
    display: flex;
    width: 60%;
    padding: 4px;
    justify-content: space-between;
    border: 1px solid #777e90;
    border-radius: 20px;
    @media (max-width: ${theme.mobile}) {
      margin-top: 16px;
      width: 100%;
      margin-bottom: 16px;
    }
  `
  );

  const Flex = styled.div(
    ({ theme }) => `
display:flex;
align-items:center;
height:100%;
margin : 2% 5% 0% 5%;
justify-content:space-evenly;
@media (max-width:  ${theme.mobile}) {
  flex-wrap:wrap;
  justify-content:left;
text-align:left;
}
  }
`
  );
  const Container = styled.div(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
    }
    @media (max-width:  ${theme.mobile}) {
      margin-left: auto;
      margin-right: auto;
    }
  `
  );
  const Box = styled.div(
    ({ theme }) => `
    @media (max-width: ${theme.mobile} {
      width: 100%;
      text-align: center;
    }
  `
  );
  const Footer = styled.div(
    ({ theme }) => `
    width: 99vw;
    height: 397px;
    background: ${theme.colors.footer};
    
    @media (max-width: ${theme.mobile}) {
      height: 620px;
      padding: 20px 0px 20px 0px;
    }
  `
  );

  const isMobilee = WindowSize();

  return isMobilee ? <MobileFooter /> : <DesktopFooter />;

  //  (
  //  <Footer>
  //     <Flex>
  //       <Container>
  //         <img src="images/FooterLogo.svg" />
  //         <Text align="center">Enjoy the limitless!</Text>
  //       </Container>

  //       <Container>
  //         <Text font="bold">Gulf Coin</Text>
  //         <Text ml="3px">Discover</Text>
  //         <Text ml="3px">Connect Wallet</Text>
  //         <Text ml="3px">Create Item</Text>
  //       </Container>

  //       <Container>
  //         <Text ml="40px" font="bold">
  //           Info
  //         </Text>
  //         <Text ml="3px">Download</Text>
  //         <Text ml="3px">Demos</Text>
  //         <Text ml="3px">Support</Text>
  //       </Container>
  //       <Container>
  //         <Text ml="40px" font="bold">
  //           Join Newsletter
  //         </Text>
  //         <Text ml="3px">
  //           Subscribe our newsletter to get more free design course and resource
  //         </Text>
  //         <Text ml="3px">Demos</Text>
  //         <InputWrapper>
  //           <Email placeholder="Enter Your Email" />
  //           <EmailButton type="submit" />
  //         </InputWrapper>
  //       </Container>
  //     </Flex>
  //   </Footer>) :
  //    <Footer>
  //     <Flex>
  //       <Container>
  //         <img src="images/FooterLogo.svg" />
  //         <FooterTitle align="center">Enjoy the limitless!</FooterTitle>
  //       </Container>

  //       <Divider width="100%" />
  //       <ParentChild
  //         title={"GULF MARKET PLACE"}
  //         first="Discover"
  //         second={"Connect Wallet"}
  //         third="Create Item"
  //       />
  //       <Divider width="100%" />
  //       <ParentChild
  //         title={"Info"}
  //         first="Download"
  //         second={"Demos"}
  //         third="Support"
  //       />
  //       <Divider width="100%" />
  //       <Container>
  //         <Text ml="5px" font="bold">
  //           Join Newsletter
  //         </Text>
  //         <Text ml="3px">
  //           Subscribe our newsletter to get more free design course and
  //           resource
  //         </Text>
  //         <InputWrapper>
  //           <Email placeholder="Enter Your Email" />
  //           <EmailButton type="submit" />
  //         </InputWrapper>
  //       </Container>
  //       <Box>
  //         <Divider width="100%" />
  //         <Text12>Copyright © 2022 Gulf Coin. All rights reserved</Text12>
  //       </Box>
  //     </Flex>
  //   </Footer>
  // return (
  //   <Footer>
  //     <Flex>
  //       <Container>
  //         <img src="images/FooterLogo.svg" />
  //         <FooterTitle align="center">Enjoy the limitless!</FooterTitle>
  //       </Container>

  //       <Divider width="100%" />
  //       <ParentChild
  //         title={"GULF MARKET PLACE"}
  //         first="Discover"
  //         second={"Connect Wallet"}
  //         third="Create Item"
  //       />
  //       <Divider width="100%" />
  //       <ParentChild
  //         title={"Info"}
  //         first="Download"
  //         second={"Demos"}
  //         third="Support"
  //       />
  //       <Divider width="100%" />
  //       <Container>
  //         <Text ml="5px" font="bold">
  //           Join Newsletter
  //         </Text>
  //         <Text ml="3px">
  //           Subscribe our newsletter to get more free design course and
  //           resource
  //         </Text>
  //         <InputWrapper>
  //           <Email placeholder="Enter Your Email" />
  //           <EmailButton type="submit" />
  //         </InputWrapper>
  //       </Container>
  //       <Box>
  //         <Divider width="100%" />
  //         <Text12>Copyright © 2022 Gulf Coin. All rights reserved</Text12>
  //       </Box>
  //     </Flex>
  //   </Footer>
  // );
}
