import { createTheme, Theme } from "@mui/material";

const lightTheme: Theme = createTheme({
  buttons: {
    basicButton: "#FDFDFD",
  },
  palette: {
    background: {
      paper: "#F3F0F3",
      default: "#E0E8FA",
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

export default lightTheme;
