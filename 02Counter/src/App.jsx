import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addMe=()=>{
    if(count >=20){
      alert("Maximum limit reached");
      return;
    }
    setCount(count+1)
  }

  const lessMe=()=>{
    if(count <=0){
      alert("Minimum limit reached");
      return;
    }
    setCount(count-1)
  }

  return (
    <>
      <h1>Counter Game </h1>
      <button onClick={addMe}>ADD ME : {count}</button>
      <br />
      <br />
      <button onClick={lessMe}>LESS ME : {count}</button>
      <p>This game is designed by : <strong>Avinash Pradhan</strong></p>
    </>
  )
}

export default App
