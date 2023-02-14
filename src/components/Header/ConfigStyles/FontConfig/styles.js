import styled from 'styled-components'
import { MenuItem, Select } from '@mui/material'

export const StyledSelect = styled(Select)`
  .MuiInputBase-input {
    font-family: ${(props) => props.value || 'Inter'};
  }
`

export const StyledMenuItem = styled(MenuItem)`
  &.MenuItem {
    font-family: ${(props) => props.font};
  }

  &.Mui-focusVisible,
  &.Mui-selected,
  &:hover {
    background-color: transparent !important;
    color: var(--purple);
  }
`
