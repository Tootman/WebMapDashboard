import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { myOb } from './Djs'; // test module
import registerServiceWorker from './registerServiceWorker';
// import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';



// firebase.initializeApp(fireBaseconfig);
// const database = firebase.database();

// console.log(database)
ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();