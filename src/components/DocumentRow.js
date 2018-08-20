import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class DocumentRow extends React.Component {
  constructor(props){
    super(props);
  }

  handleDelete = (id)=>{
    this.props.onDelete(id)
  }
  render() {
    console.log('DocumentRow - render');
    return (
      <tr>
        <td className="link-list"><span>&bull;</span><a href={this.props.documentItem.url}>{this.props.documentItem.urlName}</a></td>
        <td className="edit-link">
            <Link to={{ pathname: "/editDoc", state: {linkItem: this.props.documentItem} }}><Button bsStyle="success">Edit</Button></Link>
        </td>
        <td className="delete-link"><Button bsStyle="success" onClick={()=>this.handleDelete(this.props.documentItem.id)}>Delete</Button></td>
      </tr>
    );
  }
}


