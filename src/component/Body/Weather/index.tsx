import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DateTimer from '../../../util/dateTime';
import { IProps, Daily, WeatherResponse } from '../../../types';
import {
  Icon,
  Temp,
  Card,
  Title,
  RefreshBtn,
  LoadingCards,
} from './weatherComponent';
import { GetWeather } from '../../../redux/actions';
import { StyledWTWraper } from './weatherComponent/style';

interface RootState {
  loading: boolean;
  data: WeatherResponse;
  getWeather: (city: string) => void;
}

type WeatherProps = IProps;

const Weather: React.FC<WeatherProps> = (props) => {
  const [city, setCity] = useState('Ho Chi Minh');

  let RenderElement = <LoadingCards num={5} />;

  const dispatch = useDispatch();
  const getWeather = (city: string = '') => dispatch(GetWeather(city));

  useEffect(() => {
    getWeather(city);
  }, [city]);

  const refreshHandle = () => {
    getWeather(city);
  };

  const isLoading = useSelector((state: RootState) => state.loading);
  console.log(isLoading);
  const weatherData = useSelector((state: RootState) => state.data);
  //process before render
  if (!isLoading && weatherData) {
    const { AllDate } = weatherData;
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
      <StyledWTWraper>
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
      </StyledWTWraper>
    );
  }

  return RenderElement;
};

export default Weather; //connector(Weather);
