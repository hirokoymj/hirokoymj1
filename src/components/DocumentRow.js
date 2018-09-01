import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DeleteModal from './DeleteModal';

export default class DocumentRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }
  }

  handleDelete = (id)=>{
    this.props.onDelete(id)
  }

  openModal = () =>{
    this.setState(()=>({
      modalIsOpen: true
    }));
  }

  closeModal = () =>{
    this.setState(()=>({
      modalIsOpen: false
    }));
  }

  render() {
    console.log('DocumentRow - render');
    return (
      <tr>
        <td className="link-list"><span>&bull;</span><a href={this.props.documentItem.url}>{this.props.documentItem.urlName}</a></td>
        <td className="function-row">
            <Link to={{ pathname: "/editDoc", state: {linkItem: this.props.documentItem} }}><Button bsStyle="success">Edit</Button></Link>
        </td>
        <td className="function-row">
          <Button bsStyle="success" onClick={this.openModal}>Delete</Button>
          <DeleteModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} handleDelete={this.handleDelete} documentId={this.props.documentItem.id} />
        </td>
      </tr>
    );
  }
}


// <Button bsStyle="success" onClick={()=>this.handleDelete(this.props.documentItem.id)}>Delete</Button>



