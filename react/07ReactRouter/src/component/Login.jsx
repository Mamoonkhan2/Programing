import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import Profile from './Profile'
function Input() {
    // const context = React.useContext()
    const {setUser}  = useContext(UserContext) 
    const [name,setName] = useState('')  
    const [password,setPassword] = useState('')  
    const [age,setage] = useState(null)  
    return (
      <>
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-60 h-60 gap-1' >
              <label className='text-2xl text-gray-600'>Name</label>
            <input 
            type="text"
            placeholder='enter name'
            value={name}
            className='text-2xl mb-1 p-1 border-2 border-b-black-800'
            onChange={(e)=>setName(e.target.value)}
            />
              <label className='text-2xl text-gray-600'>age</label>
            <input 
            type="text"
            placeholder='enter age'
            value={age}
            className='text-2xl mb-1 p-1 border-2 border-b-black-800'
            onChange={(e)=>setage(e.target.value)}
            />
              <label className='text-2xl text-gray-600'>password</label>
            <input 
            type="text"
            placeholder='enter password'
            value={password}
            className='text-2xl mb-1 p-1 border-2 border-b-black-800'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button
            className='m-3 text-2xl rounded-lg p-1 border-2 bg-amber-700 border-b-black-800'
            type='submit'
            onClick={(e)=>{
                e.preventDefault();
                setUser({name,age,password})
            }}>
            submit
            </button>
            </div>
        </div>
      </>
    )
}

export default Input