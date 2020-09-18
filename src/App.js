import { Grid } from '@material-ui/core'
import React from 'react'
import AddSongs from './components/AddSongs'
import Header from './components/Header'
import SongList from './components/SongList'
import SongPlayer from './components/SongPlayer'

const App = () => {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <AddSongs />
          <SongList />
        </Grid>
        <Grid item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  )
}

export default App
