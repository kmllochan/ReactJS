import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let[counter, setCounter] = useState(15)
  //let counter  = 15;
  const addvalue=()=>
  {
      counter  = counter + 1; 
      setCounter(counter)
      
  }

  return (
    <>
      <h1>Vite + React kamal</h1>
      <h1>counter value  : {counter}</h1>

      <button onClick={addvalue}> add value {counter} </button>
      <br/>
      <button>remove value {counter} </button> 
      <p>footer : {counter}</p>
    </>
  )
}

export default App
