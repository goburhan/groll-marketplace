import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Items from "../Items";
import styled from "styled-components";
import TopWrapper from "./TopWrapper";
import BidsOffer from "./BidsOffer";
import Backgrounds from "./Backgrounds";
import Details from "./Details";
interface Props {
  children?: React.ReactNode;
  value?: number;
  index?: number;
  dir?: any;
}

function TabPanel({ children, value, index, ...other }: Props) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

const AppBar1 = styled(AppBar)`
  border: 1px solid gray;
  margin: 20px 0px;
  border-radius: 90px;
  box-shadow: 0px;
  span {
    z-index: -1 !important;
    height: 80%;
    border-radius: 50px;
    margin-bottom: 5px;
  }
`;
const Tabs1 = styled(Tabs)(
  ({ theme }) =>
    `
     margin-left:4px;
    button{
      color:#fff;
    }  

    @media (max-width:  ${theme.mobile}) {
  }
  
`
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function SelectButton() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 200,
        color: "#fff",
      }}
    >
      <AppBar1
        position="static"
        style={{ width: "100%", backgroundColor: "transparent" }}
      >
        <Tabs1
          sx={{
            ".Mui-selected": { color: "#fff !important" },
          }}
          value={value}
          onChange={handleChange}
        >
          <Tab
            style={{ border: "1px solid transparent", fontSize: 18 }}
            label="Info"
            {...a11yProps(0)}
          />
          <Tab
            style={{ border: "1px solid transparent", fontSize: 18 }}
            label="Owners"
            {...a11yProps(1)}
          />
          <Tab
            label="History"
            {...a11yProps(2)}
            style={{ border: "1px solid transparent", fontSize: 18 }}
          />
          <Tab
            label="Bids"
            {...a11yProps(2)}
            style={{ border: "1px solid transparent", fontSize: 18 }}
          />
        </Tabs1>
      </AppBar1>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <TopWrapper />
        <Backgrounds />
        <Details />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Items />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Items />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <BidsOffer />
      </TabPanel>
    </Box>
  );
}
