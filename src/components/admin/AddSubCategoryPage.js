import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import SubCatForm from './SubCatForm';


export default class AddSubCategoryPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryItems: [],
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
    console.log('AddSubCategoryPage - onSubmit');
    console.log(data);

    const formData = {title: data.title};
    firebase.database().ref(`subcategories/${data.categoryId}`).push(formData)
      .then(()=>{
        console.log('Data is saved!');
        console.log(this.props.history.push('/admin/subCatControlPage'));
      }).catch((e)=>{
        console.log('This failed.', e);
      })  
  }

  render(){
    return (
      <div id="AdminPage">
        <AdminHeader />
        <Grid fluid={true} >
          <Row>
            <Col sm={3} md={2} className="sidebar">
              <AdminMenu />
            </Col>
            <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
              <h1>Create Subcategory</h1>
              <SubCatForm onSubmit={this.onSubmit} categoryItems={this.state.categoryItems} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
    }
}


