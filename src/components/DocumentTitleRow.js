import React from 'react';

// export default class DocumentTitleRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td colSpan="3" className="title-row">
//             <h3><img src="/images/dot.png" alt="" />{this.props.title}</h3>
//         </td>
//       </tr>
//     );
//   }
// }


const DocumentTitleRow = (props) => {
  return(
    <tr>
      <td colSpan="3" className="title-row">
          <h3><img src="/images/dot.png" alt="" />{props.title}</h3>
      </td>
    </tr>
  )
}
export default DocumentTitleRow;


 
