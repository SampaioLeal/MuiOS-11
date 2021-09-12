import { Box, Paper, styled, alpha } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import Draggable from "react-draggable";
import desktopStore from "../stores/desktop";
import { TaskProps } from "../stores/taskManager";
import { TopBar } from "./TopBar";

interface WindowProps {
  children: ReactNode;
  width: number;
  height: number;
  title: string;
  taskProps: TaskProps;
}

const WindowPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[4],
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  backgroundImage: "none",
  background: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: "blur(10px)",
}));

function Window(props: WindowProps) {
  const { children, width, height, title } = props;
  const defaultPosition = {
    x: window.innerWidth / 2 - width / 2,
    y: desktopStore.screenHeight / 2 - height / 2,
  };

  return (
    <Draggable
      defaultPosition={defaultPosition}
      handle=".topBar"
      onMouseDown={console.log}
    >
      <WindowPaper sx={{ width, height }}>
        <TopBar
          className="topBar"
          title={title}
          noMaximize
          {...props.taskProps}
        />

        <Box display="flex" flexDirection="column" flexGrow={1} padding={2}>
          {children}
        </Box>
      </WindowPaper>
    </Draggable>
  );
}

export default observer(Window);
