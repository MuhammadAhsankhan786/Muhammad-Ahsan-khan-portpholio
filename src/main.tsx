import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

// Filter out internal Three.js r185 Clock deprecation warning emitted by R3F
const origWarn = console.warn
console.warn = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
    return
  }
  origWarn(...args)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
