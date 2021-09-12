import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  buttons: {
    basicButton: "#0F0F0F",
  },
  palette: {
    mode: "dark",
    background: {
      paper: "#121212",
      default: "#131313",
    },
    primary: { main: "#005AFF" },
    text: {
      primary: "#f5f5f5",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "hidden",
        },
      },
    },
  },
});

export default darkTheme;
