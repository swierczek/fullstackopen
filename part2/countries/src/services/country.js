import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const get = countryName => {
  const request = axios.get(`${baseUrl}${countryName}`)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(allUrl)
  return request.then(response => response.data)
}

export default { get, getAll }
