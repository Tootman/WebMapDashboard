import React, { Component } from 'react';




class Mycomponent extends Component {
 

    render() {
        return ( <div> 
            My Component! and my speed is {this.props.myprop}
            </div>
        );
    }
}

export default Mycomponent;