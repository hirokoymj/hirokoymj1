import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

/**
 * Admnin Page Menus 
 */
export default class AdminMenu extends React.Component{
  render(){
    return (
      <ul className="nav nav-sidebar">
        <li><NavLink to="/admin/categoryControlPage" activeClassName="active">Category List</NavLink></li>
        <li><NavLink to="/admin/subCatControlPage" activeClassName="active">Subcategory List</NavLink></li>
        <li><NavLink to="/admin/linkControlPage" activeClassName="active">Link List</NavLink></li>
        <li><NavLink to="/admin/addCategoryPage" activeClassName="active">Create Category</NavLink></li>
        <li><NavLink to="/admin/addSubCategoryPage" activeClassName="active">Create Subcategory</NavLink></li>
        <li><NavLink to="/admin/addLinkPage" activeClassName="active">Create Link</NavLink></li>
      </ul>
    );
  }
}