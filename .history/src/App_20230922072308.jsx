import React from 'react';
import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setAll(allClicks)
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setAll(allClicks)
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App;
