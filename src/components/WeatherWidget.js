import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Grid, Row, Col} from 'react-bootstrap';

/**
 * Weather Widget from Open Weather Map API.
 * calls Open Weather Map API with JSONP
 */
export default class WeatherWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      temp:'',
      weatherFont: '',
      description: ''
    }
  }
  
  componentDidMount(){
    console.log('componentDidMount');
    this.getCurrentLocation();
  }


  getCurrentLocation = ()=>{
    console.log('getCurrentLocation');
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position)=>{
        //console.log(position);
        let lon = Math.round(position.coords.longitude*1000)/1000;
        let lat = Math.round(position.coords.latitude*1000)/1000;
        this.getWeatherInfo(lon, lat)
      });
    } else {
      /* If geolocation is NOT available, set Los Angeles. */
      this.setState(()=>{
        lon:-118.3993
        lat:34.0291
      })
    }
  }


  getWeatherInfo = (lon, lat) =>{
    let unit = "imperial";
    let type = "accurate";
    let apiKey = "be2d43efb7b89c5d69256d7ec44da9b8";
    let url = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&units=${unit}&type=${type}&APPID=${apiKey}`;

    fetchJsonp(url, {callback: 'test'})
      .then( response => response.json())
      .then(
        (json) => {
          console.log('parsed json', json);
          let city = json.name;
          let country = json.sys.country;
          const {temp} = json.main;
          const {description, icon} = json.weather[0];
          let weatherFont = this.convertWeatherIcon(icon);
          
          this.setState(()=>({
            city,
            temp: Math.ceil(temp),
            description,
            weatherFont: weatherFont
          }));
        },
        (error)=>{
          console.log(error)
        }
      )
  }


  convertWeatherIcon = (icon) =>{
    const weatherIcon = {
      '01d': 'wi-day-sunny',
      '02d': 'wi-day-cloudy',
      '03d': 'wi-cloud',
      '04d': 'wi-cloudy',
      '09d': 'wi-showers',
      '10d': 'wi-day-rain-mix',
      '11d': 'wi-thunderstorm',
      '13d': 'wi-snow',
      '50d': 'wi-fog',
      '01n': 'wi-night-clear',
      '02n': 'wi-night-alt-cloudy',
      '03n': 'wi-night-alt-cloudy-high',
      '04n': 'wi-cloudy',
      '09n': 'wi-night-alt-sprinkle',
      '10n': 'wi-night-alt-showers',
      '11n': 'wi-night-alt-thunderstorm',
      '13n': 'wi-night-alt-snow',
      '50n': 'wi-night-fog'
    };
    return weatherIcon[icon];
  }

  render(){
    const {city, temp, weatherFont, description} = this.state;
    return (
      <div>
        <table className="weatherWidget-white">
          <tbody>
            <tr>
              <td colSpan="2" className="city">{city}</td>
            </tr>
            <tr>
              <td>
                <i className={`wi ${weatherFont}`}></i>
              </td>
              <td>
                <div className="currentTemp">{temp}&#8457;</div>
              </td>
            </tr>
          </tbody>
        </table>        
      </div>
    )
  }
}

// <img alt="" width="50" height="50" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
// <table className="weatherWidget">
// <tbody>
//   <tr>
//     <td className="city">{city}</td>
//     <td>
//     <img src={`http://openweathermap.org/img/w/${icon}.png`} className="weatherImg"/>
//       <i className={`wi ${weatherFont}`}></i>
//     </td>
//     <td className="currentTemp">{temp}&#8457;</td>
//   </tr>
// </tbody>
// </table>