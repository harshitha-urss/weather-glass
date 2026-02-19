import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = "http://api.weatherstack.com";

export const getCurrentWeather = async (location) => {
  return axios.get(`${BASE_URL}/current`, {
    params: {
      access_key: API_KEY,
      query: location,
    },
  });
};
