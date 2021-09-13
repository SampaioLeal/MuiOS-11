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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "text",
          transition: "color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
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
