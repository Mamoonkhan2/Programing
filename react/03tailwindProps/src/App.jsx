import { useState } from 'react'
import './App.css'
import ProfileCard from './compunent/ProfileCard'
function App() {
  const [counter,setCounter] = useState(5);
  return (
    <>
      <h1>{counter}</h1>
      <button
      onClick={
        ()=>{
          setCounter((prevous)=>{
            console.log(prevous);
            return prevous+1
          })
          setCounter((prevous)=>{
            console.log(prevous);
            return prevous+1
          })
          setCounter((prevous)=>{
            console.log(prevous);
            return prevous+1
          })
          setCounter((prevous)=>{
            console.log(prevous);
            return prevous+1
          })
        }
      }
      >
        increce
      </button>
      <ProfileCard name = "Mamoon_favorite" SomeMassege="Veiw Profile"/>
      <ProfileCard name = "Noorullah_favorite" SomeMassege="Veiw Massege"/>
      <ProfileCard name = "Haroon_favorite" />
    </>
  )
}

export default App
