import { alpha, ButtonBase, styled } from "@mui/material";
import desktopStore from "../stores/desktop";

interface TaskButtonProps {
  active?: boolean;
}

const TaskButton = styled(ButtonBase)<TaskButtonProps>(({ theme, active }) => ({
  height: desktopStore.taskBarHeight - 8,
  width: desktopStore.taskBarHeight - 8,
  borderRadius: 6,
  background: active ? alpha(theme.buttons.basicButton, 0.5) : "transparent",
  transition: theme.transitions.create(["background"], {
    duration: "0.1s",
  }),
  color: theme.palette.primary.main,

  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.1),
  },

  marginInline: 3,
}));

export default TaskButton;
