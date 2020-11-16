import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { createExercise } from '../../store/actions/exerciseActions';
import { Redirect } from 'react-router-dom';

// Or Create your Own theme:
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#23985F'
      }
    }
  });


export class CreateExercise extends Component {  
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createExercise(this.state);
    }
    
    render() {
        const { auth } = this.props;
        if(!auth.uid) {
            return <Redirect to='/signin' />
        }
        return(
            <div>
            <MuiThemeProvider theme={theme}>
                <form className="loginform" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <h4>Title</h4>
                    <TextField id="title" type="text" label="Title" variant="outlined" className="textfieldlogin" color="secondary" onChange={this.handleChange}/>
                    <h4>Content</h4>
                    <TextField
                        id="content"
                        label="Content"
                        placeholder="some text.."
                        multiline
                        variant="outlined"
                        type="text"
                        className="textfieldlogin"
                        color="secondary"
                        onChange={this.handleChange}
                        />
                    <br></br><br></br>
                    <Button variant="contained" color="secondary" className="buttonlogin" type="submit">
                        Create exercise
                    </Button>
                </form>
            </MuiThemeProvider>
                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExercise: (exercise) => dispatch(createExercise(exercise))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExercise);