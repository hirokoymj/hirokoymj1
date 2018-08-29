import React from 'react';
import firebase from "../../firebase/firebase3";
import {FormGroup, FormControl, ControlLabel, Button, Table} from 'react-bootstrap';
import { withRouter } from "react-router-dom";


//export default class Test extends React.Component{
class LinkForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //categoryId: this.props.categoryDefaultValue,
      categoryId: 'js',
      subCategoryId: this.props.categoryDefaultValue,
      urlName: '',
      url: ''
    }
  }

  // componentDidMount(){
  //   console.log('Test - componentDidMount');
  //   // console.log(this.props.categoryDefaultValue);
  //   // console.log(this.props.subCategoryDefaultValue);
  // }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(nextProps);

    if(nextProps.subCategoryDefaultValue !== this.props.subCategoryDefaultValue) {
      this.setState({
        subCategoryId: nextProps.subCategoryDefaultValue
      });      
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
    console.log('handleSubCategoryChange');
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
    console.log('handleSubmit')
    e.preventDefault();
    const {categoryId, subCategoryId, urlName, url} = this.state;
    // console.log(categoryId);
    // console.log(subCategoryId);
    // console.log(urlName);
    // console.log(url);
    const data = {
      categoryId,
      subCategoryId,
      urlName,
      url
    }
    firebase.database().ref('links').push(data);
    this.setState({
      categoryId: this.props.categoryDefaultValue, //'js'
      subCategoryId: this.props.subCategoryDefaultValue, //"-LJ6Ug-cfvazlGL3zgof"
      urlName: '',
      url: ''
    });  
    this.props.history.push("/admin/linkControlPage");
  }
  

  render(){
    console.log('Test - render');
    // console.log(this.props.categoryItems);
    // console.log(this.props.categoryDefaultValue);
    // console.log(this.props.subCategoryItems);
    // console.log(this.props.subCategoryDefaultValue);

    // Generated sub category dropdown with 'js' category.
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === this.state.categoryId);

    // const {id, subId} = filteredSubCategory;
    // console.log(id);
    // console.log(subId);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Category</ControlLabel>
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
            <FormGroup>
              <ControlLabel>Link name</ControlLabel>
              <FormControl
                type="text"
                name="urlName"
                value={this.state.urlName}
                onChange={this.handleChange} />
            </FormGroup>  
            <FormGroup>
              <ControlLabel>URL</ControlLabel>
              <FormControl
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleChange} />
            </FormGroup>  
            <Button type="submit" className="submitBtn">Submit</Button>
        </form>
      </div>        
    )
  }
}

export default withRouter(LinkForm)


