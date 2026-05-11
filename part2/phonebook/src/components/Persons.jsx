const Persons = ({persons, filter, deletePerson}) => {
  return (
    <>
      {persons.map(person => {
        if (person.name.toLowerCase().includes(filter)) {
          return <p key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>
        }
      })}
    </>
  )
}

export default Persons