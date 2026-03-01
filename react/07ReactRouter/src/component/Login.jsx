import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import Profile from './Profile'
function Input() {
    // const context = React.useContext()
    const {setUser}  = useContext(UserContext) 
    const [name,sname] = useState('')  
    return (
      <>
        <div>
            <input 
            type="text"
            placeholder='enter name'
            value={name}
            onChange={(e)=>sname(e.target.value)}
            />
            <button
            type='submit'
            onClick={(e)=>{
                e.preventDefault();
                setUser({name})
                console.log(name);
                
            }}>
            submit
            </button>
        </div>
        <Profile/>
      </>
    )
}

export default Input