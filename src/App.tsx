import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, styled } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import DesktopItem from "./components/DesktopItem";
import StartMenu from "./components/StartMenu";
import TaskBar from "./components/TaskBar";
import WindowManager from "./components/WindowManager";
import desktopStore from "./stores/desktop";
import systemStore from "./stores/system";
import taskManager from "./stores/taskManager";

const Screen = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundImage:
    theme.palette.mode === "light"
      ? "url(/wallpaper.jpeg)"
      : "url(/wallpaper-dark.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
}));

const Desktop = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

function App() {
  useEffect(() => {
    taskManager.open("muiosver");
  }, []);

  return (
    <ThemeProvider theme={systemStore.getTheme()}>
      <CssBaseline />

      <Screen>
        <Desktop>
          {desktopStore.items.map((item, index) => (
            <DesktopItem
              key={`program-${index}`}
              title={item.title}
              icon={item.icon}
              exe={item.exe}
            />
          ))}

          <WindowManager />
        </Desktop>

        <StartMenu />
        <TaskBar />
      </Screen>
    </ThemeProvider>
  );
}

export default observer(App);
