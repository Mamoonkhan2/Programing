import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../src/app/store.js' // Path to your store file
import App from '../src/App.jsx' // Path to your App component
import './index.css' // Optional: Import your global CSS

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)