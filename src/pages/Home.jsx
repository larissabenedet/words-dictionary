import { Container, Grid } from '@mui/material'
import { ConfigStyleHeader } from '../components/Header/ConfigStyles'

export const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid xs={12} item>
          <ConfigStyleHeader />
        </Grid>
        <Grid xs={12} item>
          Conteúdo
        </Grid>
        <Grid xs={12} item>
          Footer
        </Grid>
      </Grid>
    </Container>
  )
}
