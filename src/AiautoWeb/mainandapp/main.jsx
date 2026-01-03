import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AfterlogApp } from './allfile.js'
import isSingup from "./fortend.env"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {(isSingup || false) ? <AfterlogApp /> : <App />}
  </StrictMode>
)
