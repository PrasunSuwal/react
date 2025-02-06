import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(7)

  // let counter = 5
  const addValue = ()=>{
    counter = counter + 1

    setCounter(counter)
  } 

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  )
}

export default App
