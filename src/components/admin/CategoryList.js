import React from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CategoryList extends React.Component{
    constructor(props){
        super(props);
		}

    handleDelete = (id)=>{
      this.props.onDelete(id)
    }

    render(){
			console.log('render');
			console.log(this.props.categoryItems);
        return (
            <div>
              <h1>Category List</h1>
              <Table responsive>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.categoryItems.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <Link to={{
                          pathname: `/editCategory/${item.id}`,
                          state: {categoryItem: item}
                        }}>Edit</Link>                        
                      </td>
                      <td><button onClick={()=>this.handleDelete(item.id)}>Delete</button></td>
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


