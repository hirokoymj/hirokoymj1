import React from "react";
import Slider from "react-slick";
import {Grid, Row, Col}from 'react-bootstrap';

export default class HomeSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false
          }
        }
      ]            
    };
    return (
        <Grid fluid={true}>
            <Row>
                <Col xs={12} className="zero-padding">
                    <h2>My Skills in Web Development</h2>
                    <Slider {...settings}>
                    <div className="skill-icon"><i className="fab fa-node-js"></i><p>Node.js</p></div>
                    <div className="skill-icon"><div className="express">Express</div><p>Express.js</p></div>


                    <div className="skill-icon"><i className="fab fa-react"></i><p>React.js</p></div>
                    <div className="skill-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="redux-icon">
                        <g fill="#a2d0ff" className="path-group">
                          <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                          <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                          <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
                        </g>
                      </svg>
                      <p>Redux</p>                    
                    </div>
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7" className="webpack"><title>icon</title><path fill="transparent" d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z"/><path fill="#8ed6fb" d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z" className="outer-color" /><path fill="#1c78c0" d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z" className="inner-color"/></svg>
                        <p>Webpack</p>
                    </div>
                    <div className="skill-icon"><i className="fab fa-npm"></i><p>npm</p></div>
                    <div className="skill-icon"><i className="fab fa-js"></i><p>JavaScript</p></div>
                    <div className="skill-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" className="bootstrap-icon">
                          <path fill="#a2d0ff" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z" className="bg"/>
                          <path fill="#353c44" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z" className="text"/>
                      </svg>
                      <p>Bootstrap</p>
                    </div>
                    <div className="skill-icon"><i className="fab fa-html5"></i><p>HTML</p></div>
                    <div className="skill-icon"><i className="fab fa-css3-alt"></i><p>CSS</p></div>
                    <div className="skill-icon"><i className="fab fa-sass"></i><p>SASS</p></div>
                    <div className="skill-icon"><i className="fab fa-gulp"></i><p>Gulp</p></div>
                    <div className="skill-icon"><i className="fab fa-grunt"></i><p>Grunt</p></div>
                    <div className="skill-icon"><i className="fab fa-angular"></i><p>Angular</p></div>
                  </Slider>
                </Col>
            </Row>
        </Grid>

    );
  }
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
    <i className="fas fa-angle-left"></i>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
    <i className="fas fa-angle-right"></i>
    </div>
  );
}
//<i class="fas fa-arrows-alt"></i>
// <div>
// <img src="http://via.placeholder.com/1170x300?text=slide2" className="im