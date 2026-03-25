import React, {  useEffect, useState } from 'react'
import Card from '../compunents/Card'
function Home() {
    const [post,setpost] = useState([])
    const [text,settext] = useState('')
    const [search, setsearch] = useState("");
useEffect(() => {
  fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100')
    .then(res => res.json())
    .then(data => {
        setpost(data.data.data)
    })
    .catch(err => console.log("API Error:", err));
    console.log(
        'sajdlfj'
    )
}, []);
console.log(post)
    const onsubmit = (e) => {
        e.preventDefault();
        setsearch(text)
    }
return (
        <>
        <div className='flex w-full h-auto flex-wrap'>
        <form className='w-full flex justify-center items-center border-b-black  p-1 m-1 '  onSubmit={onsubmit}>
            <input type="text" placeholder='search' value={text} onChange={(e)=>settext(e.target.value)} />
            <button type='submit' className='bg-blue-400 hover:bg-blue-700 p-1 m-1 rounded-bl-md rounded-tr-md '>Search</button>
        </form>
        {
            post && post.map((item)=>((item.name.first || "").toLowerCase()).startsWith(search.toLowerCase()) && (
                <div className="flex card p-1 ml-15 self-center flex-wrap justify-self-center"
                key={item.phone}
                >
                    <Card
                        imageUrl={item.picture.large || ""}
                        title={item.name.first + item.name.last ||""}
                        description={item.location.timezone.description || ""}
                        id={item.id}
                        
                    />            
                </div>
                
            )
            )
        }
        </div>
        </>        
    )
}

export default Home