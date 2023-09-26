const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <footer />
    </>
  )
}
export default App