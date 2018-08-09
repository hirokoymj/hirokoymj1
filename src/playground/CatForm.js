import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class CatForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryId: props.categoryItem ? props.categoryItem.id : '',
      categoryName: props.categoryItem ? props.categoryItem.name : ''
    }
  }

  render(){
    console.log(this.state.categoryId);
    console.log(this.state.categoryName);

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <FormGroup>
        <ControlLabel>Category ID</ControlLabel>
        <FormControl
          type="text"
          name="categoryId"
          placeholder="category ID"
          value={this.state.categoryId}
          onChange={this.handleChange} 														
        />
      </FormGroup>	
      <FormGroup>
        <ControlLabel>Category Name</ControlLabel>
        <FormControl
          type="text"
          name="categoryName"
          placeholder="category name"
          onChange={this.handleChange}
          value={this.state.categoryName}
        />
      </FormGroup>
      <Button type="submit">Edit</Button>
      </form> 
      </div>
    )
  }
}


