import React from 'react';
import './App.css';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';
import Header from './components/Header.js';
import Kaartje from './components/HomepageCards.js';
import KaartjeOefeningBicep from './components/MeCards.js';
import KaartjeOefeningTricep from './components/MeCardsTricep.js';
import KaartjeOefeningChest from './components/MeCardsChest.js';

import Paper from '@material-ui/core/Paper';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import { BrowserRouter as Router, Switch, Route, NavLink}from 'react-router-dom';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
}

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
}


function App() {

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
  }
});
  

  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/home">
            <Kaartje />
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
                  <KaartjeOefeningChest />
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
            Progress
            blablalba
          </Route>
          <Route exact path="/settings">
            Settings
          </Route>
        </Switch>
        
        <footer>
          <NavLink to="/home" activeClassName="activeLink" className="bottomnavitem"><TimerIcon /></NavLink>
          <NavLink to="/me" activeClassName="activeLink" className="bottomnavitem"><FormatListNumberedIcon /></NavLink>
          <NavLink to="/progress" activeClassName="activeLink" className="bottomnavitem"><TrendingUpIcon /></NavLink>
          <NavLink to="/settings" activeClassName="activeLink" className="bottomnavitem"><SettingsIcon /></NavLink>
        </footer>
      </Router>

    </div>
  );
}

export default App;
