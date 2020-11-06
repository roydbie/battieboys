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

const ExerciseDetails = (props) => {
    const classes = useStyles();
    const id = props.match.params.id;
    return(
        <Card className="exercisecard">
                <br></br><br></br>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        Exercise Title - {id}
                    </Typography>
                    <br></br>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Faketekst of Lorem ipsum ook wel lipsum genoemd, is de naam van een tekst die meestal door drukkers en grafisch ontwerpers (bijv. webdesigners en dtp-ers) gebruikt wordt om te kijken hoe een tekst of lettertype eruit komt te zien.
                    </Typography>
                    <Typography className={classes.title} color="textSecondary">
                    14:00 45-20-1020
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default ExerciseDetails;