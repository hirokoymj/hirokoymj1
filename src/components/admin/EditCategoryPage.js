import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import CategoryForm from './CategoryForm';
import Menu from './Menu';

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
      this.props.history.push('/categoryControlPage');
    }).catch((e)=>{
      console.log('Error: CategoryForm handleSubmit', e);
    });    
  }

  render(){
      console.log('EditCategoryPage - render');
      console.log(this.props.location.state.categoryItem);
      
        return (
          <div>
          <Menu />
            <Grid>
                <Row>
                    <Col xs={12}>
                      <h1>Edit Category </h1>
                      <CategoryForm onSubmit={this.onSubmit} categoryItem={this.props.location.state.categoryItem} />
                    </Col>
                </Row>
            </Grid>
          </div>
        );
    }
}


