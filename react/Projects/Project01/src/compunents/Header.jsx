import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { useTheme } from '../context/UseDataStore'
function Header() {
  const {count} = useTheme()
  return (
    <div className='flex flex-wrap text-2xl w-full h-14 justify-center items-center'>
        <div className='mr-20'>

        <NavLink
          to={'/'}
          className={({ isActive }) => 
    isActive ? 'text-amber-200' : 'text-black'
    }

          >
          Home
        </NavLink>
        </div>
        <div>

    <NavLink
      to="/friend"
      className={({ isActive }) =>
        `relative px-3 py-1 font-medium pt-1  ${
          isActive ? "text-amber-200" : "text-black"
        }`
      }
    >
      Friends
      {count > 0 && (
        <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </NavLink>
          </div>
    </div>
)
}

export default Header