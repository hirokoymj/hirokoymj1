import React from 'react';
import firebase from "../firebase/firebase3";
import { Link } from 'react-router-dom';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Table} from 'react-bootstrap';

export default class CategoryList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          categoryItems: []
      }
    }
    componentDidMount(){
      console.log('CategoryList - componentDidMount');
			this.getCategoryData();
    }
    componentWillUnmount() {this.isUnmounted = true;}
		getCategoryData(){
      console.log(`getCategoryData()`);
			const query = firebase.database().ref('categories').orderByKey();
			query.on('value', (snapshot)=>{
        const result = [];
				snapshot.forEach((childSnapshot)=>{
						let key = childSnapshot.key;
						const obj = Object.assign({id:key}, childSnapshot.val());
						result.push(obj);
				})
        //Check if CategoryList component is unmounted or mounted.
        if(!this.isUnmounted){
          this.setState(()=>({categoryItems: result}));
        }
      })
    }

    
    handleDelete = (id) => {
      console.log('handleDelete');
      firebase.database().ref('categories/' + id).remove()
        .then(function() {
          console.log("Remove succeeded.");
          //this.getCategoryData();
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
    }


    render(){
			//console.log(this.state.categoryItems);
			return(
        <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Catgory ID</th>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>        
					{
						this.state.categoryItems.map((item)=>{
							return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button >
                    <Link to={{
                      pathname: `/edit/${item.id}`,
                      state: {categoryItem: item}
                    }}>Edit</Link>
                    </Button>   
                  </td>
                  <td>
                    <Button bsStyle="danger" onClick={()=>this.handleDelete(item.id)}>Delete</Button>
                  </td>
								</tr>
							)
						})
          }
          </tbody>
          </Table>          
				</div>
      )
    }
}



