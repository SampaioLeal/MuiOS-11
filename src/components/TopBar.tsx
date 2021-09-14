import { CheckBoxOutlineBlank, Close, Minimize } from "@mui/icons-material";
import { Box, ButtonBase, styled, Typography, alpha } from "@mui/material";
import taskManager from "../stores/taskManager";
import windowManager from "../stores/windowManager";
import { WindowProps } from "./Window";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  height: theme.spacing(4),
  background: alpha(theme.buttons.basicButton, 0.9),
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
  transition: theme.transitions.create(["background"]),
}));

export const WindowControlButton = styled(ButtonBase)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(1),
  background: "transparent",

  "&:hover": {
    background: alpha(theme.palette.text.primary, 0.05),
  },

  transition: theme.transitions.create(["background", "color"]),
}));

export const CloseButton = styled(WindowControlButton)(({ theme }) => ({
  borderTopRightRadius: theme.spacing(1),

  "&:hover": {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

interface TopBarProps extends WindowProps {
  noMinimize?: boolean;
  noMaximize?: boolean;
  className?: string;
}

export function TopBar(props: TopBarProps) {
  return (
    <TopBarContainer className={props.className}>
      <Typography sx={{ flexGrow: 1, cursor: "default" }}>
        {props.title}
      </Typography>

      <WindowControlButton
        onClick={() => windowManager.toggleVisibility(props.window.taskId)}
      >
        <Minimize fontSize="small" />
      </WindowControlButton>
      <WindowControlButton
        onClick={() => windowManager.maximize(props.window.taskId)}
      >
        <CheckBoxOutlineBlank fontSize="small" />
      </WindowControlButton>
      <CloseButton onClick={() => taskManager.close(props.window.taskId)}>
        <Close fontSize="small" />
      </CloseButton>
    </TopBarContainer>
  );
}
