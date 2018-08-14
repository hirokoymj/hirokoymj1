import React from 'react';
import firebase from "../../firebase/firebase3";
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class CategoryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          categoryId: this.props.categoryItem ? this.props.categoryItem.id : '',
          categoryName: this.props.categoryItem ? this.props.categoryItem.name : ''
        }
    }
    
    handleChange = (e)=>{
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e)=>{
      console.log('handleSubmit');
      e.preventDefault();
      const data = {
        categoryId: this.state.categoryId,
        categoryName: this.state.categoryName
      }
      this.props.onSubmit(data);
    }

    render(){
			console.log('render');
			//console.log(this.state.categoryItems);
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <ControlLabel>Category ID</ControlLabel>
                  <FormControl
                    type="text"
                    name="categoryId"
                    value={this.state.categoryId}
                    onChange={this.handleChange} 														
                  />
                </FormGroup>	
                <FormGroup>
                  <ControlLabel>Category Name</ControlLabel>
                  <FormControl
                    type="text"
                    name="categoryName"
                    onChange={this.handleChange}
                    value={this.state.categoryName}
                  />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </form>
            </div>
        );
    }
}


