import React, { useState } from 'react'
import UserContext from './UserContext'
import Login from '../Compunent/Login';
import Profile from '../Compunent/Profile';

function UserContextProvider() {
  const [User, setUser] = useState(null);
  return (
   <UserContext.Provider value={{User,setUser}}>
    <Login/>
    <Profile/>
   </UserContext.Provider>
  )
}

export default UserContextProvider