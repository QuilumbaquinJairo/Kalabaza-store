import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { KalabazaApp } from './KalabazaApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KalabazaApp/>
  </StrictMode>,
)
