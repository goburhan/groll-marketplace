import styled from "styled-components";
import EmailBg from "./EmailButton.svg";
import MobileBg from "./MobileButton.svg";
interface ButtonInterface {
  padding?: string;
  bg?: string;
  img?: any;
  margin?: string;
  color?: any;
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
  padding: 16px 0px;
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
  padding: ${(props) => props.padding || " 10px 8px 10px 8px"};
  max-width: 170px;
  max-height: 40px;
  img {
    margin-right: 6px;
    min-height: 8px;
  }
  :hover {
    opacity: 0.8;
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
  display: flex;
  place-items: center;
  gap: 6px;
  border: 1px solid #353945;
  border-radius: 90px;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  padding: ${(props) => props.padding || " 0px 44px"};
  margin-top: 8px;
  font-weight: bold;

  :hover {
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const OpenCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
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
  background-color: #00acff;
  :hover {
    opacity: 0.9;
  }
  img {
    width: 20px;
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

export const TransparentCancel = styled.button<prop>`
  border: 1px solid #353945;
  font-weight: 500;
  color: ${(props) => props.color || "#777e91"};
  font-size: 16px;
  border-radius: 90px;
  background: transparent;
  padding: ${(props) => props.padding || " 14px 32px;"};
  cursor: pointer;
  margin-bottom: ${(props) => props.mb};
  :hover {
    opacity: 0.8;
    border: 1px solid #484d57;
  }
`;

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
