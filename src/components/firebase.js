import * as firebase from "firebase";
import React, { Component } from "react";
import { Button, Input } from "reactstrap";

let database;

export const init = () => {
	let config = {
		apiKey: "AIzaSyB977vJdWTGA-JJ03xotQkeu8X4_Ds_BLQ",
		authDomain: "fir-realtime-db-24299.firebaseapp.com",
		databaseURL: "https://fir-realtime-db-24299.firebaseio.com",
		projectId: "fir-realtime-db-24299",
		storageBucket: "fir-realtime-db-24299.appspot.com",
		messagingSenderId: "546067641349"
	};

	firebase.initializeApp(config);
	database = firebase.database();
};


export const getSnapshot = () => {
  //return database.ref('/').once('value')
  return ("Hello! from firebase")
}


export class Login extends Component {
    attemptLogin() {
        //alert("myFunc1!")
        //this.props.mycb(99);
        alert ("ok trying to log in!")
    }
    render() {
        return (
            <div>
               <p><Button onClick={this.attemptLogin.bind(this)}> Login </Button> </p>
            </div>
        );
    }
}

