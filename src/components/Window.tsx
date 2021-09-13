import { Box, Paper, styled, alpha } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { Rnd } from "react-rnd";
import windowManager from "../stores/windowManager";
import { TopBar } from "./TopBar";

export interface WindowProps extends TaskProps {
  children: ReactNode;
  title: string;
  isResizable?: boolean;
}

const WindowPaper = styled(Paper)(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[4],
  display: "flex",
  flexDirection: "column",

  backgroundImage: "none",
  background: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: "blur(10px)",
  transition: theme.transitions.create(["background"]),
}));

function Window(props: WindowProps) {
  const { children, window } = props;

  function updatePosition(e: any, data: any) {
    windowManager.setPosition(window.taskId, data.x, data.y);
  }

  function updateSize(
    e: any,
    direction: any,
    ref: any,
    delta: any,
    position: any
  ) {
    windowManager.setSize(
      window.taskId,
      window.width + delta.width,
      window.height + delta.height
    );
    windowManager.setPosition(window.taskId, position.x, position.y);
  }

  return (
    <Rnd
      default={{
        x: window.x,
        y: window.y,
        width: window.width,
        height: window.height,
      }}
      position={{ x: window.x, y: window.y }}
      size={{ width: window.width, height: window.height }}
      onDragStop={updatePosition}
      onResizeStop={updateSize}
      cancel=".content"
      enableResizing={window.isResizable}
      style={{ cursor: "default" }}
    >
      <WindowPaper>
        <TopBar className="topBar" noMinimize noMaximize {...props} />

        <Box
          className="content"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          padding={2}
        >
          {children}
        </Box>
      </WindowPaper>
    </Rnd>
  );
}

export default observer(Window);
