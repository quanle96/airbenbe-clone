import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import WeatherService from '../../../service/weather';
import DateTimer from '../../../util/dateTime';
import { getWeather } from '../../../redux/actions/index';
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
      city: 'Ho Chi Minh City',
    };
    this.weatherService = new WeatherService();
  }

  componentDidMount() {
    this.props.getWeather(this.state.city);
  }

  refreshHandle = () => {
    this.props.getWeather(this.state.city);
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

    console.log(this.props.weatherData);
    console.log(this.props.isLoading);
    if (!this.props.isLoading && this.props.weatherData) {
      const hourly = this.props.weatherData[1].hourly[4];
      const Dailies = this.props.weatherData[1].daily.slice(0, 3);
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

      const currentWeather = {
        icon: this.props.weatherData[0].weather[0].icon,
        temp: this.props.weatherData[0].main.temp.toFixed(0),
      };

      RenderElement = (
        <div className='weather-wraper'>
          <Card>
            <Title>Hiện Tại</Title>
            <Icon code={currentWeather.icon} />
            <Temp>{currentWeather.temp}</Temp>
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

const mapStateToProps = (state) => {
  return {
    weatherData: state.data,
    isLoading: state.loading,
  };
};
//mapDispatchToProps
const actionCreators = {
  getWeather,
};

export default connect(mapStateToProps, actionCreators)(Weather);
