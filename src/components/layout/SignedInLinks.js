import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return(
        <div>
            <Button color="inherit"><NavLink to="/create" className="navlink"><AddBoxIcon className="navbaricons" /></NavLink></Button>
            <Button color="inherit" onClick={props.signOut} ><NavLink to="/create" className="navlink"><ExitToAppIcon className="navbaricons" /></NavLink></Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);