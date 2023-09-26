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
  const parts = [
  {
    name:'Fundamentals of React',
    exercises1: 10
  },
  {
  name: 'Using props to pass data',
  exercises2: 7
  },
  {
  name: 'State of a component',
  exercises3: 14
  }
]
  const total = exercises1 + exercises2 +exercises3
  return (
    <>

      <Header course={course} />
      <Part1 parts={parts[0].name} parts={parts[0].exercises1}/>
      <Part2 parts={parts[1].name} parts={parts[1].exercises2} />
      <Part3 parts={parts[2].name} parts={parts[2].exercises3} />

      <Total total={total}/>
    </>
  )
}
export default App