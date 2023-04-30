import React, { useContext } from 'react'
import { Wrapper, StyledTextField } from './styles'
import InputAdornment from '@mui/material/InputAdornment'
import { IconSearch } from './IconSearch'
import { ThemeContext } from '../../contexts/ThemeContext'
import { FontContext } from '../../contexts/FontContext'

export const Search = () => {
  const { theme } = useContext(ThemeContext)
  const { font } = useContext(FontContext)

  return (
    <Wrapper>
      <StyledTextField
        fullWidth
        placeholder="Search for any word…"
        type="search"
        // error
        // helperText="Incorrect entry."
        sx={{
          '& fieldset': { borderColor: 'transparent' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconSearch />
            </InputAdornment>
          ),
          style: {
            fontFamily: font,
            backgroundColor:
              theme === 'Light' ? 'var(--gray-white)' : 'var(--medium-dark)',
            borderRadius: '16px',
            fontWeight: 'bold',
            color: theme === 'Light' ? 'var(--medium-light)' : 'var(--white)',
          },
        }}
      />
    </Wrapper>
  )
}
