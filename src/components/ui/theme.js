import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      blue: "#0B72B9",
      orange: "#FFBA60"
    },
    primary: {
      main: "#0B72B9"
    },
    secondary: {
      main: "#FFBA60"
    }
  },
  typography: {
    h3: {
        fontWeight: 300
    }
  }
});

export default theme;
