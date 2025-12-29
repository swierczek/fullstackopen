import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Course = ({course}) => {
  return (
    <>
      <Header text={course.name} />

      {course.parts.map(part => {
        return (
          <Content key={part.id} text={part.name} exercises={part.exercises} />
        )
      })}

      <Footer parts={course.parts} />
    </>
  )
}

export default Course