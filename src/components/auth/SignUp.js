import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions.js';

// Or Create your Own theme:
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#23985F'
      }
    }
  });


export class SignUp extends Component {  
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    
    render() {
        const { auth, authError } = this.props;
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
                    <h4>First name</h4>
                    <TextField id="firstName" type="text" label="First name" variant="outlined" className="textfieldlogin" color="secondary" onChange={this.handleChange}/>
                    <h4>Last name</h4>
                    <TextField id="lastName" type="text" label="Last name" variant="outlined" className="textfieldlogin" color="secondary" onChange={this.handleChange}/>
                    <br></br><br></br>
                    <Button variant="contained" color="secondary" className="buttonlogin" type="submit">
                        Sign up
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);