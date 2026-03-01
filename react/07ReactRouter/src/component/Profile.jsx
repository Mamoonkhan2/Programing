import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    let {user} = useContext(UserContext)
    console.log(user)
    if (!user) return <h1>Login you mf</h1>
    return <div>Name:{user.name}</div>

}

export default Profile