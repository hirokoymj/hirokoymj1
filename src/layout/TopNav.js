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
        <div className="site-logo"><NavLink to="/" exact={true}><img src="/images/logo.png" /></NavLink></div>
        <nav>
          <div className="mobile-icon" onClick={this.handleToggle}><i className="fa fa-bars" aria-hidden="true"></i></div>
          {this.state.isShow}
          <ul className={this.state.isShow ? 'menu show' : 'menu'}>
            
            <li><NavLink to="/document/js" activeClassName="is-active">JavaScript</NavLink></li>
            <li><NavLink to="/document/es6" activeClassName="is-active">ES6</NavLink></li>
            <li><NavLink to="/document/php" activeClassName="is-active">PHP</NavLink></li>
            <li><NavLink to="/document/html" activeClassName="is-active">HTML/CSS</NavLink></li>
          </ul>
        </nav>
        </Grid>
      </header>
    );
  }
}

// <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>

