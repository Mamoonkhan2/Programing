import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
function Input() {
    // const context = React.useContext()
    const [name,sname] = useState('')  
    const {setUser,User}  = useContext(UserContext) 
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
            }}>
            submit
            </button>
        </div>
      </>
    )
}

export default Input