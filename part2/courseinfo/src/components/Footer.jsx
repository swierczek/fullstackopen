const Footer = ({parts}) => {
  const total = Object.keys(parts).reduce((previous, key) => {
    return previous + parts[key].exercises;
  }, 0)

  return (
    <p><b>total of {total} exercises</b></p>
  )
}

export default Footer