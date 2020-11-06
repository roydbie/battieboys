import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';


const SignedInLinks = () => {
    return(
        <div>
            <Button color="inherit"><NavLink to="/" className="navlink"><AddBoxIcon className="navbaricons" /></NavLink></Button>
            <Button color="inherit"><NavLink to="/" className="navlink"><ExitToAppIcon className="navbaricons" /></NavLink></Button>
        </div>
    )
}

export default SignedInLinks;