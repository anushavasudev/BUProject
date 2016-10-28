import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import request from 'superagent';
import Content from './try.jsx';
import Header from './Header.jsx';
import MyForm1 from './MyForm1.jsx';
import MyForm2 from './MyForm2.jsx';
import MyForm3 from './MyForm3.jsx';
import MyForm4 from './MyForm4.jsx';
import Nav from 'react-bootstrap/lib/Nav.js';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand.js';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse.js';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader.js';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';



class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="http://localhost:8090/Header">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        
           {this.props.children}
         </div>
      );
   }
}


export default App;