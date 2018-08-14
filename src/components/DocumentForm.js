import React from 'react';
import validator from 'validator';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class DocumentForm extends React.Component{
    constructor(props){
        console.log('LinkForm - constructor');
        super(props);
        this.state = {
            categoryId: this.props.categoryId,
            subCategoryId: this.props.subCategoryItems.length !== 0 ? this.props.subCategoryItems[0].subId : '',
            urlName: '',
            url: '',
            error: undefined
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

        if(validator.isEmpty(this.state.urlName) || validator.isEmpty(this.state.url)){
          this.setState(()=>({error: "please fill in required fields."}));
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
          // Reset Form
          this.setState({
              urlName: '',
              url: '',
              error: undefined
          });
        }
    }
    render(){
        console.log('LinkForm - render');
        console.log(this.props.subCategoryItems);

        return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              <FormGroup>
                  <ControlLabel>Category</ControlLabel>
                  <div>{this.props.categoryId}</div>
              </FormGroup>
              <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Subcategory</ControlLabel>
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
              <FormGroup>
                <ControlLabel>URL Name</ControlLabel>
                <FormControl type="text" name="urlName" onChange={this.handleChange} value={this.state.urlName}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>URL</ControlLabel>
                <FormControl type="text" name="url" onChange={this.handleChange} value={this.state.url}/>
              </FormGroup>
              <Button type="submit">Save</Button>
              </form>            
          </div>
        );
    }
}
