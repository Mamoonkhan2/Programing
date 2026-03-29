import { Route, Routes } from 'react-router-dom'
import SinginForm from './_auth/forms/SigninForm'
import SingupForm from './_auth/forms/SingupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import './global.css'

function App() {
  return (
    <main className='flex h-screen '>
      <Routes>
        {/* public route */}
        <Route element = {<AuthLayout/>}>
          <Route path = '/sign-up' element = {<SingupForm />} />
          <Route path = '/sign-in' element = {<SinginForm />} />
        </Route>
        
        {/* private route */}
        <Route element={<RootLayout/>}>
          <Route index element = {<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
