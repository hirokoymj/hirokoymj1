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
      weatherData: {}
    }
  }
  
  componentDidMount(){
    console.log('WeatherWidget - componentDidMount');
    //LA downtown is the default
    const default_latitude = 34.0522342;  
    const default_lotitude = -118.2436849;

    if(localStorage.getItem('myWeather')){
      const weatherData = JSON.parse(localStorage.getItem('myWeather'));
      this.setState(()=>({
        weatherData
      }));
    }else{
      fetch("http://ipinfo.io/json?token=4cb10e9b3bcb4c")
      .then(res => res.json())
      .then(
        (result) => {
          if(result.loc){
            const [lat, lon] = result.loc.split(',');
            this.getWeatherInfo(lat, lon);
          }else{
            // Set LA downtonw locatino as a default 
            this.getWeatherInfo(default_latitude, default_lotitude);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.getWeatherInfo(default_latitude, default_lotitude);
        }
      )
    }
  }

  /* HTML5 Geolocation - need to https */
  getGeolocationHTML5 = () =>{
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position)=>{
        let lon = Math.round(position.coords.longitude*1000)/1000;
        let lat = Math.round(position.coords.latitude*1000)/1000;
        /* Calls Open Weather Map API */
        console.log('lon', position.coords.longitude);
        console.log('lat', position.coords.latitude);
        this.getWeatherInfo(lat, lon);
      });
    } else {
      /* If geolocation is NOT available, set Los Angeles. */
      console.log('your browser does not avaiable geolocation.');
    }
  }


  getWeatherInfo = (lat, lon) =>{
    console.log('getWeatherInfo');
    let unit = "imperial";
    let type = "accurate";
    let apiKey = "be2d43efb7b89c5d69256d7ec44da9b8";
    let url = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&units=${unit}&type=${type}&APPID=${apiKey}`;

    fetchJsonp(url, {callback: 'test'})
      .then( response => response.json())
      .then(
        (json) => {
          //console.log('parsed json', json);
          let city = json.name;
          const {temp} = json.main;
          const {icon} = json.weather[0];
          let weatherFont = convertWeatherIcon(icon);
          const weatherData = {
            lat: lat,
            lon: lon,
            city,
            temp: Math.ceil(temp),
            weatherFont
          }
          this.setState(()=>({
            weatherData
          }));
          localStorage.setItem('myWeather',  JSON.stringify(weatherData));
        },
        (error)=>{
          console.log(error)
        }
      )
  }

  render(){
    const {city, temp, weatherFont} = this.state.weatherData;
    
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
                  <img src="" />
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

/**
 * Convert weather icon to weather font.
 */
const convertWeatherIcon = (icon) =>{
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

/**
 * Convert weather icon to weather font.
 */
