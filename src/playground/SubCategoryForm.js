import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import firebase from "../firebase/firebase3";

export default class SubCategoryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          categoryItems: [],
          categoryId: '',
          title: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    }

    componentDidMount(){
      this.getCategoryData();
    }    
		getCategoryData(){
      console.log('getCategoryData');
      const query = firebase.database().ref('categories').orderByKey();
      query.once('value')
        .then((snapshot)=>{
          const result = [];
          snapshot.forEach((childSnapshot) => {
              let key = childSnapshot.key;
              const obj = Object.assign({"id": key}, childSnapshot.val());
              result.push(obj);
          })
          console.log(result);
          let categoryId = result.length !== 0 ? result[0].id : '';
          this.setState(()=>({ 
            categoryItems: result,
            categoryId
          }));
        });			
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
          categoryId: event.target.value
      });
    }    
    
    handleSubmit(e) {
      console.log('handleSubmit');
      e.preventDefault();
      const {categoryId, title} = this.state;
      const subCategoryRef = firebase.database().ref('subcategories/' + categoryId);
      const item = {title};
      
      subCategoryRef.push(item)
        .then(()=>{
          console.log('Data is saved!');
        }).catch((e)=>{
          console.log('This failed.', e);
        })
      this.setState({
        title: '' // only reset input field
      });
      // Reset form 
      this.setState({
        title: '',
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
                    componentClass="select"
                    value={this.state.categoryId}
                    onChange={this.handleSelectboxChange}>
                  {
                    this.state.categoryItems.map((item)=>{
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
              <Button type="submit">Submit</Button>
            </form>	
          </div>
        );
    }
}



