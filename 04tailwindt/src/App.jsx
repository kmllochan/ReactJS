import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName :  "kamal",
    age : 35
  }

  return (
    <>
      
      <h1 className="bg-green-400 mb-5 rounded-xl">Vite + React</h1>
      <Card channel="chay" />
      <Card channel="toast"/>
    </>
  )
}

export default App
