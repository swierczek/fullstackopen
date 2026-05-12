import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&hourly=temperature_2m,wind_speed_10m&forecast_days=1'

const get = countryName => {
  const request = axios.get(`${baseUrl}${countryName}`)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(allUrl)
  return request.then(response => response.data)
}

const getWeather = (lat, long) => {
  const request = axios.get(weatherUrl.replace('{lat}', lat).replace('{long}', long))
  return request.then(response => response.data)
}

export default { get, getAll, getWeather }
