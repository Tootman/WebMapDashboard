import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
// import { Mycomponent, Component2 } from "./components/mycomponent";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import {init as firebaseInit, Login} from './components/firebase';
import registerServiceWorker  from './registerServiceWorker';

class App extends Component {
	/*
	constructor() {
		super();
		/*
		this.state = {
			speed: 10,
			//map: null,
			//tileLayer: null,
			homeLink: "Home",
			date: new Date()
		};
		//this._mapNode = null;
		this.handler = this.handler.bind(this);
	*/

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
		firebaseInit();
		registerServiceWorker();
		
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	/*
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
		//this.setState({
		// state called once after mounting in DOM
		// speed: 25,
		// homeLink: "INit Home Link value"
		//});
		// code to run just after the component "mounts" / DOM elements are created
		// we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
		// create the Leaflet map object
		// if (!this.state.map) this.init(this._mapNode);
	}

	/*
	myCallback(newVal) {
		console.log("callback called!");
		this.setState.speed = newVal;

		console.log("new speed: ", newVal);
		//alert(newVal)
	}
	*/

	/*
	onGreet(myInt) {
		alert(myInt);
	}

    /*
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

	*/

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar color="light" light expand="md">
						<NavbarBrand href="/">WebMap</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/components/">
										Table view
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://github.com/reactstrap/reactstrap">
										Map view
									</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Tools
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>Import  ShapeFile</DropdownItem>
										<DropdownItem>Export Shapefile</DropdownItem>
										<DropdownItem>Upload new map to Cloud</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>Help</DropdownItem>
										<DropdownItem>Getting started</DropdownItem>
										<DropdownItem>More info on ORCL</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Navbar>

					<header className="App-header">
						<h1 className="App-title"> ORCL Mapping App dashboard  </h1>
					</header>
					<Login/>
					{/* <p className="App-intro"> Speed is {this.state.speed}</p>
				<Mycomponent
					myprop={this.state.speed}
					mycb={this.myCallback.bind(this)}
				/>
				<Component2
					greet={this.onGreet}
					homelink={this.state.homeLink}
					changeLink={this.onChangeLinkName.bind(this)}
				/>
				<div> link name: </div> {this.state.homeLink}
			*/}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
