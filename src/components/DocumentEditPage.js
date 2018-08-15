import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../firebase/firebase3";
import DocumentEditForm from './DocumentEditForm';


export default class DocumentEditPage extends React.Component{
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
    console.log('EditLinkPage - render');
    //console.log(this.state.subCategoryItems);
    
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3><img src="/images/dot.png" />Edit Link</h3>
              <DocumentEditForm 
                categoryItems={this.state.categoryItems} 
                subCategoryItems={this.state.subCategoryItems} 
                linkItem={this.props.location.state.linkItem}
              />
            </Col>            
          </Row>
        </Grid>
      </div>
    );
  }
}

