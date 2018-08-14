import React from 'react';
import { Link } from 'react-router-dom';
import {Table, Button} from 'react-bootstrap';

export default class SubCatList extends React.Component{
    constructor(props){
      super(props);
    }

    handleDelete = (categoryId, subCategoryId) =>{
      this.props.onDelete(categoryId, subCategoryId);
    }

    render(){
			console.log('SubCatList - render');
			return(
        <Table responsive>
        <thead>
          <tr>
            <th>Catgory ID</th>
            <th>Sub Category Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
        {
          this.props.subCategoryItems.map((item)=>{
            return(
              <tr key={item.subId}>
                <td>{item.categoryId}</td>
                <td>{item.title}</td>
                <td>
                  <Link to={{
                    pathname: `/editSubCat/${item.subId}`,
                    state: {subCategoryItem: item}
                  }}>Edit</Link>
                </td>
                <td><button onClick={()=>this.handleDelete(item.categoryId, item.subId)}>Delete</button></td>                
              </tr>
            )
          })
        }       
        </tbody>
        </Table>          
      )
    }
}



