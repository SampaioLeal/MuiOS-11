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
