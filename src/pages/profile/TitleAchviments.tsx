import React from "react";
import { Flex } from "../../components/StyledComponents/Flex";
import styled from "styled-components";

export default function TitleAchviments() {
  
 

  const icons = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];
  const Badges = styled.div`
    display: flex;
    gap: 8px;
    margin-left: 12px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
  `;
  const Text = styled.text`
  font-weight: 500;
  font-size: 20px;
  line-height: 31px;
  color: ${({ theme }) => theme.blue};
  letter-spacing: -0.01em;
 
`;

  return (
    <Flex mMargin="8px auto">
      <Text>Artist</Text>
      <Badges>
        {icons.map((icon) => (
          <img
            style={{ maxWidth: 28 }}
            src={`/images/Icons/Achievements/${icon.name}.svg`}
            alt="achievements"
          />
        ))}
      </Badges>
    </Flex>
  );
}
