import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import Spaces from './pages/spaces.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Spaces /> */}
  </React.StrictMode>,
)
