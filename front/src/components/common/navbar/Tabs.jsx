import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HeadsetIcon from "@material-ui/icons/Headset";
import "./navbar.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
      className="TabsCentrados"
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="navbar">
      <AppBar position="static" className="TabsCentrados" id="navbar">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
          className="TabsCentrados"
          id="navbar"
        >
          <Tab icon={<LaptopMacIcon />} aria-label="Laptop" {...a11yProps(0)} />
          <Tab
            icon={<PhoneIphoneIcon />}
            aria-label="Phone"
            {...a11yProps(0)}
          />
          <Tab
            icon={<HeadsetIcon />}
            aria-label="Accesories"
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
