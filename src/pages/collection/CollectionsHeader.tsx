import React from "react";
import styled from "styled-components";
import bg from "./collectionbg.png";
import profile from "./userpicture.svg";
import { Title, CollectionLower, JoinTime } from "../../components/StyledComponents/Text";
import Socials from "../../components/Socials";
import { StyledButton } from "../../components/StyledComponents/Button";
import Statistics from "../../components/Statistics";


const Side = styled.div`
  display: flex;
  flex-direction:  column;
  align-items:flex-end;
  align-self:flex-end;
  width:100%;
`;
const ProfilPic = styled.div`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 10% 10% 5% 10%;
  background-image: url({bg});
  background-size: 100%;
  background-repeat: no-repeat;
`;
export default function CollectionsHeader() {

  const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.about || "column"};
  width:700px;
`;

  return (
    <HeaderWrapper>
      <Flex>
        <ProfilPic />
        <Title style={{ color: "white" }}>
          Not You Bro!
          <img src="/images/Verified.svg" style={{ minWidth: 40 }} />
        </Title>
        <CollectionLower>
          6969 Degenerate Cyber Trash out of the swamp hangry for the next big
          mint or really any munchies they can find first.
        </CollectionLower>
        <JoinTime>Joined: 5th December 2021</JoinTime>
        <Flex about="row">
          <StyledButton
            style={{
              background:
                "linear-gradient(244.53deg, #00D2FF 18.15%, #DB00FF 122.78%, #09ABF9 147.81%)",
              color: "#fff",
              minWidth: "200px",
              maxWidth: "300px",
            }}
          >
            Follow
          </StyledButton>
          <Socials />
        </Flex>
        <Statistics />
      </Flex>

      <Side>
      <StyledButton
            style={{
              background:
                "linear-gradient(244.53deg, #00D2FF 18.15%, #DB00FF 122.78%, #09ABF9 147.81%)",
              color: "#fff",
              minWidth: "200px",
              maxWidth: "300px",
            }}
          >
            Follow
          </StyledButton>
      </Side>
    </HeaderWrapper>
  );
}
