import React from 'react';
import validator from 'validator';
import {FormGroup, FormControl, ControlLabel, Button, Panel} from 'react-bootstrap';
import {FormErrors} from './FormErrors';

export default class DocumentForm extends React.Component{
    constructor(props){
        console.log('LinkForm - constructor');
        super(props);
        this.state = {
            categoryId: this.props.categoryId,
            subCategoryId: this.props.subCategoryItems.length !== 0 ? this.props.subCategoryItems[0].subId : '',
            urlName: '',
            url: '',
            urlNameErr: null,
            urlErr: null,
            formErrors: []
        }
    }

    componentDidUpdate(prevProps){
      console.log('componentDidUpdate');
      console.log(prevProps);
      console.log(this.props);
      if(prevProps.subCategoryItems !== this.props.subCategoryItems){
        let defaultSelectValue = this.props.subCategoryItems.length !==0 ? this.props.subCategoryItems[0].subId : '';
        this.setState({
          subCategoryId: defaultSelectValue
        })
      }
    }
    
    handleChange = (e)=>{
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            subCategoryId: e.target.value
        });
    }
   
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('handleSubmit');
        // Reset
        const errArray = [];
        this.setState({
          urlNameErr: null,
          url: null
        });

        if(validator.isEmpty(this.state.urlName)){
          errArray.push('userName');
          this.setState(()=>({
            urlNameErr: "error",
            formErrors: errArray
          }));
        }
        if(validator.isEmpty(this.state.url)){
          errArray.push('url');
          this.setState(()=>({
            urlErr: "error",
            formErrors: errArray
          }));
          return;
        }
        // Preparing form data
        const {categoryId, subCategoryId, urlName, url} = this.state;
        const data = {
          categoryId,
          subCategoryId,
          urlName,
          url
        }          
        // Submit form data
        this.props.onSubmit(data);
        // Reset form fields
        this.setState({
            urlName: '',
            url: '',
            formErrors: [],
            urlNameErr: '',
            urlErr: ''
        });
    }
  
    render(){
        console.log('LinkForm - render');
        console.log(this.props.subCategoryItems);


        return (
          <div>
            {this.state.formErrors.length !==0 &&
              <FormErrors formErrors={this.state.formErrors} />
            }
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Create New Link</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <ControlLabel>Category:</ControlLabel>
                  <FormControl.Static><b>{this.props.categoryId}</b></FormControl.Static>
                </FormGroup>
                <FormGroup >
                  <ControlLabel>Subcategory:</ControlLabel>
                  <FormControl
                      componentClass="select"
                      value={this.state.subCategoryId}
                      name="subCategoryId"
                      onChange={this.handleSelectChange}>
                      {
                          this.props.subCategoryItems.map((item)=>{
                              return(
                                  <option key={item.subId} value={item.subId}>{item.title}</option>
                              )
                          })
                      }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="urlName" validationState={this.state.urlNameErr}>
                  <ControlLabel>URL Name:</ControlLabel>
                  <FormControl type="text" name="urlName" onChange={this.handleChange} value={this.state.urlName}/>
                </FormGroup>
                <FormGroup controlId="url" validationState={this.state.urlErr}>
                  <ControlLabel>URL:</ControlLabel>
                  <FormControl type="text" name="url" onChange={this.handleChange} value={this.state.url}/>
                </FormGroup>
                <Button type="submit" bsStyle="info">Save</Button>
              </form>  
              </Panel.Body>
            </Panel>            
          </div>
        );
    }
}


