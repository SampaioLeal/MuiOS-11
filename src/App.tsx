import { ThemeProvider } from "@emotion/react";
import { Apps } from "@mui/icons-material";
import { alpha, AppBar, Box, CssBaseline, styled } from "@mui/material";
import StartMenu from "./components/StartMenu";
import TaskButton from "./components/TaskButton";
import desktopStore from "./stores/desktop";
import theme from "./theme";

const Screen = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundImage: "url(/wallpaper.jpeg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const TaskBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: "blur(10px)",
  height: theme.spacing(7),

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

const Desktop = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Screen>
        <Desktop></Desktop>

        <StartMenu />

        <TaskBar>
          <TaskButton onClick={desktopStore.openMenu}>
            <Apps fontSize="large" color="primary" />
          </TaskButton>
        </TaskBar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
