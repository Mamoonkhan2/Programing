import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/UseDataStore'

function Card({ imageUrl, title, description, id }) {
  let { setuser,increment } = useTheme();
  return (
    <div className="relative max-w-sm w-64 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition group">
      
      {/* 🔥 Hover Follow Button (Top Right) */}
      <button
        onClick={() => {
          increment()
          setuser(prev => [...prev, id])
        }}
        className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 opacity-0 group-hover:opacity-100 transition hover:bg-gray-100"
      >
        +
      </button>

      {/* Top Image */}
      <img 
        className="w-full h-44 object-cover"
        src={imageUrl || "https://via.placeholder.com"} 
        alt={title} 
      />
      
      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 mb-1">
          {title}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <Link to={`/card/${id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
              Read More
            </button>
          </Link>

           
        </div>
      </div>
    </div>
  )
}

export default Card