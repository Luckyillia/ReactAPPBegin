import React, { Component } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-routerdom"; 
class Header extends React.Component { 
    render() { 
        return ( 
            <header> 
                <nav className='nav'> 
                    <ul className="main-nav"> 
                        <li className="nav-item"><Link to="/">Home</Link></li> 
                        <li className="nav-item"><Link to="/about">About</Link></li> 
                    </ul> 
                </nav> 
            </header> 
        ); 
    } 
} 
export default Header;