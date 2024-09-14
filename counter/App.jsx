import { useState } from 'react'
import './App.css'
 
function App() {
  const [counter, setCounter] = useState(0)
  //let counter = 15
  const addvalue = () =>{
    setCounter((prevCounter)=> prevCounter+1)
  }
  const removevalue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter value:{counter} </h1>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
