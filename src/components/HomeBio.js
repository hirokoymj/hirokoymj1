import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HomeBio extends React.Component {
    render() {
        console.log('HomeBio-render()');
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
                          Here is the list of my core technologies. I like to use <code>Redux middleware</code> in the web development because it makes the code cleaner and well-structured.
                          </p>
                          <ul>
                            <li>React.js</li>
                            <li>React router</li>
                            <li>Redux</li>
                            <li><a href="https://afternoon-thicket-91110.herokuapp.com/">Redux Middleware – Redux Thunk, Redux logger</a></li>
                            <li><a href="https://github.com/hirokoymj/React-Redux-async-app">Async Actions</a></li>
                            <li>Webpack</li>
                            <li><a href="https://github.com/hirokoymj/React-Redux-async-app/tree/master/src/server">Node/Express</a></li>
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