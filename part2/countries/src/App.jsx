import { useState, useEffect } from 'react'
import countryService from './services/country'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  // get results from the database
  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        const temp = allCountries.map(country => {
          return country.name.common
        })
        setCountries(temp)
        setFilteredCountries(temp)
      })
  }, [])

  const handleFilter = (event) => {
    const filterText = event.target.value;
    setFilter(filterText)

    const filtered = countries.filter(c => {
      return c.toLowerCase().indexOf(filterText) !== -1
    })

    setFilteredCountries(filtered)
  }

  console.log('filtered', filteredCountries);

  return (
    <div>
      <p>{countries.length} countries loaded</p>
      <Filter onChange={handleFilter} />
      <Countries list={filteredCountries} countryService={countryService} />
    </div>
  )
}

export default App