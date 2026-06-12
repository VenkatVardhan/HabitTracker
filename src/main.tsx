import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //creates the stylesheet reference link tag automatically
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
