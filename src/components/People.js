import React from 'react';
import { db } from '../services/Firebase.js';


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
        return (
            <div className="people">
                <p>List of people</p>
                {
                    this.state.users && this.state.users.map( user => {
                        return (
                            <div>
                                <p>{user.username}</p>
                                <p>{user.bicepcurl.reps1}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}
export default People;