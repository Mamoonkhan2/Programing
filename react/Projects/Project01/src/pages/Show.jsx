import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ShowDetail from '../compunents/ShowDetail'
function Show() {
    const [post,setpost] = useState({})
    const {slug} = useParams();
    useEffect(() => {
        fetch(`https://api.freeapi.app/api/v1/public/randomusers/${slug}`)
        .then(data=>data.json())
        .then(data=>setpost(data.data))
    }, []);
  return (
    <div className='w-full h-full'>
        {post ? <ShowDetail data={post}/> : <p>Loading user data...</p>}
    </div>
  )
}

export default Show