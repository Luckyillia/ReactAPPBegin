import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand"><Link to="/">Home</Link></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <div className="navbar-link"><Link to="/">Home</Link></div>
                </li>
                <li class="nav-item">
                    <div className="navbar-link"><Link to="/about">About</Link></div>
                </li>
                <li class="nav-item">
                    <div className="navbar-link"><Link to="/todo">Todo</Link></div>
                </li>
                </ul>
            </div>
        </nav>
      </header>
    );
  }
}

export default Header;