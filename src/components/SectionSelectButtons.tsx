import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Items from "../pages/collection/Items";
import PriceSelector from "./Selectors/PriceSelector";
import Dropdown from "./Dropdown";
import styled from "styled-components";

interface Props {
  children : React.ReactNode
  value:number  
  index:number
  dir:any
}


const TabPanel =({children ,value ,index, ...other} : Props) => {
  
  // const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}
const Flex = styled.div
    `
  display: flex;
  flex-wrap:wrap;

  align-items:center;
  justify-content:center;
  flex-direction: row;
  margin:0 10% 0 5%;
  @media (max-width:  ${({ theme }) => theme.mobile}) {
  }
`;
const AppBar1 = styled(AppBar)
    `
  margin:0 10% 0 5%;
  border:1px solid transparent;
  @media (max-width:  ${({ theme }) => theme.mobile}) {
  }
`
;
const Tabs1 = styled(Tabs)
    `
    button{
      color:#777E90;
    }

    @media (max-width:  ${({ theme }) => theme.mobile}) {
  }
`



function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}



export default function SectionSelectButtons() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        width: "100%",
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar1
        position="static"
        style={{ width: 350, backgroundColor: "transparent" }}
      >
        <Tabs1
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // style={{textColor:"white"}}
        >
          <Tab
            style={{ border: "1px solid transparent" , fontSize:18}}
            label="Items"
            {...a11yProps(0)}
          />
          <Tab
            style={{ border: "1px solid transparent",fontSize:18 }}
            label="3D Gallery"
            {...a11yProps(1)}
          />
          <Tab label="Activity" {...a11yProps(2)} style={{ border: "1px solid transparent",fontSize:18 }} />
        </Tabs1>
      </AppBar1>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Flex>
          <Dropdown title="Price" header="Highes Price" />
          <Dropdown title="Likes" header="Most Liked" />
          <Dropdown title="Creator" header="Verified Only" />
          <PriceSelector />
        </Flex>
        <Items />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Items />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <Items /> 
      </TabPanel>
    </Box>
  );
}
