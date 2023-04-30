import React from 'react'
import Book from '../../../assets/images/iconoir_book.svg'
import { FontConfig } from './FontConfig'
import { BookImg, Configs } from './style'
import { Divider, Grid, Tooltip } from '@mui/material'
import { ThemeConfig } from './ThemeConfig'

export const ConfigStyleHeader = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Tooltip title="Dictionary">
          <BookImg src={Book} alt="Book" />
        </Tooltip>
      </Grid>

      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Configs>
          <FontConfig />
          <Divider
            sx={{
              borderColor: 'var(--light-gray)',
              margin: '8px 26px',
              maxHeight: '32px',
            }}
            orientation="vertical"
            flexItem
            variant="middle"
          />
          <ThemeConfig />
        </Configs>
      </Grid>
    </Grid>
  )
}
