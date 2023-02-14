import React, { createContext, useState } from 'react'

// create context
const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [theme, setTheme] = useState('Light')

  const handleThemeChange = () => {
    setTheme((curr) => (curr === 'Light' ? 'Dark' : 'Light'))
  }

  return (
    // the Provider gives access to the context to its children
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
