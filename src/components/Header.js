import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar>
          <Container>
            <Navbar.Brand><Link to="/" className="nav-link">React App</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="nav-link">About</Link></Nav.Link>
              <Nav.Link><Link to="/todo" className="nav-link">Todo</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;