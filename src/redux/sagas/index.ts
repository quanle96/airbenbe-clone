import { put, takeLatest, all, call } from 'redux-saga/effects';

import WeatherService from '../../service/weather';
import {
  WeatherAction,
  WeatherResponse,
  WeatherActionTypes,
} from '../../types';

function* fetchWeather(actions: WeatherAction) {
  const weatherService = WeatherService.getInstance();

  let result: WeatherAction = {
    type: WeatherActionTypes.FETCH_ERROR,
  };
  try {
    const dataToDay: WeatherResponse = yield call(
      weatherService.getCurrent,
      actions.city
    );

    const dataAllDate = yield call(
      weatherService.getByHourlyNDaily,
      dataToDay.coord
    );
    result = {
      type: WeatherActionTypes.FETCH_SUCCESS,
      dataList: [dataToDay, dataAllDate],
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
