import { FontConfig } from '.'
import '@testing-library/jest-dom'
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import { ThemeContextProvider } from '../../../../contexts/ThemeContext'
import { FontContextProvider } from '../../../../contexts/FontContext'

test('should switch theme', async () => {
  render(
    <ThemeContextProvider>
      <FontContextProvider>
        <FontConfig />
      </FontContextProvider>
    </ThemeContextProvider>
  )
  const fontSelect = screen.getByRole('button', { name: 'Inter' })
  await waitFor(() => {
    fireEvent.mouseDown(fontSelect)
    expect(screen.getByText('Lora')).toBeInTheDocument()
    expect(screen.getByText('Inconsolata')).toBeInTheDocument()

    const listbox = within(screen.getByRole('listbox'))
    fireEvent.click(listbox.getByText(/Lora/i))
  })
  expect(fontSelect).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Lora' })).toBeInTheDocument()
})
