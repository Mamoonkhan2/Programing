import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'
import UserContext from './Context/UserContext.js'
function ContextPase() {
  const [User,setUser] = useState({name:"fuck you"})
  return(

    <UserContext.Provider value={
      {
        User,
        setUser
      }
    }>
    <App />

    </UserContext.Provider>
  )
}
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ContextPase/>
  </StrictMode>,
)
