import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class HomeBio extends React.Component {
    render() {
        console.log('HomeBio-render()');
        return (
            <Grid>
                <Row className="homeBio">
                    <Col xs={12} sm={6}>
                    <div className="section-title">
                      <h3><img src="/images/dot.png" alt="About Me" /> About Me</h3>
                      <p>I am a Front-End web developer in Los Angeles over ten years. My strong languages are <b>JavaScript and React.js</b> and I will learn and update new technologies using <a href="http://www.udemy.com">Udemy.com</a> and local meetup groups. My hobby is to read a book and play golf.</p>
                     </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="section-title">
                        <h3><img src="/images/dot.png" alt="Technology" /> Technology</h3>
                          <p>I developed this website using <code>React.js</code> and <code>React router</code> to build a single page web application. Here are core technologies:</p>
                          <ul>
                              <li>React.js</li>
                              <li>React Router</li>
                              <li>Redux</li>
                              <li>React Modal</li>
                              <li>React Toastify</li>
                              <li>React slick</li>
                              <li>React bootstrap</li>
                              <li>Firebase Database</li>
                              <li>Firebase Authentication</li>
                              <li>Webpack</li>
                              <li>JSONP</li>
                              <li>Heroku web server</li>
                          </ul>
                        </div>                    
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeBio;