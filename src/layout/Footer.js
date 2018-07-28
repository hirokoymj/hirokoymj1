import React from 'react';
import {Grid, Row, Col}from 'react-bootstrap';

export default class Footer extends React.Component{
  render(){
    var currentYear = (new Date()).getFullYear();
    return(
      <div className="site-footer">
      <Grid >
          <Row className="footer-bottom">
              <Col xs={12} sm={9}>
                  <div className="copyright">&copy;<span className="current-year">{currentYear}</span>hirokoymj.com All rights reserved.</div>
              </Col>
              <Col xs={12} sm={3} className="footer-icons">
                  <div className="icons-container">
                      <a href="https://github.com/hirokoymj/" target="_blank" className="icon-github">
                          <i className="fab fa-github"></i>
                      </a>
                      <a href="mailto:hiroko@hirokoymj.com" className="icon-email">
                          <span className="fa-stack fa-lg">
                              <i className="fa fa-circle fa-stack-2x"></i>
                              <i className="fa fa-envelope fa-stack-1x"></i>
                          </span>
                      </a>
                  </div>
              </Col>
          </Row>
      </Grid>
      </div>  
    )
  }

} 