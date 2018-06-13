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
import { init as firebaseInit, Login } from "./components/firebase";
import registerServiceWorker from "./registerServiceWorker";

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
									<NavLink href="/TableView/">
										Table view
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/MapView/" >Map view</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/User/">User</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Tools
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem
											href="/ImportShapeFile"	
										>
											Import ShapeFile
										</DropdownItem>
										<DropdownItem href="/ExportShapeFile">
											Export Shapefile
										</DropdownItem>
										<DropdownItem href="/uploadNewMap">
											Upload new map to Cloud
										</DropdownItem>
										<DropdownItem divider />
										<DropdownItem href="/Help"> Help </DropdownItem>
										<DropdownItem href="/gettingStarted">
											Getting started
										</DropdownItem>
										<DropdownItem href="/ORCLInfo">
											More info on ORCL
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Navbar>

					<header className="App-header">
						<h1 className="App-title">
							{" "}
							ORCL Mapping App dashboard{" "}
						</h1>
					</header>
					<Route path="/products" component={Products} />
					<Route path="/User" component={User} />
					<Route path="/TableView" component={TableView} />
					<Route path="/MapView" component={MapView} />
					<Route path="/ImportShapeFile" component={ImportShapeFile} />
					<Route path="/ExportShapeFile" component={ExportShapeFile} />
					<Route exact path='/' component={Home} />
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

/* Products component */
const Products = () => (
	<div>
		<h2>Products</h2>

	</div>

);

/* user component - log in /out */
const User = () => (
	<div>
		<h2>User</h2>
		<p> email and password form goes here</p>
		<Login />
	</div>
);


const TableView = () => (
	<div>
		<h2>TableView</h2>
		<p> Table View and Treeview / object inspector goes here - view data of current map</p>
		<p> View related data of a selected feature/Asset </p>
	</div>
);

 
const MapView = () => (
	<div>
		<h2>MapView</h2>
		<p> basic Leaflet map goes here - view current map</p>
	</div>
);


const ImportShapeFile = () => (
	<div>
		<h2>Import Shape file</h2>
		<p> Browse to a file on local drive</p>
	</div>
);

const ExportShapeFile = () => (
	<div>
		<h2>Export Shape file</h2>
		<p> Export the current map to Shapefile (and to GeoJSON)</p>
	</div>
);

const Home = () => (
	<div>
		<h2>Welcome to ORCL WebMap Admin console</h2>
		<p> what do you want to do?</p>
	</div>
);




export default App;
