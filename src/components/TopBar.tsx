import { Close } from "@mui/icons-material";
import { Box, ButtonBase, styled, Typography, alpha } from "@mui/material";
import { WindowProps } from "./Window";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  height: theme.spacing(4),
  background: alpha(theme.buttons.basicButton, 0.9),
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
}));

export const CloseButton = styled(ButtonBase)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
  background: "transparent",

  "&:hover": {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },

  transition: theme.transitions.create(["background", "color"]),
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

      <CloseButton onClick={props.handleClose}>
        <Close fontSize="small" />
      </CloseButton>
    </TopBarContainer>
  );
}
