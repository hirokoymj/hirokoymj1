import React from 'react';
import {Grid, Row, Col}from 'react-bootstrap';

const PageHeader = (props) => (
  <Grid fluid={true} className="page-header">
    <Grid>
        <Row>
            <Col xs={12}>
              <h1>{props.pageTitle}</h1>
            </Col>
        </Row>
    </Grid>
  </Grid>      
);
export default PageHeader;


