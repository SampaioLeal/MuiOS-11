import {
  alpha,
  Box,
  ButtonBase,
  styled,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createElement } from "react";
import taskManager from "../stores/taskManager";

interface DesktopItemProps {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  exe: string;
}

const Item = styled(ButtonBase)(({ theme }) => ({
  height: 90,
  width: 150,
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1),
  color: theme.palette.primary.main,

  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.3),
  },
  transition: theme.transitions.create(["background"], {
    duration: "0.1s",
  }),
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  textShadow: "1px 1px 3px #000000",
}));

export default function DesktopItem({ title, icon, exe }: DesktopItemProps) {
  return (
    <Item onClick={() => taskManager.open(exe)}>
      <Box>
        {createElement(icon, {
          fontSize: "large",
        })}
      </Box>
      <ItemTitle color="white">{title}</ItemTitle>
    </Item>
  );
}
