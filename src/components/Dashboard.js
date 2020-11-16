import React, { Component } from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SettingsIcon from '@material-ui/icons/Settings';
import TimerIcon from '@material-ui/icons/Timer';
import GroupIcon from '@material-ui/icons/Group';

import { BrowserRouter as Router, Switch, Route, NavLink, withRouter}from 'react-router-dom';

import Notifications from './dashboard/Notifications.js';

import { connect } from 'react-redux';
import TabsZelf from './TabsZelf';

import Dropdown from './AXI/Dropdown';
import PlusMinusField from './AXI/PlusMinusField';
import Inputfield from './AXI/InputField';
import Selection from './AXI/Selection';
import GradientList from './AXI/GradientList';
import ProductList from './AXI/ProductList';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ExerciseDetails from './exercises/ExerciseDetails.js';
import { Redirect } from 'react-router-dom';

import SignIn from './auth/SignIn.js';
import SignUp from './auth/SignUp.js';

class Dashboard extends Component {
  render(){

    //console.log(this.props);
    const { exercises, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to='/signin' />
    }

    return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/reactapp">
              <Redirect to='/signin' />
            </Route>
            <Route exact path="/home" component={Notifications}>
              <Notifications />
            </Route>
            <Route exact path="/exercises">
              <TabsZelf exercises={exercises} /><br></br>
            </Route>
            <Route exact path="/progress">
            
              Andere Mjenson
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              
              <Inputfield />
              <Dropdown />
              <PlusMinusField />
              <Selection /><br></br>
              <GradientList />
              <ProductList />
            </Route>
            <Route exact path="/settings">
              Settings
            </Route>
            <Route exact path="/exercise/:id" component={ExerciseDetails}>
              
            </Route>
            <Route path="/signin" component={withRouter(SignIn)}>

            </Route>
            <Route path="/signup" component={withRouter(SignUp)}>

            </Route>
          </Switch>
          
          <footer>
            <NavLink to="/home" activeClassName="activeLink" className="bottomnavitem"><TimerIcon /></NavLink>
            <NavLink to="/exercises" activeClassName="activeLink" className="bottomnavitem"><FormatListNumberedIcon /></NavLink>
            <NavLink to="/progress" activeClassName="activeLink" className="bottomnavitem"><GroupIcon /></NavLink>
            <NavLink to="/settings" activeClassName="activeLink" className="bottomnavitem"><SettingsIcon /></NavLink>
          </footer>
        </Router>
      </div>)
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    exercises: state.firestore.ordered.exercises,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'exercises'
    }
  ])
)(Dashboard);