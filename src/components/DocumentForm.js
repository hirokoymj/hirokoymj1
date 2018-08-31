import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, Panel} from 'react-bootstrap';
import validator from 'validator';
import { toast } from 'react-toastify';

/**
 * Creating new link and save it in firebase.
 */
export default class DocumentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryId: this.props.categoryId,
            subCategoryId: this.props.subCategoryItems.length !== 0 ? this.props.subCategoryItems[0].subId : '',
            urlName: '',
            urlNameErr: null,
            url: '',
            urlErr: null,
        }
    }

    componentDidUpdate(prevProps){
      if(prevProps.subCategoryItems !== this.props.subCategoryItems){
        let defaultSelectValue = this.props.subCategoryItems.length !==0 ? this.props.subCategoryItems[0].subId : '';
        this.setState({
          subCategoryId: defaultSelectValue
        })
      }
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectChange = (e)=>{
        this.setState({
            subCategoryId: e.target.value
        });
    }
   
    handleSubmit = (e)=>{
        e.preventDefault();
        /* Reset error message before validating. */
        const errArray = [];
        let errMsg = '';
        this.setState({
          urlNameErr: null,
          urlErr: null
        });
        
        /* Validating form fields  */
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
              urlNameErr: '',
              url: '',
              urlErr: ''
          });
        }
    }
  
    render(){
        // console.log('LinkForm - render');
        // console.log(this.props.subCategoryItems);
        return (
          <div>
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

