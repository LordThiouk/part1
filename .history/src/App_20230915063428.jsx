import React from 'react';
import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)


  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />      
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = (handleClick, text) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part1 = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises1: 10,
    },
    {
      name: 'Using props to pass data',
      exercises2: 7,
    },
    {
      name: 'State of a component',
      exercises3: 14,
    },
  ];

  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises1}
      </p>
    </div>
  );
};

const Part2 = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises1: 10,
    },
    {
      name: 'Using props to pass data',
      exercises2: 7,
    },
    {
      name: 'State of a component',
      exercises3: 14,
    },
  ];

  return (
    <div>
      <p>
        {parts[1].name} {parts[1].exercises2}
      </p>
    </div>
  );
};

const Part3 = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises1: 10,
    },
    {
      name: 'Using props to pass data',
      exercises2: 7,
    },
    {
      name: 'State of a component',
      exercises3: 14,
    },
  ];

  return (
    <div>
      <p>
        {parts[2].name} {parts[2].exercises3}
      </p>
    </div>
  );
};

const Total = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises1: 10,
    },
    {
      name: 'Using props to pass data',
      exercises2: 7,
    },
    {
      name: 'State of a component',
      exercises3: 14,
    },
  ];

  const total =
    parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3;

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};



export default App;
