const Header = (props) => {

  console.log(props)
  return (
    <div>
      <h1>

        {props.course}
      </h1>
    </div>
  )
}
const Part1 = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}
const Part2 = (props) => {
  console.log(props)
  return (
    <div>
    <p>
      {props.part2} {props.exercises2}
    </p>
    </div>
  )
}
const Part3 = (props) => {
  console.log(props)
  return (
    <div>
    <p>
      {props.part3} {props.exercises3}
    </p>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part1 part1={props.part1} exercises1={props.exercises1} />
      <Part2 part2={props.part2} exercises2={props.exercises2} />
      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 +exercises3
  return (
    <>

      <Header course={course} />
      <Part1 part1={props.part1} exercises1={props.exercises1}/>
       

      <Total total={total}/>
    </>
  )
}
export default App