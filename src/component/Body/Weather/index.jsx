import React from "react";
import WeatherService from "../../../service/weather";
import "./Weather.css";

function Icon(props) {
  const iconUrl = `url('http://openweathermap.org/img/wn/${props.code}@4x.png'`;
  return <div className='icon' style={{ backgroundImage: iconUrl }} />;
}

function Temp(props) {
  return <div className='temp'>{props.children}°C</div>;
}
function Card(props) {
  return <div className='wtCard'>{props.children}</div>;
}

function Title(props) {
  return <div className='cardTitle'>{props.children}</div>;
}
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {
        iconCode: "10d",
        temp: 0,
        description: "none",
        humidity: 0,
      },
      city: "Ho Chi Minh City",
    };
    this.weatherService = new WeatherService();
  }
  componentDidMount() {
    this.weatherService
      .getCurrent(this.state.city)
      .then((response) => {
        console.log(response);
        const currentWeather = {
          iconCode: response.data.weather[0].icon,
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
        };
        this.setState((oldState) => ({ ...oldState, currentWeather }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='weather-wraper'>
        <Card>
          <Title>Hiện Tại</Title>
          <Icon code={this.state.currentWeather.iconCode} />
          <Temp>{this.state.currentWeather.temp}</Temp>
        </Card>
      </div>
    );
  }
}

export default Weather;
