import React from 'react';
import { db } from '../services/Firebase.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EditIcon from '@material-ui/icons/Edit';


class ChestEx extends React.Component {

    state = { 
        chestex1: null,
        chestex2: null
    };

    componentDidMount(){
        db.collection('users').doc('zpXCkFVQHE6TiAhKmlvu').collection('bankdrukken').orderBy('date', 'desc').limit(1)
            .get()
            .then( snapshot => {
                const chestex1 = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    chestex1.push(data);
                });
                this.setState({ chestex1: chestex1});
        })
        .catch( error => console.log(error));

        db.collection('users').doc('zpXCkFVQHE6TiAhKmlvu').collection('inclinedumbellpress').orderBy('date', 'desc').limit(1)
            .get()
            .then( snapshot => {
                const chestex2 = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    chestex2.push(data);
                });
                this.setState({ chestex2: chestex2});
        })
        .catch( error => console.log(error));
    };

    render(){
        let iconStyles = {
            fontSize: '18px',
          };

        return (
                <List className="list">
                       
            
                {
                    this.state.chestex1 && this.state.chestex1.map( user => {
                        const text = user.reps1 + "x " + user.weight1 + "kg - " + user.reps2 + "x " + user.weight2 + "kg - " + user.reps3 + "x " + user.weight3 + "kg";
                        return (
                            <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FitnessCenterIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.name}secondary={text} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit">
                                    <EditIcon style={iconStyles}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </div>
                        )
                    })
                }
                {
                    this.state.chestex2 && this.state.chestex2.map( user => {
                        const text = user.reps1 + "x " + user.weight1 + "kg - " + user.reps2 + "x " + user.weight2 + "kg - " + user.reps3 + "x " + user.weight3 + "kg";
                        return (
                            <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FitnessCenterIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.name}secondary={text} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit">
                                    <EditIcon style={iconStyles}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </div>
                        )
                    })
                }
                </List>
        )
    };
}
export default ChestEx;