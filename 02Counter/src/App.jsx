import { useState } from 'react'  //useeffect hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  let [counter,setCounter]=useState(15) //any value inside bracket can be given (true,false,""...)
  //let counter=15;   its name can be setCounter or anything ...we want but we generally use setCOunter
  const addValue=()=>{
    console.log(counter);
    
    // counter=counter+1
    if(counter<=19){
      setCounter(counter+1)

    }else{
      setCounter(20)
    }
    
  }

  const removevalue=()=>{
    console.log(counter);
    if(counter>=1){

      setCounter(counter-1 )
    }else{
      setCounter(0);
    }
  }
  return (
    <>
    <h1>Hello Om</h1>
    <h2>Counter value is: {counter}</h2>
    <button onClick={addValue}
    >Add Value {counter} </button>
    <br/>
    <button onClick={removevalue}>Remove Value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}
export default App