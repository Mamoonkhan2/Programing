import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import { ThemeProvider } from './Context/ThemeContext'
import ThemeBtn from './ThemeBtn'
function App() {
  const [theme,setTheme] = useState('light')
  const toggleTheme = ()=>{
    theme=="light"?setTheme("dark"):setTheme("light");
  }
  console.log(theme);
  
  useEffect(()=>{
    const D = document.querySelector('html')
    D.classList.remove("light","dark");
    D.classList.add(theme)
  },[theme])
  
  return (
    <ThemeProvider value={{theme,toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
              </div>
              <div className="w-full max-w-sm mx-auto">
              <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
