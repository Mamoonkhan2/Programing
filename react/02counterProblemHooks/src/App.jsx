import { useState } from 'react'
import './App.css'

function App() {
 let [counterValue, setstate] = useState(5);
  if(counterValue < 0){
   setstate(0)
  }else if(counterValue>10){
    setstate(10)
 }
  return (
    <>
      <h1>Counter {counterValue}</h1>
       <h2>value {counterValue}</h2>
      <button
      onClick={()=>{

        setstate(++counterValue);
      }}
      >
        Update
      </button><br />
      <button
        onClick={()=>{
          setstate(--counterValue);
        }}
      >
        decrease
      </button>
    </>
  )
}

export default App
