import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, GithubInfo, Home, Layout,Githubreturn } from './component'
import "./index.css"
import Login from './component/Login'
import User from './component/User/User'
import UserContextProvider from './Context/UserContextProvider'
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "", // This renders Home at the "/" path
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About /> // Uncomment when ready
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}
  loader={()=>{
    let data = {
      name:"mamoonkhan",
      age:50
    }
    return data
  }}
/>
      <Route path='about' element={<About/>}/>
      <Route 
      loader={()=>Githubreturn()}
      path='github' element={<GithubInfo/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)