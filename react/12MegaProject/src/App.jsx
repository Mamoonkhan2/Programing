import { useState,useEffect } from 'react';
import {  useDispatch} from 'react-redux';
import service from './appWrite/auth'
import {Login,LogOut} from './store/authSlice'
import {Header,Footer} from './compounents'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    service.CurrentUSer()
    .then((userData)=>{
      console.log('error in App.jsx useeffect appwriteservice',userData)
      if(userData){
        dispatch(Login(userData));
      }
      else{
        dispatch(LogOut());
      }
    })
    .catch((e)=>{
      console.log('error in App.jsx useeffect appwriteservice',e)
    })
    .finally(()=>{
      setloading(false)
    })
  },[])
  // loading ?  (
  //   <h1>hello</h1>
  //   // <div className='min-h-screen bg-gray-500 flex flex-wrap content-between '>
  //   //   <h1>hello</h1>
  //   //   <div className='w-full block'>
  //   //     <Header/>
  //   //     Todo:{/* <Outlet/> */}
  //   //     <Footer/>
  //   //   </div>
  //   // </div>
  // )  
  // : <h1 className='text-4xl'>Loading...</h1>
  if(loading){
    return <h1 className='text-4xl'>Loading...</h1>
  }
  return (
    <div className='min-h-screen bg-gray-500 flex flex-wrap content-between justify-center '>
      <div className='w-min block'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}


export default App
