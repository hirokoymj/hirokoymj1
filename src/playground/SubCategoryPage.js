import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SubCategoryForm from '../components/SubCategoryForm';
import SubCategoryList from '../components/SubCategoryList';

export default class CategoryPage extends React.Component{
  render(){
    return (
      <div>
        <Grid fluid={true}>
          <Grid>
              <Row>
                  <Col xs={12}>
                    <h1>Sub Category Control Page</h1>
                  </Col>
              </Row>
          </Grid>
        </Grid>      
        <Grid>
          <Row>
              <Col xs={12} sm={4}>
                <SubCategoryForm />
              </Col>
              <Col xs={12} sm={8}>
                <SubCategoryList />
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

