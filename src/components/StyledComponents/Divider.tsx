import styled from "styled-components";

interface Divid {
  width?: string;
  ml?: string;
  mb?: string;
  mt?: string;
  mr?: string;
}

export const Divider = styled.div<Divid>`
  background: #484d57;
  border-radius: 1px;
  width: ${(props) => props.width || "258.26px"};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  height: 1px;
`;

interface prop {
  display?: any;
  ml?: any;
  height?:any;
}

export const Vdivider = styled.div<prop>`
  width: 1px;
  height: ${(props) => props.height ||"90%" }; 
  margin-left: ${(props) => props.ml};
  /* secondary grey */

  border: 0.1px solid #484d57;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${(props) => props.display};
  }
`;
