import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";
import { Mycomponent, Component2 } from "./components/mycomponent";
import DatePicker from "react-date-picker";

// import L from 'leaflet';

// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
/*
let config = {};
config.params = {
    center: [40.655769, -73.938503],
    zoomControl: false,
    zoom: 13,
    maxZoom: 19,
    minZoom: 11,
    scrollwheel: false,
    legends: true,
    infoControl: false,
    attributionControl: true
};
config.tileLayer = {
    uri: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    params: {
        minZoom: 11,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        id: '',
        accessToken: ''
    }
};
*/

class App extends Component {
	constructor() {
		super();
		this.state = {
			speed: 10,
			//map: null,
			//tileLayer: null,
			homeLink: "Home",
			date: new Date()
		};
		//this._mapNode = null;
		this.handler = this.handler.bind(this);
	}

	handler() {
		this.setState({
			speed: 44
		});
	}

	/*
    init(id) {
        if (this.state.map) return;
        // this function creates the Leaflet map object and is called after the Map component mounts
        let map = L.map(id, config.params);
        L.control.zoom({ position: "bottomleft" }).addTo(map);
        L.control.scale({ position: "bottomleft" }).addTo(map);

        // a TileLayer is used as the "basemap"
        const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

        // set our state to include the tile layer
        this.setState({ map, tileLayer });
    }
    */

	componentDidMount() {
		this.setState({
			// state called once after mounting in DOM
			speed: 25,
			homeLink: "INit Home Link value"
		});
		// code to run just after the component "mounts" / DOM elements are created
		// we could make an AJAX request for the GeoJSON data here if it wasn't stored locally

		// create the Leaflet map object
		// if (!this.state.map) this.init(this._mapNode);
	}

	myCallback(newVal) {
		console.log("callback called!");
		this.setState.speed = newVal;

		console.log("new speed: ", newVal);
		//alert(newVal)
	}

	onGreet(myInt) {
		alert(myInt);
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
		console.log("changing link name called", newName);
	}

	onDateChange = date => {
		this.setState({ date });
		console.log("newState: ", date);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title"> Firebase database </h1>{" "}
				</header>{" "}
				<p className="App-intro"> Speed is {this.state.speed}</p>{" "}
				<Mycomponent
					myprop={this.state.speed}
					mycb={this.myCallback.bind(this)}
				/>
				<Component2
					greet={this.onGreet}
					homelink={this.state.homeLink}
					changeLink={this.onChangeLinkName.bind(this)}
				/>
				<div> link name: </div> {this.state.homeLink}{" "}
				<div>
					Date:
					<DatePicker
						value={this.state.date}
						onChange={this.onDateChange}
					/>
				</div>{" "}
			</div>
		);
	}

	/*
        render() {
             return ( <div id = "mapUI" > 
                   <div ref = {
                    (node) => this._mapNode = node } id = "map" / >
               
                </div>
            );
        }
      */
}

export default App;
