import { PowerSettingsNew } from "@mui/icons-material";
import {
  alpha,
  Avatar,
  Box,
  ClickAwayListener,
  darken,
  Fade,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import desktopStore from "../stores/desktop";

const MenuModal = styled(Box)(({ theme }) => ({
  width: 600,
  height: 400,

  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: "blur(10px)",

  margin: "auto",

  position: "absolute",
  left: 0,
  right: 0,
  bottom: theme.spacing(9),
  zIndex: 1000,

  boxShadow: theme.shadows[10],
  borderRadius: theme.spacing(1),

  display: "flex",
  flexDirection: "column",
}));

const ProfileBar = styled(Box)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(8),
  padding: theme.spacing(2),

  background: alpha(darken(theme.palette.background.paper, 0.2), 0.4),

  display: "flex",
  alignItems: "center",

  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
  borderWidth: "1px 0 0 0",
  borderColor: darken(theme.palette.background.paper, 0.2),
  borderStyle: "solid",
}));

// TODO: fix fadeOut transition
function StartMenu() {
  return desktopStore.isMenuOpen ? (
    <ClickAwayListener onClickAway={desktopStore.closeMenu}>
      <Fade in={desktopStore.isMenuOpen}>
        <MenuModal>
          <Box flexGrow={1}></Box>
          <ProfileBar>
            <Avatar sx={{ marginRight: 2, color: "#484848" }}>SL</Avatar>
            <Typography sx={{ flexGrow: 1 }}>Sampaio Leal</Typography>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </ProfileBar>
        </MenuModal>
      </Fade>
    </ClickAwayListener>
  ) : null;
}

export default observer(StartMenu);
