import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import CategoryForm from './CategoryForm';
import Menu from './Menu';

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
      console.log(this.props); //check if history object exists in props.
      // Redirect
      this.props.history.push('/categoryControlPage');
    }).catch((e)=>{
      console.log('Error: CategoryForm handleSubmit', e);
    });    
  }

  render(){
			console.log('render');
        return (
          <div>
            <Menu />
            <Grid>
                <Row>
                    <Col xs={12}>
                      <h1>category form</h1>
                      <CategoryForm onSubmit={this.onSubmit} />
                    </Col>
                </Row>
            </Grid>
          </div>
        );
    }
}


