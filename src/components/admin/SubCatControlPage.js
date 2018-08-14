import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import SubCatList from "./SubCatList";
import Menu from './Menu';


export default class SubCatControlPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subCategoryItems:[],
    }
  }

  componentDidMount(){
    this.getSubCategoryData();
  }
  componentWillUnmount(){
    this.isUnmounted = true;
  }

  getSubCategoryData(){
    const query = firebase.database().ref('subcategories').orderByKey();
    query.on('value', (snapshot)=>{
        const result = [];
        snapshot.forEach((childSnapshot => {
            let categoryId = childSnapshot.key;
            const obj = childSnapshot.val();
            for (let key in obj){
              var tmp = {}
              tmp['categoryId'] = categoryId;
              tmp['subId'] = key;
              tmp['title'] = obj[key]['title'];
              result.push(tmp);
            }
            //const obj = Object.assign({id: key}, childSnapshot.val());
        }))
        if(!this.isUnmounted){
          this.setState(()=>({ subCategoryItems: result }));
        }
      });	
  }
  onDelete = (categoryId, subCategoryId) => {
    console.log(`SubCatControlPage - onDelete(${categoryId}, ${subCategoryId})`);
    firebase.database().ref(`subcategories/${categoryId}/${subCategoryId}`).remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
  } 

  render(){
    console.log('SubCatControlPage - render');
    return (
      <div>
          <Menu />
          <Grid>
          <Row>
              <Col xs={12} sm={8}>
              <h1>Subcategory List Page</h1>
              <SubCatList subCategoryItems={this.state.subCategoryItems} onDelete={this.onDelete}/>
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
