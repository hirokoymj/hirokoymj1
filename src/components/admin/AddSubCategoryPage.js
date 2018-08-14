import React from 'react';
import firebase from "../../firebase/firebase3";
import {Grid, Row, Col} from 'react-bootstrap';
import SubCatForm from './SubCatForm';
import Menu from './Menu';

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
        console.log(this.props.history.push('/subCatControlPage'));
      }).catch((e)=>{
        console.log('This failed.', e);
      })  
  }

  render(){
			console.log('render');
        return (
          <div>
            <Menu />
            <Grid>
                <Row>
                    <Col xs={12}>
                      <h1>Create Subcategory</h1>
                      <SubCatForm onSubmit={this.onSubmit} categoryItems={this.state.categoryItems} />
                    </Col>
                </Row>
            </Grid>
          </div>
        );
    }
}


