import { useContext } from 'react'
import { Home } from './pages/Home'
import { GlobalStyle } from './style'
import { FontContext } from './contexts/FontContext'
import { ThemeContext } from './contexts/ThemeContext'

export function App() {
  const { font } = useContext(FontContext)
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle font={font} theme={theme} />
      <Home />
    </>
  )
}
