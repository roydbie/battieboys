import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {

    const classes = useStyles();

    return(
        <AppBar position="static" className="appbar">
            <Toolbar className="topnav">
                <Typography variant="h6" className={classes.title}>
                Battie Boys
                </Typography>

                <SignedOutLinks />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;