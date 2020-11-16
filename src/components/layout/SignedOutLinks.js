import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import {withRouter} from 'react-router';


const SignedOutLinks = () => {
    return(
        <div>
            <Button color="inherit"><NavLink to="/signup" className="navlink"><PersonAddIcon className="navbaricons" /></NavLink></Button>
            <Button color="inherit"><NavLink to="/signin" className="navlink"><OpenInBrowserIcon className="navbaricons" /></NavLink></Button>
        </div>
    )
}

export default withRouter(SignedOutLinks);