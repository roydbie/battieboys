import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
    
  },
  textfield: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
      textAlign: 'center',
    },
  },
  textfield2: {
    '& label': {
      paddingLeft: 30,
      fontSize:20,
      height: '10ch'
    },
  },
  buttons: {
    height: 56,
    backgroundColor: '#4D65F6',
    color: 'white',
    width: '12ch',
    fontWeight: 'bold',
  },
}));

export default function PlusMinusField() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <div className={classes.root}>
      <div>
        <form className={classes.textfield} noValidate autoComplete="off">
          <TextField id="outlined-basic" label={count} variant="outlined" className={classes.textfield2}/>
          <ButtonGroup className={classes.buttons} >
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 1));
            }}
            className={classes.buttons}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
            className={classes.buttons}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        </form>
      </div>
    </div>
  );
}