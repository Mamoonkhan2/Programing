import React from 'react'
import { Link } from 'react-router-dom'
import {useTheme} from '../context/UseDataStore'
function Card({ imageUrl, title, description, id }) {
  let {user,setuser,decrement} = useTheme()
  return (
    <div className="w-full border mb-5 mt-5 border-gray-400 rounded-2xl p-3 flex items-center justify-between bg-black gap-4">
      
      {/* Left Side (Image + Text) */}
      <Link to={`/card/${id}`} className="flex items-center gap-4 w-[75%]">
        
        {/* Image */}
        <img 
          className="w-16 h-16 rounded-xl object-cover border border-gray-400"
          src={imageUrl || "https://via.placeholder.com"} 
          alt={title} 
        />

        {/* Text */}
        <div>
          <h2 className="font-semibold text-white text-lg">
            {title}
          </h2>
          <p className="text-gray-400 text-sm truncate w-64">
            {description}
          </p>
        </div>

      </Link>

      {/* Right Side Button */}
      <button
         onClick={() => {
          if(user.length>0){
            setuser(user.filter(item => item !== id));
            decrement()
          }
      }}
        className="w-24 h-10 border border-gray-400 rounded-xl text-white hover:bg-gray-700 transition">
        Cancel
      </button>

    </div>
  )
}

export default Card