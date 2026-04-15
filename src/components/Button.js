//przykład przekazywania wielu props’ów 
import React from 'react'; 
import { Component } from 'react'; 
class Button extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    handleClick () { 
        alert('btn was clicked!'); 
    } 
    render () { 
        const bgColor = this.props.bgColor; 
        return ( 
            <button name="{this.props.name}" className={`btn btn-${bgColor}`} onClick={this.handleClick}>{this.props.label}</button> 
        ) 
    } 
} 
export default Button; 