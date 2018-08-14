import React from 'react';
import {Navbar, Nav, NavbarHeader, NavItem} from 'react-bootstrap';

export default class AdminMenu extends React.Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/addCategoryPage">
              Create Category 
            </NavItem> 
            <NavItem eventKey={2} href="/addSubCategoryPage">
              Create Subcategory 
            </NavItem>  
            <NavItem eventKey={3} href="/addLinkPage">
              Create Link
            </NavItem>
            <NavItem eventKey={5} href="/categoryControlPage">
              Category List 
            </NavItem> 
            <NavItem eventKey={6} href="/subCatControlPage">
              Subcategory List 
            </NavItem>            
            <NavItem eventKey={4} href="/linkControlPage">
              Link List 
            </NavItem>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
    );
  }
}

