import React from 'react';
import {Navbar, Nav, NavbarHeader, NavItem} from 'react-bootstrap';

export default class AdminHeader extends React.Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">hirokoym.com</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}