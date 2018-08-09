import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import Test from './Test';


export default class TestAddLinkPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryItems:[],
      subCategoryItems: [],
    }
  }

  componentDidMount(){
    this.getCategoryData();
    this.getSubCategoryData();
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
        }));
        this.setState(()=>({subCategoryItems: result}));
      });	
  }

  render(){
    console.log('TestControlPage - render');
    //console.log(this.state.subCategoryItems);
    //
    // Preparing default dropdown default value.
    // 'JS' is the default in category dropdown.
    const filteredSubCategory = this.state.subCategoryItems.filter(item => item.categoryId === 'js');
    let subCategoryId = filteredSubCategory.length !==0 ? filteredSubCategory[0].subId : '';  
    console.log(subCategoryId);
    
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={8} >
              <Test 
                categoryItems={this.state.categoryItems} 
                categoryDefaultValue="js" 
                subCategoryItems={this.state.subCategoryItems} 
                subCategoryDefaultValue={subCategoryId} 
              />
            </Col>            
          </Row>
        </Grid>
      </div>
    );
  }
}

