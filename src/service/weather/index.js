const axios = require("axios").default;

const APIKey = "f6b9609818c10c6fac1496a3b43ddf19";
const APIUrl = "http://api.openweathermap.org/data/2.5";
const defaultUnits = "metric";
const defaultLanguages = "vi";

class WeatherService {
  getCurrent(city, units = defaultUnits, lang = defaultLanguages) {
    //const url = `${APIUrl}?=${cityName}&appid=${APIKey}`;
    return axios.get(APIUrl + "/weather", {
      params: {
        q: city,
        appid: APIKey,
        units: units,
        lang,
      },
    });
  }
  getByHour(city, hours, units = defaultUnits, lang = defaultLanguages) {
    return axios
      .get(APIUrl + "/hourly", {
        //onecall
        params: {
          q: city,
          appid: APIKey,
          units: units,
          lang,
        },
      })
      .then((response) => {});
  }
}

export default WeatherService;
