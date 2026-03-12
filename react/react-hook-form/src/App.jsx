import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './compunents/Footer/Footer'
import Header from './compunents/Header/Header'
import store from './Store/store'
function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
