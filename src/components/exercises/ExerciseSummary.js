import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

const ExerciseSummary = ({exercise}) => {
    const classes = useStyles();
    
    return(
      <div>
        <Card className="exercisecard">
          <CardContent>
              <Typography variant="h6" component="h2">
                  {exercise.title}
              </Typography>
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
}

export default ExerciseSummary;