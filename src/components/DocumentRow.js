import React from 'react';

export default class DocumentRow extends React.Component {
  constructor(props){
    super(props)
  }

  handleDelete = (id)=>{
    this.props.onDelete(id)
  }
  render() {
    return (
      <tr>
        <td className="link-list"><span>&bull;</span><a href={this.props.documentItem.url}>{this.props.documentItem.urlName}</a></td>
        <td><button onClick={()=>this.handleDelete(this.props.documentItem.id)}>Delete</button></td>
      </tr>
    );
  }
}
