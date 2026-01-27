import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Hide initial loader when app is ready
window.addEventListener('load', () => {
  const loader = document.getElementById('initial-loader')
  if (loader) {
    setTimeout(() => {
      loader.classList.add('loaded')
      setTimeout(() => loader.remove(), 500)
    }, 500)
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
