import React from 'react';
import {Navbar, Nav, NavbarHeader, NavItem} from 'react-bootstrap';

export default class AdminHeader extends React.Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">hirokoym.com</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
            <NavItem eventKey={1} href="#" className="hidden-sm hidden-md hidden-lg">
              test1
            </NavItem>
            <NavItem eventKey={1} href="#" className="hidden-sm hidden-md hidden-lg">
              test2
            </NavItem>                        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}