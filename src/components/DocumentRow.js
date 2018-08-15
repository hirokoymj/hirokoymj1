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
        <td><Button onClick={()=>this.handleDelete(this.props.documentItem.id)}>Delete</Button></td>
        <td>
            <Link to={{ pathname: "/editDoc", state: {linkItem: this.props.documentItem} }}><Button>Edit</Button></Link>
        </td>
      </tr>
    );
  }
}

