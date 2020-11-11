// import { promises } from "fs";
//import { CurrentWeatherResponse } from '../../redux/types';

import { CurrentWeatherResponse, OneCallWeatherResponse } from '../../types';

const axios = require('axios').default;

const APIKey = 'f6b9609818c10c6fac1496a3b43ddf19';
const APIUrl = 'http://api.openweathermap.org/data/2.5';
const defaultUnits = 'metric';
const defaultLanguages = 'vi';

class WeatherService {
  private lastCoord: { lat: number; lon: number } = { lat: 0, lon: 0 };
  private static instance: WeatherService;
  public static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  public getCurrent = (
    city = '',
    units = defaultUnits,
    lang = defaultLanguages
  ) => {
    if (!city) throw new Error('city undefine');
    return axios
      .get(`${APIUrl}/weather`, {
        params: {
          q: city,
          appid: APIKey,
          units: units,
          lang,
        },
      })
      .then((response: { data: CurrentWeatherResponse }) => {
        this.lastCoord = response.data.coord;
        return response.data;
      });
  };

  public getByHourlyNDaily = (
    coord = this.lastCoord,
    units = defaultUnits,
    lang = defaultLanguages
  ) => {
    return axios
      .get(`${APIUrl}/onecall`, {
        //onecall
        params: {
          lat: coord.lat,
          lon: coord.lon,
          exclude: ['current', 'minutely'],
          appid: APIKey,
          units: units,
          lang,
        },
      })
      .then((response: { data: OneCallWeatherResponse }) => response.data); //
  };
}

export default WeatherService;
