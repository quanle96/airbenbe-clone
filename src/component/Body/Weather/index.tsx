import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import DateTimer from '../../../util/dateTime';
import { GetWeather } from '../../../redux/actions/index';
import './Weather.css';
import { Props } from '../../../types';
import { Icon, Temp, Card, Title, RefreshBtn } from './weatherComponent';

const mapStateToProps = (state: { data: any; loading: boolean }) => {
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
interface WeatherProps extends PropsFromRedux, Props {}

const Weather: React.FC<WeatherProps> = (props) => {
  const [city, setCity] = useState<string>('Ho Chi Minh');
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

  //process before render
  if (!props.isLoading && props.weatherData) {
    const hourly = props.weatherData[1].hourly[4];
    const Dailies = props.weatherData[1].daily.slice(0, 3);
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
      icon: props.weatherData[0].weather[0].icon,
      temp: props.weatherData[0].main.temp.toFixed(0),
    };

    RenderElement = (
      <div className='weather-wraper'>
        <Card>
          <Title>Hiện Tại</Title>
          <Icon code={currentWeather.icon} />
          <Temp>{currentWeather.temp}</Temp>
        </Card>
        <HourlyCard />
        {Dailies.map((d: any, index: number) => {
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
