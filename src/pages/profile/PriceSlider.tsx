import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import { Text14, Text12 } from "../../components/StyledComponents/Text";

function valuetext(value) {
  return `${value}°C`;
}

interface prop {
  width?: any;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PriceSelector() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Boxer = styled(Box)<prop>`
    border: white;
    text-align: left;
    justify-content: space-between;
    width: 20%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 2%;
      margin-right: 0px;
      width: 88vw;
      z-index: -1;
    }
  `;
  return (
    <Boxer>
      <Box>
        <Text12>Price Range</Text12>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          style={{ color: "#00ACFF  " }}
        />
        <Flex>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">0.01 GULF</Text14>
          <Text14 color={({ theme }) => theme.gray} fontWeight="600">10 GULF</Text14>
        </Flex>
      </Box>
    </Boxer>
  );
}
