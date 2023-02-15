import '@testing-library/jest-dom'
import { ConfigStyleHeader } from '..'
import { render, screen } from '@testing-library/react'
import { ThemeContextProvider } from '../../../../contexts/ThemeContext'
import { FontContextProvider } from '../../../../contexts/FontContext'

test('should render ConfigStyleHeader components', async () => {
  render(
    <ThemeContextProvider>
      <FontContextProvider>
        <ConfigStyleHeader />
      </FontContextProvider>
    </ThemeContextProvider>
  )

  const icon = screen.getByRole('img', { name: 'Dictionary' })
  const fontSelect = screen.getByRole('button', { name: 'Inter' })
  const themeSwitch = screen.getByRole('switch', { name: 'Theme Switch' })

  expect(icon).toBeInTheDocument()
  expect(fontSelect).toBeInTheDocument()
  expect(themeSwitch).toBeInTheDocument()
})
