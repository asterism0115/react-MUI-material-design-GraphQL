const { createMuiTheme } = require('@material-ui/core')
const { teal, purple } = require('@material-ui/core/colors')

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: purple
  }
})

export default theme
