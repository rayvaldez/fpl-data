import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#33BB00'
    },
    secondary: {
      main: '#e0e0e0'
    },
    background: {
      default: '#151515',
      secondary: '#26262a'
    }
  },
  typography: {
    fontFamily: 'roboto'
  }
})

export default theme;