import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout' // Import your Layout component

import './index.css'
import Home from './component/Home'
import About from './component/About/About'
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // This renders Home at the "/" path
        element: <Home />
      },
      {
        path: "about",
        element: <About /> // Uncomment when ready
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)