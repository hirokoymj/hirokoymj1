import React from 'react';
import {Grid, Row, Col}from 'react-bootstrap';

const PageHeader = (props) => (
      <h1>{props.pageTitle}</h1>
);
export default PageHeader;



// <Grid fluid={true} className="page-header">
// <Grid>
//     <Row>
//         <Col xs={12}>
//         <h1>
//         {
//             props.category == null ? <span>{props.title}</span> : <span>{props.category}</span>
//         }
//         </h1>
//         </Col>
//     </Row>
// </Grid>
// </Grid>