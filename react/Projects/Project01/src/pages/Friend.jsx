import React, { useEffect, useState } from 'react'
import FriendCard from '../compunents/FriendCard'
import { useTheme } from '../context/UseDataStore'
function Friend() {
  const {user} = useTheme();
  console.log(useTheme())
  const [post , setpost] = useState([]);
  const [loading,isloading] = useState(true);
  
useEffect(() => {
  const fetchUsers = async () => {
    const results = await Promise.all(
      user.map(id =>
        fetch(`https://api.freeapi.app/api/v1/public/randomusers/${id}`)
          .then(res => res.json())
      )
    );
    const usersData = results.map(r => r.data);
    setpost(usersData);
    isloading(false)
  };

  fetchUsers();
}, [user]);

  if(post <= 0){
    return <p>loading...</p>
  }

  return (
    <>
    {loading ?
      <p>loading...</p> :
      post && post.map((item , index) => <FriendCard key={index}    imageUrl={item.picture.large || ""}
      title={item.name.first + item.name.last ||""}
      description={item.location.timezone.description || ""}
      id={item.id}/>) 
    }
    </>
  )
}

export default Friend