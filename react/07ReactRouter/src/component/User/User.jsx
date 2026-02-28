import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const Param = useParams()
  return (
    <>
    <div className='m-1 p-4 w-full h-50 flex justify-center align-middle text-3xl bg-gray-500 text-gray-800 '>User:{Param.userid}</div>
    </>
  )
}

export default User