import React from 'react';
import firebase from "../firebase/firebase3";
import { Link } from 'react-router-dom';
import {Table, Button} from 'react-bootstrap';

export default class SubCategoryList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          subCategoryItems: []
      }
      //this.removeLinks();
    }

    // removeLinks(){
    //   firebase.database().ref('links').remove();
    // }

    componentDidMount(){
      console.log('CategoryList - componentDidMount');
			this.getSubCategoryData();
    }
    componentWillUnmount() {
      this.isUnmounted = true;
    }
		getSubCategoryData(){
      const query = firebase.database().ref('subcategories').orderByKey();
      query.on('value', (snapshot)=>{
          const result = [];
          snapshot.forEach((childSnapshot => {
              let categoryId = childSnapshot.key;
              const obj = childSnapshot.val();
              for (let key in obj){
                var tmp = {}
                tmp['categoryId'] = categoryId;
                tmp['subId'] = key;
                tmp['title'] = obj[key]['title'];
                result.push(tmp);
              }
              //const obj = Object.assign({id: key}, childSnapshot.val());
          }))
          if(!this.isUnmounted){
            this.setState(()=>({ subCategoryItems: result }));
          }
        });	
    }

    render(){
			console.log(this.state.subCategoryItems);
     
			return(
        <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Catgory ID</th>
              <th>Sub Category Title</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody> 
          {
            this.state.subCategoryItems.map((item)=>{
              return(
                <tr key={item.subId}>
                  <td>{item.categoryId}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={{
                      pathname: `/editsub/${item.subId}`,
                      state: {subCategoryItem: item}
                    }}>Edit</Link>
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



