import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HomeBio extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="homeBio">
                    <Col xs={12} sm={6}>
                    <div className="section-title">
                      <h3><img src="/images/dot.png" alt="About Me" /> About Me</h3>
                      <p>
                      I am a full-stack web developer in Los Angeles and have an experience over ten years. My strong skill is JavaScript especially <b>React and Redux</b>. This website is to post my technical tips and notes through my daily coding life.
                      </p>
                     </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div className="section-title">
                        <h3><img src="/images/dot.png" alt="Technology" /> Technology</h3>
                          <p>
                          Here is the list of my core technologies. I like to use <code>Redux middleware</code> in the React/Redux web development because it allows us to keep the API calls separated from the component. 
                          </p>
                          <ul>
                            <li>React.js</li>
                            <li>React router</li>
                            <li>Redux</li>
                            <li>Redux Middleware – Redux Thunk, Redux logger</li>
                            <li>Async Actions</li>
                            <li>Webpack</li>
                            <li>Node/Express</li>
                            <li>RESTful API</li>
                            <li>MongoDB</li>
                            <li>Heroku</li> 
                          </ul>
                        </div>                    
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default HomeBio;