import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';

import { BrowserRouter as Router, Switch, Route, withRouter}from 'react-router-dom';

import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import Dashboard from './components/Dashboard.js';
import CreateExercise from './components/exercises/CreateExercise.js';
import ExerciseDetails from './components/exercises/ExerciseDetails.js';
import { Redirect } from 'react-router-dom';


function App() {
  

  return (
    <div className="App">
    <BrowserRouter basename="/reactapp">
      <Router>
      <Navbar />
          <Switch>
            <Route exact path="/reactapp">
              <Redirect to='/signin' />
            </Route>
            <Route path="/home" component={Dashboard}>
              <Dashboard />
            </Route>
            <Route path="/signin" component={withRouter(SignIn)}>

            </Route>
            <Route path="/signup" component={withRouter(SignUp)}>

            </Route>
            <Route path="/create" component={CreateExercise}>
              
            </Route>
            <Route path="/exercise/:id" component={ExerciseDetails}>
              
            </Route>
            <Route path="/exercises" component={Dashboard}>
              <Dashboard />
            </Route>
            <Route path="/progress" component={Dashboard}> 
              <Dashboard />
            </Route>
            <Route path="/settings" component={Dashboard}>
              <Dashboard />
            </Route>
          </Switch>
        </Router>

    </BrowserRouter>

    </div>
  );
}

export default App;
