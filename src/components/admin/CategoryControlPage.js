import React from 'react';
//import {Grid, Row, Col, Nav, NavItem, Navbar, NavbarHeader, NavDropdown, MenuItem} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import CategoryList from "./CategoryList";


export default class CategoryControlPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryItems:[],
    }
  }

  componentDidMount(){
    this.getCategoryData();
  }

  getCategoryData(){
    console.log('getCategoryData()');
    const query = firebase.database().ref('categories').orderByKey();
    query.on('value', (snapshot)=>{
      const result = [];
      snapshot.forEach((childSnapshot)=>{
          let key = childSnapshot.key;
          const obj = Object.assign({id:key}, childSnapshot.val());
          result.push(obj);
      })
      this.setState(()=>({categoryItems: result}));
    })
  }

  onDelete = (id) => {
    console.log('deleteCategory');
    firebase.database().ref('categories/' + id).remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
  } 

  render(){
    console.log('CategoryControlPage - render');
    /**
     * Check if a user is logged in Firebase. If not, redirect a homepage.
     */
    const user = firebase.auth().currentUser;
    if(!user){
      this.props.history.push('/');
    }
    /* Render */
    return (
      <div id="AdminPage">
        <AdminHeader />
        <Grid fluid={true} >
          <Row>
            <Col sm={3} md={2} className="sidebar">
              <AdminMenu />
            </Col>
            <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
              <h1>Category List</h1>
              <CategoryList categoryItems={this.state.categoryItems} onDelete={this.onDelete} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

