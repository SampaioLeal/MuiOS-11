import { Box, Paper, styled, alpha } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import windowManager from "../stores/windowManager";
import { TopBar } from "./TopBar";

export interface WindowProps extends TaskProps {
  children: ReactNode;
  width: number;
  height: number;
  title: string;
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
}));

const WindowContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  zIndex: 1,
}));

function Window(props: WindowProps) {
  const { children, width, height, window } = props;

  function updatePosition(e: DraggableEvent, data: DraggableData) {
    windowManager.setPosition(props.window.taskId, data.x, data.y);
  }

  return (
    <WindowContainer>
      <Draggable
        defaultClassName="window"
        defaultPosition={{ x: window.x, y: window.y }}
        handle=".topBar"
        onStop={updatePosition}
      >
        <WindowPaper sx={{ width, height }}>
          <TopBar className="topBar" noMinimize noMaximize {...props} />

          <Box display="flex" flexDirection="column" flexGrow={1} padding={2}>
            {children}
          </Box>
        </WindowPaper>
      </Draggable>
    </WindowContainer>
  );
}

export default observer(Window);
