import authReducer from './authReducer';
import exerciseReducer from './exerciseReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer =  combineReducers({
    auth: authReducer,
    exercise: exerciseReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;