import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class SubCategoryEditForm extends React.Component{
    constructor(props){
        super(props);
        const {categoryId, subId, title}= this.props.location.state.subCategoryItem;
        this.state = {
          categoryId: categoryId ? categoryId : '',
          subId: subId ? subId : '',
          title: title ? title : ''
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
      // console.log(this.state.categoryId);
      // console.log(this.state.title);
      // console.log(this.state.subId);
      const{categoryId, title, subId} = this.state;

      // // Update database
      firebase.database().ref('subcategories/' + categoryId + "/" + subId).update({
        title: title
      }).then(()=>{
        console.log('Data is updated!');
        this.props.history.push('/subCatPage');
      }).catch((e)=>{
        console.log('This failed.', e);
      });

      // Reset form 
      this.setState({
        title: '',
        categoryId: ''
      });            
// 

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
                    onChange={this.handleChange}
                    value={this.state.categoryId}
                    readOnly
                  />
              </FormGroup>
              <FormGroup>
                  <ControlLabel>Sub Category Title</ControlLabel>
                  <FormControl
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    autoFocus
                  />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>	
          </div>
        );
    }
}



