import React from 'react';

export default class SubCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    const title = this.props.title;
    return (
      <tr>
        <td>{category}</td>
        <td>{title}</td>
      </tr>
    );
  }
}
