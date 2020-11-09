import { WeatherAction, WeatherActionTypes } from '../../types';

export const GetWeather = (cityName?: string): WeatherAction => ({
  type: WeatherActionTypes.FETCH_REQUEST,
  city: cityName,
});

export const ReceivedWeather = (json: any): WeatherAction => ({
  type: WeatherActionTypes.FETCH_SUCCESS,
  dataList: json,
});
