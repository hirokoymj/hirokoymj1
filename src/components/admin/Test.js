import React from 'react';
import firebase from "../../firebase/firebase3";

export default class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //categoryId: this.props.categoryDefaultValue,
      categoryId: 'js',
      subCategoryId: this.props.categoryDefaultValue,
      urlName: '',
      url: ''
    }
    this.handleCategorySelectChange = this.handleCategorySelectChange.bind(this);
    this.handleSubCategorySelectChange = this.handleSubCategorySelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  componentDidMount(){
    console.log('Test - componentDidMount');
    console.log(this.props.categoryDefaultValue);
    console.log(this.props.subCategoryDefaultValue);
  }
  componentWillReceiveProps(nextProps) {
    // Update the chart with new data every time we receive props.
    console.log('componentWillReceiveProps');
    console.log(nextProps);

    if(nextProps.subCategoryDefaultValue !== this.props.subCategoryDefaultValue) {
      // nextProps.myProp has a different value than our current prop
      // so we can perform some calculations based on the new value
      this.setState({
        subCategoryId: nextProps.subCategoryDefaultValue
      });      
    }    
  }

  handleCategorySelectChange(event) {
    console.log(event.target.value);
    let categoryId = event.target.value;
    //this.filterSubCategory(event.target.value);
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === categoryId);
    let subCategoryId = filteredSubCategory.length !==0 ? filteredSubCategory[0].subId : '';  
    console.log(subCategoryId);

    this.setState({
      categoryId,
      subCategoryId
    });
  }

  handleSubCategorySelectChange(event) {
    console.log(event.target.value);
    let subCategoryId = event.target.value;
    this.setState({
      subCategoryId
    });
  }
  handleChange(e) {
    console.log('handleChange');
    this.setState({
        [e.target.name]: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    const {categoryId, subCategoryId, urlName, url} = this.state;
    console.log(categoryId);
    console.log(subCategoryId);
    console.log(urlName);
    console.log(url);
    const data = {
      categoryId,
      subCategoryId,
      urlName,
      url
    }
    firebase.database().ref('links').push(data);
    this.setState({
      categoryId: 'js',
      subCategoryId: '',
      urlName: '',
      url: ''
    });    
  }
  

  render(){
    console.log('Test - render');
    console.log(this.props.categoryItems);
    console.log(this.props.categoryDefaultValue);
    console.log(this.props.subCategoryItems);
    console.log(this.props.subCategoryDefaultValue);

    // Generated sub category dropdown with default category ID is JS.
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === this.state.categoryId);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Category:
              <select name="categoryId" value={this.state.categoryId} onChange={this.handleCategorySelectChange}>
              {
                this.props.categoryItems.map((item)=>{
                  return (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )
                })            
              }
              </select>
            </label>
          </div>
          <div>  
            <label>
              Sub Category:
              <select name="subCategoryId" value={this.state.subCategoryId} onChange={this.handleSubCategorySelectChange}>
              {
                filteredSubCategory.map((item)=>{
                  return (
                    <option key={item.subId} value={item.subId}>{item.title}</option>
                  )
                })            
              }
              </select>
            </label>          
          </div>
          <div>
            <label>
              Link name
              <input type="text" name="urlName" value={this.state.urlName} onChange={this.handleChange} />
            </label>
          </div>
          
          <div>
            <label>
              URL
              <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            </label>
          </div>
          

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}