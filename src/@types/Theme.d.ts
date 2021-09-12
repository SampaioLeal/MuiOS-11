import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    buttons: {
      basicButton: string;
    };
  }

  interface ThemeOptions {
    buttons?: {
      basicButton?: string;
    };
  }
}
