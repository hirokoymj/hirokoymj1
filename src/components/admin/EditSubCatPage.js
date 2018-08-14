import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import SubCatEditForm from './SubCatEditForm';
import Menu from './Menu';

export default class EditSubCatPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryItems: []
    }
  }
  componentDidMount(){
    this.getCategoryData();
  }    
  getCategoryData(){
    console.log('getCategoryData');
    const query = firebase.database().ref('categories').orderByKey();
    query.once('value')
      .then((snapshot)=>{
        const result = [];
        snapshot.forEach((childSnapshot) => {
            let key = childSnapshot.key;
            const obj = Object.assign({"id": key}, childSnapshot.val());
            result.push(obj);
        })
        console.log(result);
        this.setState(()=>({ 
          categoryItems: result,
        }));
      });			
  } 

  onSubmit = (data)=>{
    console.log('EditSubCatPage - onSubmit');
    console.log(data);

    // // Update database
    firebase.database().ref(`subcategories/${data.categoryId}/${data.subCategoryId}`).update({
      title: data.title
    }).then(()=>{
      console.log('Data is updated!');
      this.props.history.push('/subCatControlPage');
    }).catch((e)=>{
      console.log('This failed.', e);
    });  
  }

  render(){
      console.log('EditSubCatPage - render');
      console.log(this.props.location.state.categoryItem);
      
        return (
          <div>
          <Menu />
            <Grid>
                <Row>
                    <Col xs={12}>
                      <h1>Edit Subcategory Page</h1>
                      <SubCatEditForm onSubmit={this.onSubmit} categoryItems={this.state.categoryItems} subCategoryItem={this.props.location.state.subCategoryItem} />
                    </Col>
                </Row>
            </Grid>
          </div>
        );
    }
}


