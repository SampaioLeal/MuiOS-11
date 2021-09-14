import { Brightness4, Brightness7, Dashboard } from "@mui/icons-material";
import { AppBar, styled, alpha } from "@mui/material";
import { observer } from "mobx-react-lite";
import { createElement } from "react";
import desktopStore from "../stores/desktop";
import systemStore from "../stores/system";
import taskManager from "../stores/taskManager";
import windowManager from "../stores/windowManager";
import TaskButton from "./TaskButton";

const TaskBarContainer = styled(AppBar)(({ theme }) => ({
  position: "relative",
  background: alpha(theme.palette.background.default, 0.8),
  backdropFilter: "blur(10px)",
  height: desktopStore.taskBarHeight,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["background"]),
}));

function TaskBar() {
  function renderTasks() {
    return taskManager.allTasks.map((task) => (
      <TaskButton
        key={task.id}
        // active={task.isFocused}
        onClick={() => {
          systemStore.closeMenu();
          windowManager.toggleVisibility(task.id);
        }}
      >
        {createElement(task.icon, {
          fontSize: desktopStore.taskBarIconSize,
          color: "primary",
        })}
      </TaskButton>
    ));
  }

  function handleToggleMenu(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    systemStore.isMenuOpen ? systemStore.closeMenu() : systemStore.openMenu();
  }

  return (
    <TaskBarContainer>
      <TaskButton onClick={handleToggleMenu}>
        <Dashboard fontSize={desktopStore.taskBarIconSize} color="primary" />
      </TaskButton>
      <TaskButton onClick={systemStore.toggleTheme}>
        {systemStore.theme === "light" ? (
          <Brightness4 color="action" />
        ) : (
          <Brightness7 color="action" />
        )}
      </TaskButton>

      {renderTasks()}
    </TaskBarContainer>
  );
}

export default observer(TaskBar);
