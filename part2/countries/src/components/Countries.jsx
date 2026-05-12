import { useState, useEffect } from 'react'
import CountryDetails from '../components/CountryDetails'

const Countries = ({list, countryService}) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    setSelectedCountry(null)
  }, [list])

  const countryToDisplay = selectedCountry || (list.length === 1 ? list[0] : null)

  if (countryToDisplay) {
    return (
      <CountryDetails country={countryToDisplay} countryService={countryService} />
    )
  }

  return (
    <>
      <p>
        {list.length > 10 ? "Too many matches" :
          list.map(country =>
            <span key={country}>
              {country} <button onClick={() => setSelectedCountry(country)}>Show</button><br />
            </span>
          )
        }
      </p>
    </>
  )
}

export default Countries