import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import CategoryForm from './CategoryForm';


export default class EditCategoryPage extends React.Component{
  constructor(props){
    super(props);
  }

  onSubmit = (data)=>{
    console.log('EditCategoryPage - onSubmit');

    firebase.database().ref('categories/' + data.categoryId).update({
      name: data.categoryName
    }).then(()=>{
      console.log('Success: Data has been updated!');
      console.log(this.props); //check if history object exists in props.
      // Redirect
      this.props.history.push('/admin/categoryControlPage');
    }).catch((e)=>{
      console.log('Error: CategoryForm handleSubmit', e);
    });    
  }

  render(){
    console.log('EditCategoryPage - render');
    console.log(this.props.location.state.categoryItem);
      return (
        <div id="AdminPage">
          <AdminHeader />
          <Grid fluid={true} >
            <Row>
              <Col sm={3} md={2} className="sidebar">
                <AdminMenu />
              </Col>
              <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
                <h1>Edit Category</h1>
                <CategoryForm onSubmit={this.onSubmit} categoryItem={this.props.location.state.categoryItem} />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
}

