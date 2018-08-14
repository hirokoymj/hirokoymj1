import React from 'react';
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class MySmallModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.linkItem.id,
      categoryId: this.props.linkItem.categoryId,
      subCategoryId: this.props.linkItem.subCategoryId,
      urlName: this.props.linkItem.urlName,
      url: this.props.linkItem.url,
      categoryItems: [],
      subCategoryItems: []
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
 

  handleCategoryChange = (e)=>{
    console.log(e.target.value);
    let categoryId = e.target.value;
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === categoryId);
    let subCategoryId = filteredSubCategory.length !==0 ? filteredSubCategory[0].subId : '';  
//    console.log(subCategoryId);
    this.setState({
      categoryId,
      subCategoryId
    });
  }
  handleSubCategoryChange = (e)=>{
    console.log(e.target.value);
    let subCategoryId = e.target.value;
    this.setState({
      subCategoryId
    });
  }
  handleChange = (e)=>{
    console.log('handleChange');
    this.setState({
        [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const {categoryId, subCategoryId, urlName, url} = this.state;
    const data = {
      categoryId,
      subCategoryId,
      urlName,
      url
    }
    firebase.database().ref('links/' + this.props.linkItem.id).update(data)
      .then(()=>{
        console.log('Data has been updated!');
        //console.log(this.props);
        this.props.history.push('/linkControlPage'); //Redirect to TestControlPage
      }).catch((e)=>{
        console.log('This failed.', e);
    })    
  }

  render() {
    console.log('MySmallModal - render');

    return (
      <ul>
        <li>{this.props.linkItem.id}</li>
        <li>{this.props.linkItem.categoryId}</li>
        <li>{this.props.linkItem.subCategoryId}</li>
        <li>{this.props.linkItem.urlName}</li>
        <li>{this.props.linkItem.url}</li>
      </ul>
    );
  }
}
