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

    sortByCatAndSubCat = (array)=>{
      const sortedArray = array;
      sortedArray.sort((a,b)=>{
        if(a.categoryId === b.categoryId){
          return (a.title < b.title) ? -1: 1;
        }else{
          return (a.categoryId<b.categoryId) ? -1: 1;
        }
      });
      return sortedArray;
    }

    render(){
      // console.log('SubCatList - render');
      /* Sort by category and sub category. */
      const output = this.sortByCatAndSubCat(this.props.subCategoryItems);

			return(
        <Table className="dataViewTbl">
        <thead>
          <tr>
            <th>Catgory ID</th>
            <th>Sub Category Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody> 
        {
          output.map((item)=>{
            return(
              <tr key={item.subId}>
                <td className="itemID">{item.categoryId}</td>
                <td className="itemTitle">{item.title}</td>
                <td className="function-row">
                  <Link to={{
                    pathname: `/admin/editSubCat/${item.subId}`,
                    state: {subCategoryItem: item}
                  }}><Button className="editBtn">Edit</Button></Link>
                </td>
                <td className="function-row"><Button onClick={()=>this.handleDelete(item.categoryId, item.subId)} className="deleteBtn">Delete</Button></td>                
              </tr>
            )
          })
        }       
        </tbody>
        </Table>          
      )
    }
}



