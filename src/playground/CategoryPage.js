import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import AddCategory from '../components/AddCategory';
import CategoryList from '../components/CategoryList';

export default class CategoryPage extends React.Component{
  render(){
    return (
      <div>
        <Grid fluid={true}>
          <Grid>
              <Row>
                  <Col xs={12}>
                    <h1>Category Control Page</h1>
                  </Col>
              </Row>
          </Grid>
        </Grid>      
        <Grid>
          <Row>
              <Col xs={12} sm={4}>
                <AddCategory />
              </Col>
              <Col xs={12} sm={8}>
                <CategoryList />
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

