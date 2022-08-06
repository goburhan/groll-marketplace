import styled from "styled-components";

interface props {
  direction?: string;
  width?: string;
  textAlign?: string;
  margin?: string;
  gap?: string;
}

export const Flex = styled.div<props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  gap:  ${(props) => props.gap};
`;
export const Box = styled.div`
  display: flex;
`;
