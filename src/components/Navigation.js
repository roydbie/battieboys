import React from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';
import GroupIcon from '@material-ui/icons/Group';
import KaartjeOefeningBicep from './MeCards.js';
import KaartjeOefeningTricep from './MeCardsTricep.js';
import ChestEx from './ChestEx.js';

import Paper from '@material-ui/core/Paper';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import { BrowserRouter as Router, Switch, Route, NavLink}from 'react-router-dom';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Notifications from './Notifications.js';

import People from './People.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

function Navigation() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // Or Create your Own theme:
    const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#23985F'
      }
    }})


    
    return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/home">
              <Notifications />
            </Route>
            <Route exact path="/me">
              <Paper square className="paper">
                <MuiThemeProvider theme={theme}>
                  <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    className="tabs"
                  >
                    <Tab label="chest" className="tab"  {...a11yProps(0)} />
                    <Tab label="bicep" className="tab" {...a11yProps(1)}/>
                    <Tab label="tricep" className="tab" {...a11yProps(2)}/>
                    <Tab label="back" className="tab" {...a11yProps(3)}/>
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    <ChestEx />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <KaartjeOefeningBicep />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <KaartjeOefeningTricep />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    Item Vier
                  </TabPanel>
                </MuiThemeProvider>
              </Paper><br></br>
            </Route>
            <Route exact path="/progress">
              <People />
            </Route>
            <Route exact path="/settings">
              Settings
            </Route>
          </Switch>
          
          <footer>
            <NavLink to="/home" activeClassName="activeLink" className="bottomnavitem"><TimerIcon /></NavLink>
            <NavLink to="/me" activeClassName="activeLink" className="bottomnavitem"><FormatListNumberedIcon /></NavLink>
            <NavLink to="/progress" activeClassName="activeLink" className="bottomnavitem"><GroupIcon /></NavLink>
            <NavLink to="/settings" activeClassName="activeLink" className="bottomnavitem"><SettingsIcon /></NavLink>
          </footer>
        </Router>
      </div>)
    
}

export default Navigation;