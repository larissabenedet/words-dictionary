import React, { createContext, useState } from 'react'

// create context
const FontContext = createContext()

const FontContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [font, setFont] = useState('Inter')

  const handleFontChange = ({ target }) => {
    setFont(target.value)
  }

  return (
    // the Provider gives access to the context to its children
    <FontContext.Provider value={{ font, handleFontChange }}>
      {children}
    </FontContext.Provider>
  )
}

export { FontContext, FontContextProvider }
