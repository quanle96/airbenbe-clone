import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import WeatherService from '../../../service/weather';
import DateTimer from '../../../util/dateTime';

import './Weather.css';

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

function RefreshBtn(props) {
  return (
    <button className='refresh-btn' onClick={props.refreshHandle}>
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentWeather: {
        iconCode: '10d',
        temp: 0,
        description: 'none',
        humidity: 0,
      },
      hourlyDailyWeather: {
        hourly: [],
        daily: [],
      },
      city: 'Ho Chi Minh City',
    };
    this.weatherService = new WeatherService();
  }

  componentDidMount() {
    this.callCurrentWeather();
  }

  callCurrentWeather = () => {
    this.weatherService
      .getCurrent(this.state.city)
      .then((response) => {
        const currentWeather = {
          iconCode: response.data.weather[0].icon,
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
        };
        this.setState((oldState) => ({
          ...oldState,
          currentWeather,
          isLoading: true,
        }));
        this.callHourlyDailyWeather();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  callHourlyDailyWeather = () => {
    this.weatherService
      .getByHourlyNDaily()
      .then((response) => {
        const hourlyDailyWeather = {
          hourly: response.data.hourly,
          daily: response.data.daily,
        };
        this.setState((oldState) => ({
          ...oldState,
          hourlyDailyWeather,
          isLoading: false,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  refreshHandle = () => {
    this.setState((oldState) => ({ ...oldState, isLoading: true }));
    this.callCurrentWeather();
  };

  render() {
    let RenderElement = (
      <div className='weather-wraper'>
        <div
          className='icon loading-icon'
          style={{
            backgroundImage: 'url("https://i.imgur.com/GLdqYB2.gif")',
          }}
        />
      </div>
    );

    const hourly = this.state.hourlyDailyWeather.hourly[4];
    const Dailies = this.state.hourlyDailyWeather.daily.slice(0, 3);
    const HourlyCard = () => {
      return hourly ? (
        <Card>
          <Title>4 giờ sau</Title>
          <Icon code={hourly.weather[0].icon} />
          <Temp>{hourly.temp.toFixed(0)}</Temp>
        </Card>
      ) : (
        <div />
      );
    };

    if (!this.state.isLoading) {
      RenderElement = (
        <div className='weather-wraper'>
          <Card>
            <Title>Hiện Tại</Title>
            <Icon code={this.state.currentWeather.iconCode} />
            <Temp>{this.state.currentWeather.temp.toFixed(0)}</Temp>
          </Card>
          <HourlyCard />
          {Dailies.map((d, index) => {
            return (
              <Card key={d.dt}>
                {index < 1 ? (
                  <Title>Hôm nay</Title>
                ) : (
                  <Title>{DateTimer.weatherTimeConverter(d.dt)}</Title>
                )}
                <Icon code={d.weather[0].icon} />
                <Temp>{d.temp.day.toFixed(0)}</Temp>
              </Card>
            );
          })}
          <RefreshBtn refreshHandle={this.refreshHandle} />
        </div>
      );
    }

    return RenderElement;
  }
}

export default Weather;
