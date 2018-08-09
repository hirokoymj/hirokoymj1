import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class CategoryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          categoryId: this.props.categoryItem ? this.props.categoryItem.id : '',
          categoryName: this.props.categoryItem ? this.props.categoryItem.name : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
		}
    handleChange(e) {
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
      console.log('handleSubmit');
      e.preventDefault();
      this.props.onSubmit({
        categoryId: this.state.categoryId,
        categoryName: this.state.categoryName
      });
      // Reset form 
      this.setState({
        categoryId: '',
        categoryName: '',
      });            
    }

    render(){
      //console.log('CategoryForm - render');
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
                autoFocus 														
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


// <form onSubmit={this.handleSubmit}>
// <input type="text" name="categoryId" value={this.state.categoryId} onChange={this.handleChange} />
// <input type="text" name="categoryName" value={this.state.categoryName} onChange={this.handleChange} />
// <input type="submit" value="Submit" />
// </form>



