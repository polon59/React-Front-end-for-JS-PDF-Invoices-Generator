import React, { Component } from 'react';

class NavOption extends Component{
    
    render(){
        const { title, desc } = this.props;
        return(
            <div>
                <div>{title}</div>
                <div>{desc}</div>
            </div>
        );
    }
}

export default NavOption;