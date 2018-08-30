import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import EditLinkForm from './EditLinkForm';


export default class EditLinkPage extends React.Component{
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
      <div id="AdminPage">
        <AdminHeader />
        <Grid fluid={true} >
          <Row>
            <Col sm={3} md={2} className="sidebar">
              <AdminMenu />
            </Col>
            <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
              <h1>Edit Link</h1>
              <EditLinkForm 
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




// <div>
// <Grid>
//   <Row>
//     <Col xs={12}>
//     <Menu />
//     </Col>
//   </Row>           
//   <Row>
//     <Col xs={12} sm={8}>
//     <h1>Edit Link Page</h1>
//       <EditLinkForm 
//         categoryItems={this.state.categoryItems} 
//         subCategoryItems={this.state.subCategoryItems} 
//         linkItem={this.props.location.state.linkItem}
//       />
//     </Col>            
//   </Row>
// </Grid>
// </div>
