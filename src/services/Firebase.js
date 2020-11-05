import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAiDee-W2PtvhFL-XBDQxxPpTIowoDxTN4",
authDomain: "battieboys.firebaseapp.com",
databaseURL: "https://battieboys.firebaseio.com",
projectId: "battieboys",
storageBucket: "battieboys.appspot.com",
messagingSenderId: "609751020539",
appId: "1:609751020539:web:4e580e66c443ac290f915e",
measurementId: "G-FVF82920BN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;