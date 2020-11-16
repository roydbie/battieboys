import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Exerciselist from './exercises/ExerciseList';

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

const TabsZelf = ({exercises}) => {
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
    }});


    return(
        <div>
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
                    <Exerciselist exercises={exercises}/>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Bicep jajajaja
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Tricep jajaja
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    Rug jajajaja
                  </TabPanel>
                </MuiThemeProvider>
              </Paper>

        </div>

    )
}

export default TabsZelf;