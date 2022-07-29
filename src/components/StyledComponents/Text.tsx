import styled from "styled-components";

interface marginProp {
  margin?: string;
  bold?: string;
  mr?: string;
}

export const Sliderfont = styled.text`
  font-weight: 700;
  font-size: 72px;
  line-height: 56px;
  /* identical to box height, or 78% */
  letter-spacing: -0.065em;
  color: ${({ theme }) => theme.white};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 62px;
    line-height: 62px;
  }
`;
export const HomeTitles = styled.text<marginProp>`
  font-weight: 700;
  font-size: 40px;
  margin-right: ${(props) => props.mr};
  line-height: 48px;
  /* identical to box height, or 120% */
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.titles};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Title = styled.text`
  font-family: "Poppins", normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.titles};
`;

export const KycTitle = styled.text`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.titles};
`;
export const MiniCardTitle = styled.text`
  font-family: "Poppins", normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 48px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.cardTitle};
`;
export const TartistTitle = styled.text`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.cardTitle};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 24px;
    line-height: 36px;
  }
`;
export const TartistLower = styled.text`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.gray};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const CollectionLower = styled.text`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.white};
`;
export const JoinTime = styled.text`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.gray};
`;
export const TopCollectorTitle = styled.text`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.cardTitle};
`;

export const StatisticValues = styled.text`
  font-weight: 400;
  font-size: 28px;
  line-height: 31px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.white};
`;
export const General24 = styled.text`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.titles};
`;

export const MiniCategoryTitle = styled.text`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.cardTitle};
`;

export const LowerDetail = styled.text`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.lowerdetail};
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
export const TabFont = styled.text`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  span {
    color: ${({ theme }) => theme.cardTitle};
    font-weight: bold;
  }

  color: ${({ theme }) => theme.gray};
`;
export const ItemsFont = styled.text<marginProp>`
  font-weight: ${(props) => props.bold || "700"};
  font-size: 14px;
  line-height: 16px;

  color: ${({ theme }) => theme.linkItems};
`;

export const BigCardTitle = styled.text<marginProp>`
  font-weight: ${(props) => props.bold || "700"};
  font-size: 22px;
  line-height: 24px;
  margin: ${(props) => props.margin};
  color: ${({ theme }) => theme.cardTitle};
  letter-spacing: -0.01em;
`;

export const CardTitle = styled.text<marginProp>`
  font-weight: ${(props) => props.bold || "600"};
  font-size: 16px;
  line-height: 24px;
  margin: ${(props) => props.margin};
  color: ${({ theme }) => theme.cardTitle};
  letter-spacing: -0.01em;
`;

export const BuyerTitle = styled.text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.gray};
`;
export const Twelve = styled.text`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  margin-top: 8px;
  margin-top: ${({ theme }) => theme.mt};
  color: ${({ theme }) => theme.gray};

  span {
    color: ${({ theme }) => theme.linkItems};
  }
`;
