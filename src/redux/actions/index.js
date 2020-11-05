const getWeather = (cityName) => ({
  type: 'GET_WEATHER',
  cityName,
});
export { getWeather };
