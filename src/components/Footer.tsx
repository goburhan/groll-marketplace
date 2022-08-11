import React, { useEffect, useState } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import { WindowSize } from "../hooks/useWindowsize";

export default function Footer() {
  const isMobilee = WindowSize();

  return isMobilee ? <MobileFooter /> : <DesktopFooter />;

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
