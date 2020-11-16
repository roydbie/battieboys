import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import Whiskas from '../../images/whiskas.jpg';
import Zeep from '../../images/zeep.jpg';
import Strokorrel from '../../images/strokorrel.png';
import Vogel from '../../images/vogel.png';
import { Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

import TableCell from '@material-ui/core/TableCell';

import { ActionAnimations, SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 752,
    marginLeft: '5ch',
    marginRight: '5ch'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  listitem: {
      marginBottom: '0.5ch',
      marginTop: '0.5ch',
      borderBottomColor: 'grey',
        borderBottomWidth: 2
  },
  listItemText:{
    paddingLeft: '2ch',
  },
  cell1: {
      width: '400px',
      fontSize: 23,
      borderBottom: 'none',
      bottom: '0'
  },
  cell2: {
    width:'120px',
    fontSize: 23,
    borderBottom: 'none'
  }
}));

export default function InteractiveList() {
  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem className={classes.listitem}>
                  <ListItemAvatar >
                      <img src={Zeep} alt="not found" width="60" height="60"/>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemText}>
                    <Typography variant="h5">
                            <TableCell className={classes.cell1}>Aloe Vera Zeep</TableCell>
                            <TableCell className={classes.cell2}>14 st</TableCell>
                    </Typography>
                      
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon fontSize="large"/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem className={classes.listitem}>
                  <ListItemAvatar>
                    <img src={Strokorrel} alt="not found" width="60" height="60"/>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemText}>
                    <Typography variant="h5">
                                <TableCell className={classes.cell1}>Strokorrel</TableCell>
                                <TableCell className={classes.cell2}>7 st</TableCell>
                        </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon fontSize="large"/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem className={classes.listitem}>
                  <ListItemAvatar>
                    <img src={Whiskas} alt="not found" width="60" height="60"/>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemText}>
                  <Typography variant="h5">
                            <TableCell className={classes.cell1}>Whiskas kattenvoer junior</TableCell>
                            <TableCell className={classes.cell2}>3 st</TableCell>
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon fontSize="large"/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem className={classes.listitem}>
                  <ListItemAvatar>
                    <img src={Vogel} alt="not found" width="60" height="60"/>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemText}>
                  <Typography variant="h5">
                            <TableCell className={classes.cell1}>Beaphar Druivensuiker</TableCell>
                            <TableCell className={classes.cell2}>6 st</TableCell>
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon fontSize="large"/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>

            <SwipeableList>
              {({ className, ...rest }) => (
                <div className={className}>
                  <SwipeableListItem
                    swipeRight={{
                      content: <div>Delete</div>,
                      action: () => console.info('swipe action triggered'),
                      actionAnimation: ActionAnimations.REMOVE

                    }}
                    {...rest}
                  >
                    <ListItem className={classes.listitem}>
                      <ListItemAvatar>
                        <img src={Vogel} alt="not found" width="60" height="60"/>
                      </ListItemAvatar>
                      <ListItemText className={classes.listItemText}>
                      <Typography variant="h5">
                                <TableCell className={classes.cell1}>Beaphar Druivensuiker</TableCell>
                                <TableCell className={classes.cell2}>6 st</TableCell>
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit">
                          <EditIcon fontSize="large"/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </SwipeableListItem>
                </div>
              )}
            </SwipeableList>
          </div>
        </Grid>
    </div>
  );
}