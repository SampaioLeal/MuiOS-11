import { alpha, ButtonBase, styled } from "@mui/material";

const TaskButton = styled(ButtonBase)(({ theme }) => ({
  height: 46,
  width: 46,
  borderRadius: 6,
  background: "transparent",
  transition: theme.transitions.create(["background"], {
    duration: "0.1s",
  }),
  color: theme.palette.primary.main,

  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.1),
  },
}));

export default TaskButton;
