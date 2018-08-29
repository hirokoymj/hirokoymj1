import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import CategoryForm from './CategoryForm';


export default class AddCategoryPage extends React.Component{
  constructor(props){
    super(props);
  }

  onSubmit = (data)=>{
    console.log('AddCategoryPage - onSubmit');
    console.log(data);

    firebase.database().ref('categories/' + data.categoryId).set({
      name: data.categoryName
    }).then(()=>{
      console.log('Success: Data has been submitted!');
      /** check if history object exists in props */
      console.log(this.props);
      /** Redirect */
      this.props.history.push('/admin/categoryControlPage');
    }).catch((e)=>{
      console.log('Error: CategoryForm handleSubmit', e);
    });    
  }

  render(){
        return (
          <div id="AdminPage">
            <AdminHeader />
            <Grid fluid={true} >
              <Row>
                <Col sm={3} md={2} className="sidebar">
                  <AdminMenu />
                </Col>
                <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
                  <h1>Create New Category </h1>
                  <CategoryForm onSubmit={this.onSubmit} />
                </Col>
              </Row>
            </Grid>
        </div>
        );
    }
}

