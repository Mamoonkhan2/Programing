import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {User,setUser} = useContext(UserContext); 
    if (!User) return <h1>Login you mf</h1>

    return <div>Name:{User.name}</div>

}

export default Profile