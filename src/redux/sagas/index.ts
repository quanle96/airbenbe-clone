import { put, takeLatest, all, call } from 'redux-saga/effects';

import WeatherService from '../../service/weather';
import {
  WeatherAction,
  CurrentWeatherResponse,
  WeatherActionTypes,
  OneCallWeatherResponse,
} from '../../types';

function* fetchWeather(actions: WeatherAction) {
  const weatherService = WeatherService.getInstance();

  let result: WeatherAction = {
    type: WeatherActionTypes.FETCH_ERROR,
  };
  try {
    const dataToDay: CurrentWeatherResponse = yield call(
      weatherService.getCurrent,
      actions.city
    );

    const dataAllDate: OneCallWeatherResponse = yield call(
      weatherService.getByHourlyNDaily,
      dataToDay.coord
    );
    result = {
      type: WeatherActionTypes.FETCH_SUCCESS,
      data: { ToDay: dataToDay, AllDate: dataAllDate },
    };
  } catch (error) {
    console.log(error.message);
  }
  yield put(result);
}

function* actionWatcher() {
  yield takeLatest(WeatherActionTypes.FETCH_REQUEST, fetchWeather);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
