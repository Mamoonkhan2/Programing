import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counterValue = 5;
  return (
    <>
      <h1>Counter</h1>
       <h2>value {counterValue}</h2>
      <button
      onClick={()=>{
        counterValue+=1;
        console.log(counterValue)

      }}
      >
        Update
      </button><br />
      <button
        onClick={()=>{
          counterValue-=1;
          console.log(counterValue)
        }}
      >
        decrease
      </button>
    </>
  )
}

export default App
