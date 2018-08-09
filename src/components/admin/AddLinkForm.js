import React from 'react';

export default class AddLinkForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categoryId: this.props.categoryDefaultValue,
      subCategoryId: this.props.categoryDefaultValue,
      linkName: '',
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
    this.filterSubCategory(event.target.value);
    this.setState({
      categoryId,
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
    const {categoryId, subCategoryId, linkName, url} = this.state;
    console.log(categoryId);
    console.log(subCategoryId);
    console.log(linkName);
    console.log(url);
  }
  

  render(){
    console.log('Test - render');
    console.log(this.props.categoryItems);
    console.log(this.props.categoryDefaultValue);
    console.log(this.props.subCategoryItems);
    console.log(this.props.subCategoryDefaultValue);

    // Generated sub category dropdown with default category ID is JS.
    const filteredSubCategory = this.props.subCategoryItems.filter(item => item.categoryId === 'js');

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
              <input type="text" name="linkName" value={this.state.linkName} onChange={this.handleChange} />
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