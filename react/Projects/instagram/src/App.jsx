import { Outlet, Route } from 'react-router-dom'
import './App.css'
import Home from './compunents/Home'
import LeftSide from './compunents/LeftSide'
import RightSide from './compunents/RightSide'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {

  return (
    <Provider store={store}>
      <div className='flex w-full h-screen bg-blue-300'>
        <LeftSide/>
          <Outlet/>
        <RightSide/>
      </div>
    </Provider>
  )
}

export default App
