import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const ProjectSummary = () => {

    let iconStyles = {
        fontSize: '18px',
      };


    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Joejoe" secondary="8x 8kg - 8x 10kg - 8x 12kg" />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                    <EditIcon style={iconStyles}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default ProjectSummary;