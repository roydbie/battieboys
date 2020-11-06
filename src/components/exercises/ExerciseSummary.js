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

const ExerciseSummary = () => {
    const classes = useStyles();
    return(
        <Card className="exercisecard">
                <CardContent>
                    <Typography variant="h6" component="h2">
                        Exercise Title
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Posted by Roy de Bie
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                    14:00 45-20-1020
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default ExerciseSummary;