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
  background: #22242f;
  align-items: center;
  border-radius: 80px;
  border: 1px solid #484d57;
  padding: 8px 16px 8px 16px;
  width: max-content;
  margin-top:8px;
  gap: 16px;
  img {
    max-width: 24px;
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
