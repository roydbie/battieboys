import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyCS0X16kqTFKEpLlpFV_cK1cfowG_2Zh-w",
authDomain: "battieboys-542e4.firebaseapp.com",
databaseURL: "https://battieboys-542e4.firebaseio.com",
projectId: "battieboys-542e4",
storageBucket: "battieboys-542e4.appspot.com",
messagingSenderId: "30280066181",
appId: "1:30280066181:web:110675f29799e49a3cf5ec",
measurementId: "G-STRVN33QEV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;