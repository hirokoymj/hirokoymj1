import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';


export default class SubCatEditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          categoryId: this.props.subCategoryItem ? this.props.subCategoryItem.categoryId : '',
          title:      this.props.subCategoryItem ? this.props.subCategoryItem.title : ''
        }
    }
  
    handleChange = (e)=> {
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectboxChange = (e)=>{
      console.log(e.target.value);
      this.setState({
          categoryId: e.target.value
      });
    }    
    
    handleSubmit = (e)=>{
      console.log('handleSubmit');
      e.preventDefault();
      console.log(this.props.subCategoryItem.subId);
      const {categoryId, title} = this.state;
      const data = {
        categoryId,
        subCategoryId: this.props.subCategoryItem.subId,
        title
      }
      this.props.onSubmit(data);
    }

    render(){
      console.log('SubCatForm - render');
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Category ID</ControlLabel>
                  <FormControl
                    componentClass="select"
                    value={this.state.categoryId}
                    onChange={this.handleSelectboxChange}>
                  {
                    this.props.categoryItems.map((item)=>{
                      return (
                        <option value={item.id} key={item.id}>{item.name}</option>
                      )
                    })
                  }														
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Subcategory Name</ControlLabel>
                <FormControl
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>	
          </div>
        );
    }
}



