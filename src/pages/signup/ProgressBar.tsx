import React from "react";
import styled from "styled-components";

export default function ProgressBar(height?: any) {
  const Mainbar = styled.div`
    background: linear-gradient(
      272.59deg,
      #00d2ff -100.51%,
      #db00ff -14.24%,
      #09abf9 -1.51%
    );
    width: 18px;
    height: auto;
  `;
  const ChildBard = styled.button`
    background: yellow;
    
    width: 18px;
    height: auto;
  `;
  return (
    <Mainbar>
      <ChildBard></ChildBard>
    </Mainbar>
  );
}
