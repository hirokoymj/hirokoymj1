import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class TopNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShow: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState((prevState)=>({
      isShow : !prevState.isShow
    }));
  }
  render(){
    //console.log(this.state.isShow);
    return (
      <header className="site-header">
        <Grid>			
        <div className="site-logo"><a href="/"><img src="/images/logo.png" /></a></div>
        <nav>
          <div className="mobile-icon" onClick={this.handleToggle}><i className="fa fa-bars" aria-hidden="true"></i></div>
          {this.state.isShow}
          <ul className={this.state.isShow ? 'menu show' : 'menu'}>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/document/js">JavaScript</NavLink></li>
            <li><NavLink to="/document/es6">ES6</NavLink></li>
            <li><NavLink to="/document/php">PHP</NavLink></li>
            <li><NavLink to="/document/html">HTML/CSS</NavLink></li>
          </ul>
        </nav>
        </Grid>
      </header>
    );
  }
}


