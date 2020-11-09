import { WeatherAction, WeatherActionTypes } from '../../types';

const reducer = (state = {}, action: WeatherAction) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_REQUEST:
      return { ...state, loading: true };
    case WeatherActionTypes.FETCH_SUCCESS:
      return { ...state, data: action.dataList, loading: false };
    default:
      return state;
  }
};
export default reducer;
