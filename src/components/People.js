import React from 'react';
import { db } from '../services/Firebase.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


class People extends React.Component {

    state = { 
        users: null
    };

    componentDidMount(){
        console.log('mounted');
        db.collection('users')
            .get()
            .then( snapshot => {
                const users = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    users.push(data);
                });
                //console.log(snapshot);
                this.setState({ users: users});
        })
        .catch( error => console.log(error));
    };

    render(){
        let iconStyles = {
            fontSize: '18px',
          };

        return (
            <div className="people">
                <p>List of people</p>
                <List className="listpeople">
                       
            
                {
                    this.state.users && this.state.users.map( user => {
                        return (
                            <div>
                            <ListItem className="listitem">
                                <ListItemAvatar>
                                    <Avatar>
                                    <PersonOutlineIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.username}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <ArrowForwardIosIcon style={iconStyles}/>
                                    </IconButton >
                                </ListItemSecondaryAction>
                            </ListItem>
                            </div>
                        )
                    })
                }
                </List>
            </div>
        )
    };
}
export default People;