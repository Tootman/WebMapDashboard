import React, { Component } from "react";
import { Button, Input } from "reactstrap";

export class Mycomponent extends Component {
    myFunc1() {
        //alert("myFunc1!")
        this.props.mycb(99);
    }

    render() {
        return (
            <div>
                My Component!and my speed is {this.props.myprop}{" "}
                <Button color="primary" onClick={this.myFunc1.bind(this)}>
                    change speed to new speed
                </Button>
            </div>
        );
    }
}

export class Component2 extends Component {
    constructor(props) {
        super();
        this.state = {
            homeLink: "changed link!",
            age: 27
        };
    }

    myFunc1() {
        //alert("myFunc1!")
        this.props.mycb(55);
    }

    onChangeLink() {
        //this.props.changeLink(this.state.homeLink)          // use if you want to keep the state persistant in this control
        this.props.changeLink("hello");
    }

    anotherChange() {
        this.setState({
            homeLink: "yet another state!"
        });
    }
    anotherChange2() {
        this.props.changeLink("sdoijsdiofjsdofi jsfdio j");
    }

    render() {
        return (
            <div>
                <button onClick={this.onChangeLink.bind(this)}>
                    {" "}
                    submit change
                </button>
                <button onClick={this.anotherChange.bind(this)}>
                    Another changek{" "}
                </button>
                <button color="danger" onClick={this.anotherChange2.bind(this)}>
                    {" "}
                    send more junk{" "}
                </button>
                <input type="text" name="lname" />
            </div>
        );
    }
}
