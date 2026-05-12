import { useState, useEffect } from 'react'

const CountryDetails = ({country, countryService}) => {
  const [countryName, setCountryName] = useState(null)
  const [capital, setCapital] = useState(null)
  const [area, setArea] = useState(null)
  const [languages, setLanguages] = useState({})
  const [flag, setFlag] = useState(null)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [wind, setWind] = useState(null)
  const [temp, setTemp] = useState(null)

  useEffect(() => {
    countryService
      .get(country)
      .then(countryData => {
        console.log('countryData', countryData);
        setCountryName(countryData.name.common)
        setCapital(countryData.capital[0])
        setArea(countryData.area)
        setLanguages(countryData.languages)
        setFlag(countryData.flags.png)
        setLat(countryData.latlng[0])
        setLong(countryData.latlng[1])

        console.log('lat', countryData.latlng[0]);
        console.log('lng', countryData.latlng[1]);

        countryService
          .getWeather(countryData.latlng[0], countryData.latlng[1])
          .then(weatherData => {
            console.log('weatherData', weatherData);

            setWind(Math.max(...weatherData.hourly.wind_speed_10m))
            setTemp(Math.max(...weatherData.hourly.temperature_2m))
          })
      })
  }, [])

  return (
    <>
      <h1>{countryName}</h1>
      <p>
        Capital: {capital}<br />
        Area: {area}
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map(lang =>
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <img src={flag} />

      <h2>Weather</h2>
      <p>
        Max temperature: {temp}<br />
        Max wind: {wind}
      </p>
    </>
  )
}

export default CountryDetails