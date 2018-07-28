import React from 'react';

export default class LinkRow extends React.Component {
  render() {
    let url = this.props.url;
    let urlName = this.props.urlName;
    return (
      <tr>
        <td className="link-list"><span>&bull;</span><a href={url}>{urlName}</a></td>
      </tr>
    );
  }
}
