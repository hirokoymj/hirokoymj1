import React from 'react';
import validator from 'validator';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class LinkForm extends React.Component{
    constructor(props){
        console.log('LinkForm - constructor');
        super(props);
        this.state = {
            categoryId: this.props.categoryId,
            subcategoryId: this.props.subcategoryId,
            urlName: '',
            url: '',
            error: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        console.log('LinkForm - componentWillReceiveProps');
        console.log(nextProps);
        this.setState(()=>({categoryId: nextProps.categoryId}));
        this.setState(()=>({subcategoryId: nextProps.subcategoryId}));
    }
    handleChange(e) {
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectboxChange(event) {
        console.log(event.target.value);
        this.setState({
            subcategoryId: event.target.value
        });
    }    
    handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit');

        if(validator.isEmpty(this.state.urlName) || validator.isEmpty(this.state.url)){
          this.setState(()=>({error: "please fill in required fields."}));
        }else{
          const linksRef = firebase.database().ref('links');
          const link = {
            categoryId: this.state.categoryId,
            subcategoryId: this.state.subcategoryId,
            urlName: this.state.urlName,
            url: this.state.url
          }
//          console.log('link', link);
          linksRef.push(link);
          this.setState({
              urlName: '',
              url: '',
              error: undefined
          });
        }
    }
    render(){
        console.log('LinkForm - render');
        const subCategoryItems = this.props.subCategoryItems;
        const categoryId = this.props.categoryId;
        return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              
              <FormGroup>
                  <ControlLabel>Category</ControlLabel>
                  <div>{categoryId}</div>
              </FormGroup>

              <form onSubmit={this.handleSubmit}>
              <FormGroup>
                  <ControlLabel>Sub Category</ControlLabel>
                  <FormControl
                      componentClass="select"
                      value={this.state.subcategoryId}
                      onChange={this.handleSelectboxChange}>
                      {
                          subCategoryItems.map((item)=>{
                              return(
                                  <option value={item.id} key={item.id}>{item.title}</option>
                              )
                          })
                      }
                  </FormControl>
              </FormGroup>
              <FormGroup>
                      <ControlLabel>URL Name</ControlLabel>
                      <FormControl type="text" name="urlName" onChange={this.handleChange} value={this.state.urlName}/>
              </FormGroup>
              <FormGroup>
                          <ControlLabel>URL</ControlLabel>
                          <FormControl type="text" name="url" onChange={this.handleChange} value={this.state.url}/>
              </FormGroup>
              <Button type="submit">Submit</Button>
              </form>            
          </div>
        );
    }
}
