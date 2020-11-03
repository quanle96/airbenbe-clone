const axios = require("axios").default;

const APIKey = "f6b9609818c10c6fac1496a3b43ddf19";
const APIUrl = "http://api.openweathermap.org/data/2.5";
const defaultUnits = "metric";
const defaultLanguages = "vi";

class WeatherService {
  constructor() {
    this.lastCoord = { lat: 0, lon: 0 };
  }

  getCurrent(city, units = defaultUnits, lang = defaultLanguages) {
    //const url = `${APIUrl}?=${cityName}&appid=${APIKey}`;
    return axios
      .get(APIUrl + "/weather", {
        params: {
          q: city,
          appid: APIKey,
          units: units,
          lang,
        },
      })
      .then((response) => {
        if (response.data)
          this.lastCoord = response.data.coord;
        return response;
      });
  }

  getByHourlyNDaily(
    coord = this.lastCoord,
    units = defaultUnits,
    lang = defaultLanguages
  ) {
    console.log(this.lastCoord)

    return axios.get(APIUrl + "/onecall", {
      //onecall
      params: {
        lat: coord.lat,
        lon: coord.lon,
        exclude: ["current", "minutely"],
        appid: APIKey,
        units: units,
        lang,
      },
    }); //.then((response) => {})
  }
}

export default WeatherService;
