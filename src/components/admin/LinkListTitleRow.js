import React from 'react';

export default class LinkTitleRow extends React.Component {
  render() {
    console.log('LinkTitleRow - render');
    return (
      <tr>
        <th>
          <div>
            <h3><img src="/images/dot.png" />{this.props.subcategoryTitle}</h3>
          </div>          
        </th>
      </tr>
    );
  }
}



 
