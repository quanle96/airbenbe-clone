export type WeatherAction = {
  type: string;
  city?: string;
  data?: WeatherResponse;
};
export type WeatherResponse = {
  ToDay: CurrentWeatherResponse;
  AllDate: OneCallWeatherResponse;
};
export enum WeatherActionTypes {
  FETCH_REQUEST = '@@weather/FETCH_REQUEST',
  FETCH_SUCCESS = '@@weather/FETCH_SUCCESS',
  FETCH_ERROR = '@@weather/FETCH_ERROR',
  SELECTED = '@@weather/SELECTED',
}

export type CurrentWeatherResponse = {
  dt: number;
  name: string;
  weather: Weather[];
  coord: { lat: number; lon: number };
  main: MainWeather;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Weather = {
  id: number;
  icon: string;
  main: string;
  description: string;
};

export type OneCallWeatherResponse = {
  lat: number;
  lon: number;
  hourly: Hourly[];
  daily: Daily[];
};

export type Hourly = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
};

export type Daily = {
  dt: number;
  weather: Weather[];
  temp: { day: number; min: number; max: number };
};

export type IProps = {
  code?: string;
  refreshHandle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type State = {
  city?: string;
};
