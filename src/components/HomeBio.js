import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class HomeBio extends React.Component {
    render() {
        console.log('HomeBio-render()');
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
                    <div className="section-title">
                      <h3>About Me</h3>
                      <p>I am Front-End web developer in Los Angeles over ten years. My strong languages is JavaScript and spend many time to build React.js web sites and web applications.</p>
                      <p> I will learn new technologies by myself and also attend local Meetups regulary. My hobby is to read a book and play a golf.</p>
                     </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="section-title">
                        <h3>Technology</h3>
                          <p>This website is a single page web application by <code>React.js</code> and <code>React Router</code>. Here are the main technologies that I used for developing the site.</p>
                          <ul>
                              <li>React.js</li>
                              <li>React-Slick</li>
                              <li>React-Bootstrap</li>
                              <li>React Router</li>
                              <li>Firebase</li>
                              <li>Webpack3.1</li>
                              <li>npm - form validator</li>
                          </ul>
                        </div>                    
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomeBio;