import React from 'react';
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CategoryList extends React.Component{
    constructor(props){
        super(props);
		}

    handleDelete = (id)=>{
      this.props.onDelete(id)
    }

    render(){
      /* Sort by categoryId */
      this.props.categoryItems.sort((a,b)=>(a.id < b.id)? -1: 1);
      
        return (
            <div>
              <Table className="dataViewTbl">
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.categoryItems.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td className="itemID">{item.id}</td>
                      <td className="itemName">{item.name}</td>
                      <td className="function-row">
                        <Link to={{
                          pathname: `/admin/editCategory/${item.id}`,
                          state: {categoryItem: item}
                        }}><Button className="editBtn">Edit</Button></Link>                     
                      </td>
                      <td className="function-row"><Button onClick={()=>this.handleDelete(item.id)} className="deleteBtn">Delete</Button></td>
                    </tr>
                  )
                })
              }
              </tbody>
              </Table>
            </div>
        );
    }
}


