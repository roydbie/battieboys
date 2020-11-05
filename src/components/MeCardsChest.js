import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


class KaartjeOefeningChest extends React.Component {
  render() {
    
    let iconStyles = {
      fontSize: '18px',
    };

  return (
    <div>
      <List className="list">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Bankdrukken" secondary="8x 40kg - 8x 60kg - 7x 70kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Incline dumbell press" secondary="8x 24kg - 8x 26kg - 8x 28kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cable flies" secondary="10x 14kg - 10x 18kg - 10x 23kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Chest press center grip" secondary="10x 32kg - 10x 45kg - 10x 50kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Fly machine" secondary="10x 64kg - 10x 68kg - 10x 73kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
            <EditIcon style={iconStyles} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )};
}

export default KaartjeOefeningChest;