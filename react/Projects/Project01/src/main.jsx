import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Show from './pages/Show.jsx'
import { ThemeProvider } from './context/UseDataStore.js'
import Friend from './pages/Friend.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='/friend' element={<Friend />} />
      <Route path='card/:slug' element={<Show />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </StrictMode>,
)
