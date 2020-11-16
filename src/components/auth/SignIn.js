import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

// Or Create your Own theme:
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#23985F'
      }
    }
  });


export class SignIn extends Component {  
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) {
            return <Redirect to='/home' />
        }
        return(
            <div>
            <MuiThemeProvider theme={theme}>
                <form className="loginform" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <h4>Email</h4>
                    <TextField id="email" type="email" label="Email" variant="outlined" className="textfieldlogin" color="secondary" onChange={this.handleChange}/>
                    <h4>Password</h4>
                    <TextField id="password" type="password" label="Password" variant="outlined" className="textfieldlogin" color="secondary" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <Button variant="contained" color="secondary" className="buttonlogin" type="submit">
                        Log in
                    </Button>
                    <p>{authError ? authError : null }</p>
                </form>
            </MuiThemeProvider>
                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);