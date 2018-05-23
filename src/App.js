import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Mycomponent from './components/mycomponent';


class App extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10
        }
    }
    componentDidMount(){
      this.setState({
        // state called once after mounting in DOM
        speed : 25
      })
    }

    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo } className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Firebase database < /h1> < /
            header > <
            p className = "App-intro" >
            Speed is { this.state.speed } <
            /p> 
            <Mycomponent myprop={this.state.speed} />
            < /
            div >
        );
    }
}

export default App;