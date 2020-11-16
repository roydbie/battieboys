import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

const ExerciseDetails = (props) => {
    const classes = useStyles();
    const { exercise, auth } = props;
        if(!auth.uid) {
            return <Redirect to='/signin' />
        }
    if(exercise){
      return(
        <div>
        
        <Card className="exercisecard">
        <br></br><br></br><br></br>
        <Link to="/exercises" className="backbutton"><KeyboardBackspaceIcon /></Link>
          <CardContent>
              <Typography variant="h6" component="h2">
                  {exercise.title}
              </Typography>
              <br></br>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {exercise.content}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                {exercise.createdAt.toDate().toDateString()}
              </Typography>
          </CardContent>
      </Card>
      </div>
      )
    } else {
      return(
          <p>Loading project...</p>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const exercises = state.firestore.data.exercises;
  const exercise = exercises ? exercises[id] : null;
  return {
    exercise: exercise,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'exercises'}
  ])
)(ExerciseDetails);