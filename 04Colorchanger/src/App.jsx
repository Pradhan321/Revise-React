import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")


 
  return (
    <>
    <div className='w-full h-screen duration-200' 
    style={{ backgroundColor: color }}>
      <div className='flex justify-center gap-10 my-10 border-2 border-black p-5 rounded bg-white '>
        <button className="bg-blue-500 text-white px-5 py-2 rounded" onClick={() => setColor('blue')}>Blue</button>
        <button className="bg-red-500 text-white px-5 py-2 rounded" onClick={() => setColor('red')}>Red</button>
        <button className="bg-green-500 text-white px-5 py-2 rounded" onClick={() => setColor('green')}>Green</button>
        <button className="bg-purple-500 text-white px-5 py-2 rounded" onClick={() => setColor('purple')}>Purple</button>
        <button className="bg-yellow-500 text-white px-5 py-2 rounded" onClick={() => setColor('yellow')}>Yellow</button>
        <button className="bg-pink-500 text-white px-5 py-2 rounded" onClick={() => setColor('pink')}>Pink</button>
        <button className="bg-black text-white px-5 py-2 rounded" onClick={() => setColor('black')}>Black</button>
      </div>
      </div>
    </>
  )
}

export default App
