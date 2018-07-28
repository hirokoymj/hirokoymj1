import React from 'react';
import firebase from "../firebase/firebase3";
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table} from 'react-bootstrap';

export default class DocumentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryName: '',
						categoryId: '',
						categoryItems: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
//        this.handelDelete = this.handelDelete.bind(this);
		}
		componentDidMount(){
			const query = firebase.database().ref('categories').orderByKey();
			query.on('value', (snapshot)=>{
        const result = [];
        snapshot.forEach((childSnapshot)=>{
					// console.log(childSnapshot.val());
					// console.log(childSnapshot.key);
					const obj = {};
					obj['id'] = childSnapshot.key;
					obj['name'] = childSnapshot.val().name;
					result.push(obj);
				})
				this.setState(()=>({ categoryItems: result }))
			})
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
      this.writeCategoryData(this.state.categoryId, this.state.categoryName);
      this.setState({
          categoryName: '',
          categoryId: '',
      });
    }
    /**
     * Create Category Data.
     * @param {string} categoryId
     * @param {string} name - category name.
     * @example
     * writeCategoryData('js', "JavaScript");
     */  
    writeCategoryData(categoryId, name){
      firebase.database().ref('categories/' + categoryId).set({
          name
      });
    }
    handleDelete = (id) => {
      console.log('handleDelete');
      firebase.database().ref('categories/' + id).remove()
        .then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
    }

    render(){
			console.log('render');
			console.log(this.state.categoryItems);
        return (
            <div>
                <Grid>
                    <Row>
												<Col xs={4}>
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
													<Button type="submit">Submit</Button>
												</form>
												</Col>
												<Col xs={8}>
                          <Table responsive>
                          <thead>
                            <tr>
                              <th>Category ID</th>
                              <th>Category Name</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            this.state.categoryItems.map((item)=>{
                              return (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td><button onClick={()=>this.handleDelete(item.id)}>Delete</button></td>
                                </tr>
                              )
                            })
                          }
                          </tbody>
                          </Table>
												</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


