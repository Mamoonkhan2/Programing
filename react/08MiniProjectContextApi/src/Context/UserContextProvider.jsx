import React, { useState } from 'react'
import UserContext from './UserContext'
import Login from "../Compunent/Login.jsx"
import Profile from "../Compunent/Profile.jsx"
function UserContextProvider({Children}) {
  const [User, setUser] = useState({name:"fuck you"});
  return (
   <UserContext.Provider value={{User,setUser}}>
      {Children}
   </UserContext.Provider>
  )
}

export default UserContextProvider