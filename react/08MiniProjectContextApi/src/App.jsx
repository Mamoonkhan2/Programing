import './App.css'
import Login from './Compunent/Login'
import Profile from './Compunent/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {

  return (
    <>
      <UserContextProvider/>
    </>
  )
}

export default App
