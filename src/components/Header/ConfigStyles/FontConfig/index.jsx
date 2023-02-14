import React, { useContext } from 'react'
import { FormControl } from '@mui/material'
import { StyledSelect, StyledMenuItem } from './styles'
import { FontContext } from '../../../../contexts/FontContext'
import { ThemeContext } from '../../../../contexts/ThemeContext'

export const FontConfig = () => {
  const { font, handleFontChange } = useContext(FontContext)
  const { theme } = useContext(ThemeContext)

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <StyledSelect
        value={font}
        onChange={handleFontChange}
        disableUnderline
        variant="standard"
        MenuProps={{
          PaperProps: {
            sx: {
              width: '180px',
              marginTop: '15px',
              marginLeft: `-30px`,
              backgroundColor: `${
                theme === 'Light' ? 'var(--white)' : 'var(--medium-dark)'
              }`,
              color: `${
                theme === 'Light' ? 'var(--medium-dark)' : 'var(--white)'
              }`,
              boxShadow: `${
                theme === 'Light'
                  ? '0px 0px 20px rgba(0, 0, 0, 0.1)'
                  : '0px 0px 20px var(--purple)'
              }`,
              borderRadius: '16px',
              '& .MuiMenuItem-root': {
                fontWeight: 'bold',
              },
            },
          },
        }}
        sx={{
          color: `${
            theme === 'Light' ? 'var(--medium-light)' : 'var(--white)'
          }`,
          fontWeight: 'bold',
          '& .MuiSvgIcon-root': {
            fill: 'var(--purple)',
          },
          '& .MuiInput-input:focus': {
            backgroundColor: 'transparent !important',
          },
        }}
      >
        <StyledMenuItem font="Inter" className="MenuItem" value="Inter">
          Inter
        </StyledMenuItem>
        <StyledMenuItem font="Lora" className="MenuItem" value="Lora">
          Lora
        </StyledMenuItem>
        <StyledMenuItem
          font="Inconsolata"
          className="MenuItem"
          value="Inconsolata"
        >
          Inconsolata
        </StyledMenuItem>
      </StyledSelect>
    </FormControl>
  )
}
