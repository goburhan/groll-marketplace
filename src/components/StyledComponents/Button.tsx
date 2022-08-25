import styled from "styled-components";
import React from "react";
import MobileBg from "./MobileButton.svg";
interface ButtonInterface {
  display?: string;
  mDisplay?: string;
  padding?: string;
  bg?: string;
  img?: any;
  margin?: string;
  color?: any;
  mMargin?: string;
  mPadding?: string;
  gridColumnStart?: string;
  gridRowStart?: string;
}

export const StyledButton = styled.button`
  border: 1px solid transparent;
  display: flex;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  img {
    width: 20px;
  }
`;
// gray circle , background as props
export const CircleButton = styled.button<ButtonInterface>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  border: 1px solid #484d57;
  border-radius: 50%;
  padding: 24px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const BuyButton = styled.button<ButtonInterface>`
  border: 1px solid transparent;
  background: ${(props) => props.color};
  width: 48%;
  border-radius: 90px;
  padding: 16px 24px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: ${(props) => props.margin};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 0px;
  }
`;
export const SliderButton = styled.button`
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 90px;
  width: 140px;
  padding: 16px 12px;
  text-align: center;
  background: transparent;
  font-size: 16px;
  color: ${(props) => props.color || "#00acff"};
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const NavButton = styled.button`
  border: 1px solid #484d57;
  background: ${({ theme }) => theme.card};
  border-radius: 25px;
  padding: 8px 20px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const Transparent = styled.button<ButtonInterface>`
  display: ${(props) => props.display || "flex"};
  border: 1px solid #353945;
  place-items: center;
  gap: 6px;
  justify-content: center;
  border-radius: 90px;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  padding: ${(props) => props.padding || " 0px 44px"};
  font-weight: bold;
  :hover {
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${(props) => props.mDisplay};
  }
`;
export const OpenCloseButton = styled.button<ButtonInterface>`
  background: transparent;
  border: none;
  margin: ${(props) => props.margin};
  cursor: pointer;
  img {
    height: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 130px;
    img {
      max-height: 12px;
    }
  }
`;

export const BlueButton = styled.button<ButtonInterface>`
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: ${(props) => props.padding || "8px 20px"};
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: max-content;
  background-color: #00acff;
  :hover {
    opacity: 0.9;
  }
  img {
    width: 20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${(props) => props.mPadding || "14px 24px"};
  }
`;

export const EmailButton = styled.button<ButtonInterface>`
  border: 1px solid transparent;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 25px;
  padding: 18px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

interface prop {
  padding?: string;
  mb?: string;
  color?: string;
}

export const MobileMenu = styled.button(
  ({ theme }) => `
  border: 1px solid transparent;
  width: 40px;
  background: url(${MobileBg});
  background-repeat: no-repeat;
  background-position:center;
  background-size: 100%;
  margin-right: 4%;
  display: none;
  @media (max-width:  ${theme.mobile}) {
    display: block;
  }
`
);

export const PrevNextButton = styled.button<ButtonInterface>`
  background-image: url(${({ img }) => img}) !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
`;
const Clear = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 1px solid transparent;
  color: #777e91;
`;

export function ClearAll() {
  return (
    <Clear>
      <img src="/images/Staticlogos/Clearicon.svg" />
      Clear All
    </Clear>
  );
}

export const Backhome = styled.button<ButtonInterface>`
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid #484d57;
  color: ${({ theme }) => theme.cardTitle};
  cursor: pointer;
  margin: ${(props) => props.margin};
  justify-content: center;
  border-radius: 24px;
  font-size: 14px;
  white-space: nowrap;
  padding: ${(props) => props.padding || "10px 16px"};
  width: max-content;
  max-height: 40px;
  img {
    margin-right: 6px;
    min-height: 8px;
  }
  :hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: ${(props) => props.mMargin};
  }
`;
export function BackButton({ ...props }) {
  return (
    <Backhome
      margin={props.margin}
      mMargin={props.mMargin}
      padding={props.padding}
    >
      <img src="/images/back.svg" />
      Back to home
    </Backhome>
  );
}
