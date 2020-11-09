export interface WeatherAction {
  type: string;
  city?: string;
  dataList?: any[];
}

export enum WeatherActionTypes {
  FETCH_REQUEST = '@@weather/FETCH_REQUEST',
  FETCH_SUCCESS = '@@weather/FETCH_SUCCESS',
  FETCH_ERROR = '@@weather/FETCH_ERROR',
  SELECTED = '@@weather/SELECTED',
}

export interface WeatherResponse {
  data: string;
  coord: { lat: number; lon: number };
}

export type Props = {
  code?: string;
  refreshHandle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type State = {
  city?: string;
};
