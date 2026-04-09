import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Om",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>

     <h1 className='bg-green-700 text-white p-4 rounded-2xl mb-4'>Hello Om</h1>
       <Card username="Om Dubey" price="500" />
       <Card username="komal Dubey" />
      
    </>
  )
}

export default App
