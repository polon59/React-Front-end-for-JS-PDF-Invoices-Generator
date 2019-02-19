import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.desc}</div>
            </div>
        );
    }
}

export default Navbar;