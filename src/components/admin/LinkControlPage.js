import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import LinkList from './LinkList';


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
      <div id="AdminPage">
        <AdminHeader />
        <Grid fluid={true} >
          <Row>
            <Col sm={3} md={2} className="sidebar">
              <AdminMenu />
            </Col>
            <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
              <h1>Link List</h1>
                <LinkList subCategoryItems={this.state.subCategoryItems} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}




// <div>
// <AdminMenu />
// <Grid>
// <Row>
//     <Col xs={12} >
//     <h1>Document Links</h1>
//     <LinkList subCategoryItems={this.state.subCategoryItems} />
//     </Col>
// </Row>
// </Grid>
// </div>