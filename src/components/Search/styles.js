import { TextField } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0 40px 0;
`

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: var(--purple);
    }
    &.Mui-focused fieldset {
      border-color: var(--purple);
    }
  }
`
