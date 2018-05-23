import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { myOb } from './Djs'; // test module
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


const fireBaseconfig = {
    apiKey: "AIzaSyB977vJdWTGA-JJ03xotQkeu8X4_Ds_BLQ",
    authDomain: "fir-realtime-db-24299.firebaseapp.com",
    databaseURL: "https://fir-realtime-db-24299.firebaseio.com",
    projectId: "fir-realtime-db-24299",
    storageBucket: "fir-realtime-db-24299.appspot.com",
    messagingSenderId: "546067641349"
};
firebase.initializeApp(fireBaseconfig);

console.log(myOb)
ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();