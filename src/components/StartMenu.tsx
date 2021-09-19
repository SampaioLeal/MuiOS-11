import { PowerSettingsNew } from "@mui/icons-material";
import {
  alpha,
  Avatar,
  Box,
  ClickAwayListener,
  darken,
  Grid,
  Grow,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import desktopStore from "../stores/desktop";
import systemStore from "../stores/system";
import { sysExecutables } from "../system32";
import DesktopItem from "./DesktopItem";

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

function StartMenu() {
  return (
    <ClickAwayListener
      onClickAway={systemStore.isMenuOpen ? systemStore.closeMenu : () => {}}
    >
      <Grow in={systemStore.isMenuOpen}>
        <MenuModal>
          <Box flexGrow={1} padding={2}>
            <Grid container spacing={1}>
              {Object.entries(sysExecutables).map(
                ([program, executable], index) => (
                  <Grid item key={`start-exec-${index}`}>
                    <DesktopItem
                      title={executable.title}
                      icon={executable.icon}
                      exe={program}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Box>
          <ProfileBar>
            <Avatar sx={{ marginRight: 2, color: "#484848" }}>SL</Avatar>
            <Typography sx={{ flexGrow: 1 }}>Sampaio Leal</Typography>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </ProfileBar>
        </MenuModal>
      </Grow>
    </ClickAwayListener>
  );
}

export default observer(StartMenu);
