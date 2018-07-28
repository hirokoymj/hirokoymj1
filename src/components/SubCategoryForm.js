import React from 'react';
import firebase from "../firebase/firebase3";
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table} from 'react-bootstrap';
import uuid from 'uuid';

export default class DocumentForm extends React.Component{
    constructor(){
        super();
        this.state = {
            categoryItems:[],
            categoryId: 'js',
						title: '',
						subcategoryItems: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    }
    componentDidMount(){
			this.getCategoryData();
			this.getSubCategoryData();
		}
		
		getCategoryData(){
      console.log('getCategoryData');
      const query = firebase.database().ref('categories').orderByKey();
      query.once('value')
        .then((snapshot)=>{
          const result = [];
          snapshot.forEach((childSnapshot => {
              let key = childSnapshot.key;
              const obj = Object.assign({"id": key}, childSnapshot.val());
              result.push(obj);
          }))
          //console.log(result);
          this.setState(()=>({ categoryItems: result }));
        });			
		}
		getSubCategoryData(){
      const result = [];
      const query = firebase.database().ref('subcategories').orderByKey();
      query.on('value', (snapshot)=>{
          snapshot.forEach((childSnapshot => {
              let key = childSnapshot.key;
              const obj = Object.assign({id: key}, childSnapshot.val());
              result.push(obj);
          }))
          this.setState(()=>({ subcategoryItems: result }));
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
        e.preventDefault();
        const subCategoryRef = firebase.database().ref('subcategories/' + this.state.categoryId);
        const item = {
            title: this.state.title
        }
        //console.log(item);
        subCategoryRef.push(item);
        this.setState({
          title: '' // only reset input field
        });
    }
    render(){
			console.log('render()');
			//console.log(this.state.subcategoryItems);
      const rows = [];
      let count=0;
			this.state.subcategoryItems.map((item)=>{
				//console.log(item);
				for(let key in item){
					if(key === 'id'){
						var category = item[key];
					}else{
            //console.log(key);
            rows.push(<div>{category} - {item[key]['title']}</div>)
					}
				}
			})
			//console.log(rows);
        return (
            <div>
                <Grid>
										<Row>
											<Col xs={4}>
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
														<ControlLabel>Sub category name</ControlLabel>
														<FormControl
															type="text"
															name="title"
															placeholder="sub category title"
															onChange={this.handleChange}
															value={this.state.title}
														/>
													</FormGroup>
											    <Button type="submit">Submit</Button>
											</form>											
											</Col>
											<Col xs={8}>
                            {rows}
											</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

// <Table responsive className="subCategoryTable">
// <thead>
//   <tr>
//     <th>Category ID</th>
//     <th>Sub Category Name</th>  
//   </tr>
// </thead>
// <tbody>											
// {rows}
// </tbody>	
// </Table>