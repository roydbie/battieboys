import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';


class KaartjeOefeningTricep extends React.Component {
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
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cable tricep" secondary="8x 8kg - 8x 10kg - 8x 12kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Triangle tricep" secondary="12x 10kg - 10x 15kg - 8x 20kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EditIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single cable tricep" secondary="12x 9kg - 10x 14kg - 8x 18kg" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
            <EditIcon style={iconStyles}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )};
}

export default KaartjeOefeningTricep;