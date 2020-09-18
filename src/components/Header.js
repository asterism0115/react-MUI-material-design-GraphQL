import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { HeadsetTwoTone } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
  title: {
    marginLeft: '8px'
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <HeadsetTwoTone />
        <Typography className={classes.title} variant="h6" component="h1">
          Musicto
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
