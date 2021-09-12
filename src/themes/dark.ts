import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  buttons: {
    basicButton: "#0F0F0F",
  },
  palette: {
    mode: "dark",
    background: {
      paper: "#171717",
      default: "#131313",
    },
    primary: { main: "#005AFF" },
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
