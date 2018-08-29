import React from 'react';
import {Navbar, Nav, NavLink, NavbarHeader, NavItem} from 'react-bootstrap';
import Logout from '../../components/Logout';

export default class AdminHeader extends React.Component{
  render(){
    return (
      <div id="adminHeader">
      <Navbar inverse collapseOnSelect fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="/images/logo-white.png" alt="hirokoymj.com" width="150" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin/subCatControlPage">
              test
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}