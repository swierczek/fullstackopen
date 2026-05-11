const Persons = ({persons, filter}) => {
  return (
    <>
      {persons.map(person => {
        if (person.name.toLowerCase().includes(filter)) {
          return <p key={person.name}>{person.name} {person.number}</p>
        }
      })}
    </>
  )
}

export default Persons