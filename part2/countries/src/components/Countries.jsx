const Countries = ({list}) => {
  if (list.length === 1) {
    return null;
  }

  return (
    <>
      <p>
        {list.length > 10 ? "Too many matches" :
          list.map(country =>
            <span key={country}>
              {country}<br />
            </span>
          )
        }
      </p>
    </>
  )
}

export default Countries