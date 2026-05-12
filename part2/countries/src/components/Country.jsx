import { useState, useEffect } from 'react'

const Country = ({list, countryService}) => {
  const [countryName, setCountryName] = useState(null)
  const [capital, setCapital] = useState(null)
  const [area, setArea] = useState(null)
  const [languages, setLanguages] = useState({})
  const [flag, setFlag] = useState(null)

  const countryFound = list.length === 1

  useEffect(() => {
    if (countryFound) {
      countryService
        .get(list[0])
        .then(countryData => {
          console.log('countryData', countryData);
          setCountryName(countryData.name.common)
          setCapital(countryData.capital[0])
          setArea(countryData.area)
          setLanguages(countryData.languages)
          setFlag(countryData.flags.png)
        })
    }
  }, [list, countryService])

  if (!countryFound) {
    return null
  }

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
    </>
  )
}

export default Country