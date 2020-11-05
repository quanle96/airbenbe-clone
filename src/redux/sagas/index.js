import { put, takeLatest, all, call } from 'redux-saga/effects';
import WeatherService from '../../service/weather';

function* fetchWeather(actions) {
  const weatherService = WeatherService.getInstance();
  const dataToDay = yield call(weatherService.getCurrent, actions.cityName);
  const dataAllDate = yield call(
    weatherService.getByHourlyNDaily,
    dataToDay.coord
  );
  //   console.log([dataToDay, dataAllDate]);
  yield put({ type: 'WEATHER_RECEIVED', json: [dataToDay, dataAllDate] });
}

function* actionWatcher() {
  yield takeLatest('GET_WEATHER', fetchWeather);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
