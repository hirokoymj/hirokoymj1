import React from 'react';

export default class DocumentTitleRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="3">
            <h3><img src="/images/dot.png" />{this.props.title}</h3>
        </td>
      </tr>
    );
  }
}



 
