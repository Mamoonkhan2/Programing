import React, { useState } from 'react'
import Header from './compunents/Header'
import Footer from './compunents/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/UseDataStore.js'

function App() {
  const [user,setuser] = useState([])
  const [count,setcount] = useState(0)
    const increment = () => setcount(prev => prev + 1);
  const decrement = () => setcount(prev => prev - 1);
  return (
    <ThemeProvider value={{user,setuser,count,increment,decrement}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
