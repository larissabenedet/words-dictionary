import { ThemeConfig } from '.'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ThemeContextProvider } from '../../../../contexts/ThemeContext'
import { FontContextProvider } from '../../../../contexts/FontContext'

test('should switch theme', async () => {
  render(
    <ThemeContextProvider>
      <FontContextProvider>
        <ThemeConfig />
      </FontContextProvider>
    </ThemeContextProvider>
  )
  const themeSwitch = screen.getByRole('switch', { name: 'Theme Switch' })

  await waitFor(() => {
    fireEvent.click(themeSwitch)
  })

  expect(themeSwitch).toBeInTheDocument()
  expect(themeSwitch).toBeChecked()
})
