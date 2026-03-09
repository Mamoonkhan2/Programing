import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featureImage}) {

  return (
    <Link to={`/post/${$id}`} className='border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
      <img src={featureImage} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
      </div>
    </Link>
  )
}

export default PostCard