import React from "react";
import styled from "styled-components";
const social = [
  { name: "bscscan", url: " " },
  { name: "twitter", url: " " },
  { name: "discord", url: "" },
  { name: "globe", url: "" },
];

const Flex = styled.div`
  display: flex;
  a {
    margin-left: 8px;
  }
`;

export default function Socials() {
  return (
    <Flex>
      {social.map((icons) => {
        return (
          <a href={icons.url} key={icons.name} target="_blank" rel="noreferrer">
            <img src={`/images/${icons.name}.svg`} />
          </a>
        );
      })}
    </Flex>
  );
}
