import styled from "styled-components"

interface props {
    column?: string;
}

export const Flex = styled.div<props>`
display:flex;
flex-direction: ${(props)=>props.column};
`
export const Box = styled.div`
display:flex;
`