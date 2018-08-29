import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import firebase from "../../firebase/firebase3";

export default class SubCatForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          categoryId: '',
          title: '',
        }
    }
    componentDidMount(){
      console.log('SubCatForm - componentDidMount');
      console.log(this.props.categoryItems); // !!! it's empty array so added componentDidUpdate().
    }

    componentDidUpdate(prevProps){
      console.log('componentDidUpdate');
      if(this.props.categoryItems !== prevProps.categoryItems){
        let defaultSelectValue = this.props.categoryItems.length !==0 ? this.props.categoryItems[0].id : '';
        this.setState({
          categoryId: defaultSelectValue
        })
      }
    }
    handleChange = (e)=> {
        console.log('handleChange');
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectboxChange = (event)=>{
      console.log(event.target.value);
      this.setState({
          categoryId: event.target.value
      });
    }    
    
    handleSubmit = (e)=>{
      console.log('handleSubmit');
      e.preventDefault();
      console.log(this.state);
      const {categoryId, title} = this.state;
      
      const data = {
        categoryId,
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
                    name="categoryId"
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
                <ControlLabel>Sub Category Title</ControlLabel>
                <FormControl
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </FormGroup>
              <Button type="submit" className="submitBtn">Submit</Button>
            </form>	
          </div>
        );
    }
}



