import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
//import { history } from '../routers/AppRouter';
import { connect } from 'react-redux';
//import $ from 'jquery';
import Logout from '../Logout';

class AdminHeader extends React.Component{
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
    // $('.menu a').on('click', function(){
    //   $(".mobile-icon").click();
    // });    
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
        <Grid fluid={true}>			
        <div className="site-logo"><NavLink to="/" exact={true}><img src="/images/logo.png" /></NavLink></div>
          <nav>
            <div className="mobile-icon" onClick={this.handleToggle}><i className="fa fa-bars" aria-hidden="true"></i></div>
            {this.state.isShow}
            <ul className={this.state.isShow ? 'menu show' : 'menu'}>
              <li><NavLink to="/admin/categoryControlPage" className="hidden-sm hidden-md hidden-lg">Category List</NavLink></li>
              <li><NavLink to="/admin/subCatControlPage" className="hidden-sm hidden-md hidden-lg">Subcategory List</NavLink></li>
              <li><NavLink to="/admin/linkControlPage" className="hidden-sm hidden-md hidden-lg">Link List</NavLink></li>
              <li><NavLink to="/admin/addCategoryPage" className="hidden-sm hidden-md hidden-lg">Create Category</NavLink></li>
              <li><NavLink to="/admin/addSubCategoryPage" className="hidden-sm hidden-md hidden-lg">Create Subcategory</NavLink></li>
              <li><NavLink to="/admin/addLinkPage" className="hidden-sm hidden-md hidden-lg">Create Link</NavLink></li>
            </ul>
          </nav>
          <nav className="pull-right">
            <ul className="menu">
              <li>
              { this.props.uid &&
                <div>
                  <Logout /> 
                  <span className="login_user">{this.props.displayName}</span>            
                </div>
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
export default connect(mapStateToProps)(AdminHeader);



