import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import CategoryList from "./CategoryList";
import Menu from './Menu';


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
    
    return (
      <div>
          <Menu />
          <Grid>
          <Row>
              <Col xs={12} sm={8}>
              <CategoryList categoryItems={this.state.categoryItems} onDelete={this.onDelete} />
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
