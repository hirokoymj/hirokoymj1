import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Grid, Row, Col}from 'react-bootstrap';

export default class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            visibility: false,
            width: window.innerWidth,
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => ({
            visibility: !prevState.visibility
        }));
    }
    componentDidMount() {
			this.updateWindowDimensions();
			window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
			window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
			this.setState({ width: window.innerWidth });
			console.log(this.state.width);
			if(this.state.width > 767){
				this.setState(()=>({
					visibility: true
				}))
			}else{
				this.setState(()=>({
					visibility: false
				}))
			}
		}
    render(){
			console.log(this.state.isMobile);
        return (
            <header className="site-header">
                <Grid>
                <div className="site-logo"><Link to="/"><img src="http://www.hirokoymj.com/images/logo.png" width="146" height="24" alt="hirokoymj.com" /></Link></div>
                <nav>
                    <div className="mobile-icon" onClick={this.handleToggleVisibility}><i className="fa fa-bars" aria-hidden="true"></i></div>
                    { this.state.visibility && (
                        <ul className="menu" onClick={this.handleToggleVisibility}>
                            <li>document
                                <div className="dropdown">
                                    <Grid>
                                        <Row>
                                            <Col sm={2}><NavLink to="/document/js" className="language-box js">JavaScript</NavLink></Col>
                                            <Col sm={2}><NavLink to="/document/html" className="language-box htmlcss">HTML/CSS</NavLink></Col>
                                            <Col sm={2}><NavLink to="/document/php" className="language-box php">PHP</NavLink></Col>
                                        </Row>
                                    </Grid>
                                </div>
                            </li>
                            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                            <li><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></li>
                            <li><NavLink to="/googlemap" activeClassName="is-active">Google Map</NavLink></li>
                            <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                        </ul>
                    )}
                </nav>
                </Grid>
            </header>  
        );

    }
}






