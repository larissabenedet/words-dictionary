import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { FontContextProvider } from './contexts/FontContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <FontContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FontContextProvider>
  </ThemeContextProvider>
)
