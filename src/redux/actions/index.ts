import {
  WeatherAction,
  WeatherActionTypes,
  WeatherResponse,
} from '../../types';

export const GetWeather = (cityName?: string): WeatherAction => ({
  type: WeatherActionTypes.FETCH_REQUEST,
  city: cityName,
});

export const ReceivedWeather = (json: WeatherResponse): WeatherAction => ({
  type: WeatherActionTypes.FETCH_SUCCESS,
  data: json,
});
