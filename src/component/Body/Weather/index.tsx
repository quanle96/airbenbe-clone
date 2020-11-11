import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import DateTimer from '../../../util/dateTime';
import { GetWeather } from '../../../redux/actions/index';
import './Weather.css';
import { IProps, Daily, WeatherResponse } from '../../../types';
import { Icon, Temp, Card, Title, RefreshBtn } from './weatherComponent';

const mapStateToProps = (state: {
  data: WeatherResponse;
  loading: boolean;
}) => {
  return {
    weatherData: state.data,
    isLoading: state.loading,
  };
};
//mapDispatchToProps
const actionCreators = {
  getWeather: GetWeather,
};

const connector = connect(mapStateToProps, actionCreators);

type PropsFromRedux = ConnectedProps<typeof connector>;
type WeatherProps = PropsFromRedux & IProps;

const Weather: React.FC<WeatherProps> = (props) => {
  const [city, setCity] = useState('Ho Chi Minh');
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

  useEffect(() => {
    props.getWeather(city);
  }, [city]);

  const refreshHandle = () => {
    props.getWeather(city);
  };
  const { isLoading, weatherData } = props;
  //process before render
  if (!isLoading && weatherData) {
    const { AllDate } = props.weatherData;
    const hourly = AllDate.hourly[4];
    const Dailies = AllDate.daily.slice(0, 3);
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
    const { ToDay } = weatherData;
    const currentWeather = {
      icon: ToDay.weather[0].icon,
      temp: ToDay.main.temp.toFixed(0),
    };

    RenderElement = (
      <div className='weather-wraper'>
        <Card>
          <Title>Hiện Tại</Title>
          <Icon code={currentWeather.icon} />
          <Temp>{currentWeather.temp}</Temp>
        </Card>
        <HourlyCard />
        {Dailies.map((d: Daily, index: number) => {
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
        <RefreshBtn refreshHandle={refreshHandle} />
      </div>
    );
  }

  return RenderElement;
};

export default connector(Weather);
