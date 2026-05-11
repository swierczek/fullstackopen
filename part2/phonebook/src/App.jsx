import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  // get results from the database
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNewName = (event) => {
    event.preventDefault()

    const newPerson = {name: newName, number: newNumber}
    const names = persons.map(person => person.name);

    if (names.indexOf(newName) === -1) {

      personService.create(newPerson)

      setPersons(persons.concat(newPerson))

      setNewName('')
      setNewNumber('');
    } else if (confirm(`${newPerson.name} is already added to the phonebook. Would you like to replace the old number with the new one?`)) {
      const person = persons.filter(person => person.name == newName)[0]

      personService.update(person.id, newPerson);
      setPersons(persons.map(p => p.id === person.id ? newPerson : p))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const deletePerson = person => {
    if (confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id);
      setPersons(persons.filter(p => p.id !== person.id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} />

      <h3>Add a new</h3>
      <PersonForm
        addNewName={addNewName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filter={filter}
        deletePerson = {deletePerson}
      />
    </div>
  )
}

export default App