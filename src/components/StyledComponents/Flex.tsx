import styled from 'styled-components';

interface Area {
    direction?: string;
    width?: string;
    textAlign?: string;
    margin?: string;
    gap?: string;
    alignItems?: string;
    justifyContent?: string;
    wrap?: string;
    display?: string;
    mMargin?: string;
}
interface GridProps {
    columns?: string;
    gap?: string;
}

export const Flex = styled.div<Area>`
    display: flex;
    flex-wrap: ${(props) => props.wrap || 'wrap'};
    flex-direction: ${(props) => props.direction};
    width: ${(props) => props.width};
    text-align: ${(props) => props.textAlign};
    margin: ${(props) => props.margin};
    gap: ${(props) => props.gap};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: ${(props) => props.display};
        margin: ${(props) => props.mMargin};
    }
`;
export const Grid = styled.div<GridProps>`
    display: grid;

    gap: ${(props) => props.gap};
    grid-template-columns: ${(props) => props.columns};
`;

export const Box = styled.div<Area>`
    display: flex;
`;
export const Container = styled.div<Area>`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.margin};
`;
