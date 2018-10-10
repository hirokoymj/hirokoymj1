import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TopNav from '../layout/TopNav';
import PageHeader from '../layout/PageHeader';
import WeatherForecast from './WeatherForecast';
import * as qs from 'query-string';

export default class WeatherPage extends React.Component{
  render(){
    console.log('LinkPage - render');
    console.log(this.props);
    const parsed = qs.parse(this.props.location.search);
    console.log(parsed['lat']);
    console.log(parsed['lon']);

    let lat = parsed['lat'];
    let lon = parsed['lon'];




    console.log(this.props.location.search);
    return (
      <div>
        <TopNav />
        <PageHeader pageTitle="5 day Forecast" />
        <Grid className="documentPage">
          <Row>
            <Col xs={12}>
              <WeatherForecast lat={lat} lon={lon} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
