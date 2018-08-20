import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import firebase, {auth, provider} from '../firebase/firebase3';
import { withRouter } from 'react-router-dom'

class TopNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShow: false,
      user: null
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState((prevState)=>({
      isShow : !prevState.isShow
    }));
  }
  logout = ()=>{
    console.log('logout');
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
      //console.log(this.props.history);
      this.props.history.push('/');
    });    
  }
  login = ()=>{
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user,
          username: user.displayName
        });
      });
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
            {
              this.state.user &&
              <li><NavLink to="/admin/categoryControlPage" activeClassName="is-active">Admin Page</NavLink></li>
            }
          </ul>
        </nav>

        {this.state.user ?
          <div>
            <button onClick={this.logout}>Log Out </button>  
            <span>{this.state.user? this.state.user.displayName : ''}</span>              
          </div>
          :
          <button onClick={this.login}>Log In</button>
        } 
        </Grid>
      </header>
    );
  }
}
export default withRouter(TopNav);

// <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>

