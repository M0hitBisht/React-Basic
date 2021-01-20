import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faHome, faList, faPlus, faSearchPlus, faUserEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Navbarmenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Weocome to Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/a">Home<FontAwesomeIcon icon={faHome} color="Green" /></Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/list">List<FontAwesomeIcon icon={faList} color="Green" /></Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create<FontAwesomeIcon icon={faPlus} color="Green" /></Link></Nav.Link>
              <Nav.Link href="#link"> <Link to="/search">Search<FontAwesomeIcon icon={faSearchPlus} color="Green" /></Link></Nav.Link>
              {/* <Nav.Link href="#link"><Link to="/update">Update<FontAwesomeIcon icon={faUserEdit} color="Green" /></Link></Nav.Link> */}
            
              {
                localStorage.getItem("login") ?
                  <Nav.Link href="#link"><Link to="/logout">LogOut<FontAwesomeIcon icon={faUser} color="Green" /></Link></Nav.Link>
                  :
                  <Nav.Link href="#link"><Link to="/login">LogIN<FontAwesomeIcon icon={faUser} color="Green" /></Link></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Navbarmenu;