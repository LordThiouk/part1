import React from 'react';

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part1 = () => {


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

const App = () => {
  const course = 'Half Stack application development';

  return (
    <>
      <Header course={course} />
      <Part1 />
      <Part2 />
      <Part3 />
      <Total />
    </>
  );
};

export default App;
