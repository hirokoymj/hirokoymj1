import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import util from 'util'

export default class WeatherForecast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      weeklyForecast: []
    }
  }

  componentDidMount(){
    console.log(this.props.lat);
    let lat = this.props.lat;
    let lon = this.props.lon;
    let unit = "imperial";
    let type = "accurate";
    let apiKey = "be2d43efb7b89c5d69256d7ec44da9b8";
    let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?lon=-118.3570&lat=34.0293&cnt=7&units=${unit}&type=${type}&APPID=${apiKey}`;
    fetchJsonp(forecastUrl, 
      {callback: 'forecast'}
      ).then( response => response.json())
      .then(
        (json) => {
          //console.log('parsed json', json);
          const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
          var today = new Date();
          var dayNum = today.getDay();
          let city = json.city.name;

          const weeklyForecast = json.list.reduce((acc, data, index) =>{
            if(index !== 0){
              dayNum++;
              dayNum = (dayNum < 7) ? dayNum : 0; 
            }
            const temp = {main: data.main, weather: data.weather, dayName: weekday[dayNum]}
            acc.push(temp);
            return acc;
          }, []);
         console.log(weeklyForecast);
          this.setState({
            city,
            weeklyForecast
          })
        },
        (error)=>{
          console.log(error)
        }
      )    
  }

  render(){
    return(
      <div>
        <h1>Forecast Page</h1>
        <table>
        <tr>
        {
          this.state.weeklyForecast.map((item)=>{
            return(
              <td key={item.dayName}>
                <div>{item.dayName}</div>
                <div>{item.weather[0].main}</div>
                <div>{Math.round(item.main.temp_min)}</div>
                <div>{Math.round(item.main.temp_max)}</div>
              </td>
            )
          })
        }
        </tr>
        </table>        
      </div>
    )
  }
}//END of WeatherForecast class






