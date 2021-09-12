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
import systemStore from "../stores/system";

const MenuModal = styled(Box)(({ theme }) => ({
  width: 600,
  height: 400,

  background: alpha(theme.palette.background.default, 0.9),
  backdropFilter: "blur(10px)",

  margin: "auto",

  position: "absolute",
  left: 0,
  right: 0,
  bottom: desktopStore.taskBarHeight + 16,
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

  background: alpha(darken(theme.palette.background.default, 0.2), 0.4),

  display: "flex",
  alignItems: "center",

  borderBottomLeftRadius: theme.spacing(1),
  borderBottomRightRadius: theme.spacing(1),
  borderWidth: "1px 0 0 0",
  borderColor: darken(theme.palette.background.default, 0.2),
  borderStyle: "solid",
}));

// TODO: fix fadeOut transition
// https://discord.com/channels/327861810768117763/384756018799706123/886398448776138852
// https://discord.com/channels/@me/845465781437333504/886398878537089065
function StartMenu() {
  return (
    <ClickAwayListener
      onClickAway={systemStore.isMenuOpen ? systemStore.closeMenu : () => {}}
    >
      <Fade in={systemStore.isMenuOpen}>
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
  );
}

export default observer(StartMenu);
