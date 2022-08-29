import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import PriceSelector from "./PriceSlider";
import Items from "./Items";

interface Props {
  children: React.ReactNode;
  value: number;
  index: number;
  dir: any;
}

const TabPanel = ({ children, value, index, ...other }: Props) => {
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
};
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin: 0 10% 0 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px;
  }
`;
const AppBar1 = styled(AppBar)`
  margin: 48px 10% 0 9%;
  border: 1px solid transparent;
  span {
    background-color: ;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 44px 0 0 0;
  }
`;
const Tabs1 = styled(Tabs)`
  width: 700px;

  button {
    color: #777e90;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;

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
        width: "100%",
        minHeight: 200,
      }}
    >
      <AppBar1
        position="static"
        style={{
          width: 350,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Tabs1
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          sx={{
            ".Mui-selected": {
              color: "#00ACFF !important",
              fontWeight: "600",
              fontFamily: "Poppins, normal",

              span: {
                color: "#00ACFF",
              },
            },
          }}
        >
          <Tab
            style={{
              fontFamily: "Poppins, normal",
              border: "1px solid transparent",
              fontSize: 18,
            }}
            label="CREATED"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              border: "1px solid transparent",
              fontSize: 18,
              fontFamily: "Poppins, normal",
            }}
            label="COLLECTED"
            {...a11yProps(1)}
          />
          <Tab
            label="Collaborations"
            {...a11yProps(2)}
            style={{
              border: "1px solid transparent",
              fontSize: 18,
              fontFamily: "Poppins, normal",
            }}
          />
          <Tab
            label="Transactions"
            {...a11yProps(2)}
            style={{
              border: "1px solid transparent",
              fontSize: 18,
              fontFamily: "Poppins, normal",
            }}
          />
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
      <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
    </Box>
  );
}
