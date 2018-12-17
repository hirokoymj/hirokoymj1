import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import firebase, {googleAuthProvider} from '../firebase/firebase3';
//import { history } from '../routers/AppRouter';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Logout from '../components/Logout';
import WeatherWidget from '../components/WeatherWidget';
import $ from 'jquery';

/**
 * TopNav for hirokoymj.com. 
 */
class TopNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShow: false,
      mobileMask: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount(){
    // Hide mobile dropdown menu.
    $('.menu a').on('click', function(){
      $(".mobile-icon").click();
    });    
  }

  handleToggle(){
    this.setState((prevState)=>({
      isShow : !prevState.isShow,
      mobileMask: !prevState.mobileMask 
    }));
  }
  
  render(){
    return (
      <header className="site-header">
        <Grid>			
        <div className="site-logo"><NavLink to="/" exact={true}><img src="/images/logo.png" /></NavLink></div>
        <div className="pull-left"><WeatherWidget /></div>
        <nav>
          <div className="mobile-icon" onClick={this.handleToggle}><i className="fa fa-bars" aria-hidden="true"></i></div>
          {this.state.isShow}
          <ul className={this.state.isShow ? 'menu show' : 'menu'}>
            <li><NavLink to="/document/js" activeClassName="is-active">JavaScript</NavLink></li>
            <li><NavLink to="/document/es6" activeClassName="is-active">ES6</NavLink></li>
            <li><NavLink to="/document/react" activeClassName="is-active">React.js</NavLink></li>
            <li><NavLink to="/document/node" activeClassName="is-active">Node.js</NavLink></li>
            <li><NavLink to="/document/html" activeClassName="is-active">HTML/CSS</NavLink></li>
            { 
              this.props.uid &&
              <li><NavLink to="/admin/categoryControlPage" activeClassName="is-active">Admin Page</NavLink></li>
            }
          </ul>
        </nav>
        <nav className="pull-right">
          <ul className="menu">
            <li>
            { this.props.uid ?
              <div>
                <Logout /> 
                <span className="login_user">{this.props.displayName}</span>            
              </div>
              :
              <Login />
            }
            </li>
          </ul>
        </nav>
        </Grid>
        <div className={`mobile-nav-mask hidden ${this.state.mobileMask?'show_mobileMask':''}`}></div>
      </header>
    );
  }
}

/**
 * Connect TopNav component to Redux
 */
const mapStateToProps = (state)=>{
  return {
    uid: state.uid,
    displayName: state.displayName
  }
}
export default connect(mapStateToProps)(TopNav);

