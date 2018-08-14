import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
// import Test from './Test';
import LinkList from './LinkList';
import Menu from './Menu';


export default class LinkControlPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subCategoryItems: [],
    }
  }

  componentDidMount(){
    this.getSubCategoryData();
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
    console.log('LinkControlPage - render');
    
    return (
      <div>
          <Menu />
          <Grid>
          <Row>
              <Col xs={12} >
              <h1>Document Links</h1>
              <LinkList subCategoryItems={this.state.subCategoryItems} />
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
