import { Container, Grid } from '@mui/material'
import { Search } from '../components/Search/Search'
import { ConfigStyleHeader } from '../components/Header/ConfigStyles'

export const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid xs={12} item>
          <ConfigStyleHeader />
        </Grid>
        <Grid xs={12} item>
          <Search />
          Conteúdo
        </Grid>
        <Grid xs={12} item>
          Footer
        </Grid>
      </Grid>
    </Container>
  )
}
