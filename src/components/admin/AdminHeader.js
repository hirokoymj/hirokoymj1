import React from 'react';
import {Navbar, Nav, NavbarHeader, NavItem} from 'react-bootstrap';
import Logout from '../../components/Logout';

export default class AdminHeader extends React.Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="/images/logo-white.png" alt="hirokoymj.com" width="150" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin/categoryControlPage" className="hidden-sm hidden-md hidden-lg">
              Category List
            </NavItem>
            <NavItem eventKey={1} href="/admin/subCatControlPage" className="hidden-sm hidden-md hidden-lg">
              Subcategory List
            </NavItem>
            <NavItem eventKey={1} href="/admin/linkControlPage" className="hidden-sm hidden-md hidden-lg">
              Link List
            </NavItem>                                     
            <NavItem>
              <Logout />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}