import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class DocumentRow extends React.Component {
  constructor(props){
    super(props);
  }

  handleDelete = (id)=>{
    this.props.onDelete(id)
  }
  render() {
    console.log('render');
    return (
      <tr>
        <td className="link-list"><span>&bull;</span><a href={this.props.item.url}>{this.props.item.urlName}</a></td>
        <td><button onClick={()=>this.handleDelete(this.props.item.id)}>Delete</button></td>
        <td>
        <Link to={{
          pathname: `/editDoc`,
          state: {linkItem: this.props.item}
        }}>Edit</Link>
        </td>
      </tr>
    );
  }
}


// <Modal show={this.state.show} onHide={this.handleClose}>
// <Modal.Header closeButton>
//   <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>
//   <h4>Text in a modal</h4>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button onClick={this.handleClose}>Close</Button>
//   </Modal.Footer>
// </Modal>