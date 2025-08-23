import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 class="text-3xl underline bg-amber-300 mb-5">
    Hello world!
  </h1>
  <Card username="Anu radha jor se Pada" btnText="check annu" imgUrl={"./public/Anu.jpg"}/>
  <Card username="Kasturi Pradhan" btnText="check Tannu" imgUrl={"./public/Tanu.jpg"}/>
  <Card username="Vedika Pradhan" btnText="check Minu" imgUrl={"./public/Minu.jpg"}/>
    </>
  )
}

export default App
