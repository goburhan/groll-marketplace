import styled from "styled-components";

interface marginProp {
  margin?: string;
  bold?: string;
  mr?: string;
  weight?: string;
  spacing?: string;
}
export interface TextProps {
  lineHeight?: string;
  fontWeight?: string;
  margin?: string;
  letterSpacing?: string;
  color?: any;
  mobileSize?: string;
}
export const HomeTitleWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    height: 20px;
  }
`;

export const Text12 = styled.text<marginProp>`
  font-weight: ${(props) => props.weight || "700"};
  font-size: 12px;
  line-height: 20px;
  margin-top: ${({ theme }) => theme.mt};
  color: ${({ theme }) => theme.gray};

  span {
    color: ${({ theme }) => theme.linkItems};
  }
`;
export const Text14 = styled.text<TextProps>`
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || 1.5};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
  span {
    color: ${({ theme }) => theme.cardTitle};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const Text16 = styled.text<TextProps>`
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: ${(props) => props.lineHeight || 1.5};
  letter-spacing: ${(props) => props.letterSpacing || "-0.01em"};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const Text18 = styled.text<TextProps>`
  font-size: 18px;
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || 1.5};
  letter-spacing: ${(props) => props.letterSpacing || "-0.01em"};
  color: ${(props) => props.color};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const Text22 = styled.text<TextProps>`
  font-size: 22px;
  font-weight: ${(props) => props.fontWeight || "700"};
  line-height: ${(props) => props.lineHeight || 1.5};
  letter-spacing: -0.01em;
  color: ${(props) => props.color};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const Text24 = styled.text<TextProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: ${(props) => props.lineHeight || "-0.01em"};

  color: ${({ theme }) => theme.titles};
`;
export const Text28 = styled.text`
  font-weight: 700;
  font-size: 28px;
  line-height: 31px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.white};
`;
export const Text32 = styled.text<TextProps>`
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.cardTitle};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const Text40 = styled.text<TextProps>`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  margin: ${(props) => props.margin};
  letter-spacing: ${(props) => props.letterSpacing || "-0.01em"};
  color: ${(props) => props.color};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const Text48 = styled.text`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.cardTitle};

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const Sliderfont = styled.text`
  font-weight: 700;
  font-size: 72px;
  line-height: 56px;
  /* identical to box height, or 78% */
  letter-spacing: -0.065em;
  color: ${({ theme }) => theme.white};
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const FooterTitle = styled.text`
  font-weight: 400;
  font-size: 30px;
  line-height: 66px;
  span {
    font-weight: 700;
  }
  color: ${({ theme }) => theme.white};
`;
