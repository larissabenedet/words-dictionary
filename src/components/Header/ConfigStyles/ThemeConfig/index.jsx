import { Moon } from './Moon'
import Switch from 'react-switch'
import React, { useContext } from 'react'
import { Icon, StyledLabel } from './styles'
import { ThemeContext } from '../../../../contexts/ThemeContext'

export const ThemeConfig = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext)
  return (
    <>
      <StyledLabel>
        <Switch
          aria-label="Theme Switch"
          onChange={handleThemeChange}
          checked={theme === 'Dark'}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#A445ED"
          onHandleColor="#FFF"
          handleDiameter={14}
          height={20}
          width={40}
        />
        <Icon>
          <Moon theme={theme} />
        </Icon>
      </StyledLabel>
    </>
  )
}
