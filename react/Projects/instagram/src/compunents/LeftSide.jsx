import React from 'react'
import { Link } from 'react-router-dom'

function LeftSide() {
  return (
    <div className='w-[20%] h-screen bg-amber-50 rounded-tr-3xl rounded-br-3xl'>
        <div className='w-[80%] flex-col flex-wrap text-2xl font-medium'>
            <ul className='flex flex-col space-y-16 px-4 py-3 text-medium'>
                <Link to="/" >Home</Link>
                <Link to="/profile" >Profile</Link>
                <Link to="/bookmark" >BookMark</Link>
                <Link to="/search" >Search</Link>
                <Link to="/setting" >Setting</Link>
            </ul>
        </div>
    </div>
  )
}

export default LeftSide