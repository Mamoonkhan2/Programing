import { Routes,Route, BrowserRouter} from 'react-router-dom'
import Singup from './compunents/Singup'
import Login from './compunents/Login'
import './App.css'
import Profile from './compunents/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
