import React from 'react';
import firebase from "../firebase/firebase3";
import { withRouter } from 'react-router';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import validator from 'validator';
import { toast } from 'react-toastify';
import { history } from '../routers/AppRouter';

/**
 * Editing a techincal document link.
 */
export default class DocumentEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.linkItem.id,
      categoryId: this.props.linkItem.categoryId,
      subCategoryId: this.props.linkItem.subCategoryId,
      urlName: this.props.linkItem.urlName,
      urlNameErr: null,
      url: this.props.linkItem.url,
      urlErr: null
    }
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
    /* Get form data  */
    const {categoryId, subCategoryId, urlName, url} = this.state;

    /* Reset error handling values. */
    const errArray = [];
    let errMsg = '';
    this.setState({
      urlNameErr: null,
      urlErr: null
    });
    
    /* Validating form  */
    if(validator.isEmpty(this.state.urlName)){
      errArray.push('userName');
      errMsg = "Please fill in required field(s).";
      this.setState(()=>({
        urlNameErr: "error",
      }));
    }
    if(validator.isEmpty(this.state.url)){
      errArray.push('url');
      errMsg = "Please fill in required field(s).";
      this.setState(()=>({
        urlErr: "error",
      }));
    }else{
      if(!validator.isURL(this.state.url)){
        errArray.push('url');
        errMsg = "URL format is wrong.";
        console.log('FORMAT ERROR');
        this.setState(()=>({
          urlErr: "error",
        }));
      }
    }
    
    if(errArray.length > 0){
      toast.error(errMsg);
    }else{
      const data = {
        categoryId,
        subCategoryId,
        urlName,
        url
      }
      firebase.database().ref('links/' + this.props.linkItem.id).update(data)
        .then(()=>{
          history.push(`/document/${this.state.categoryId}`);
        }).catch((e)=>{
          console.log('This failed.', e);
      })  
    }
  }
  

  render(){
    console.log('EditForm - render');
    console.log(this.props.categoryItems);
    console.log(this.props.subCategoryItems);
    // Generated sub category dropdown with default category ID is JS.
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === this.state.categoryId);

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="documentEditForm">
          <FormGroup>
            <ControlLabel>Category:</ControlLabel>
            <FormControl
              componentClass="select"
              name="categoryId"
              value={this.state.categoryId} 
              onChange={this.handleCategoryChange}>
              {
                this.props.categoryItems.map((item)=>{
                  return (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )
                })            
              }
            </FormControl>  
          </FormGroup>
          <FormGroup>
            <ControlLabel>Sub Category:</ControlLabel>
            <FormControl
              componentClass="select"
              name="subCategoryId" 
              value={this.state.subCategoryId} 
              onChange={this.handleSubCategoryChange}>
            {
              filteredSubCategory.map((item)=>{
                return (
                  <option key={item.subId} value={item.subId}>{item.title}</option>
                )
              })            
            }
            </FormControl>            
          </FormGroup>
          <FormGroup controlId="urlName" validationState={this.state.urlNameErr}>
            <ControlLabel>URL name</ControlLabel>
            <FormControl
                type="text"
                name="urlName"
                value={this.state.urlName}
                onChange={this.handleChange} />            
          </FormGroup>
          <FormGroup controlId="url" validationState={this.state.urlErr}>
            <ControlLabel>URL</ControlLabel>
            <FormControl
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleChange} />            
          </FormGroup>
          <Button type="submit" className="btn btn-success editBtn">Edit</Button>          
        </form>
      </div>
    )
  }
}


