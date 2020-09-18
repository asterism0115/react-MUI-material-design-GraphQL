const { createMuiTheme } = require('@material-ui/core')
const { teal, purple } = require('@material-ui/core/colors')

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: purple
  }
})
