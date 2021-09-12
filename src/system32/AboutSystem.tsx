import { Box, Divider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import BasicButton from "../components/BasicButton";
import Window from "../components/Window";

function AboutSystem(props: TaskProps) {
  return (
    <Window
      width={props.window.width}
      height={props.window.height}
      title="About MuiOS"
      {...props}
    >
      <Box flexGrow={1}>
        <Typography variant="h2" color="primary" align="center">
          MuiOS 11
        </Typography>

        <Divider />

        <Typography>Material MuiOS</Typography>
        <Typography>Version Dev (OS Build 1)</Typography>
        <Typography>It's free and open source :)</Typography>

        <br />

        <Typography>
          This web system is made with React, Material-UI and some other stuff
          from JavaScript ecosystem.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <BasicButton onClick={props.handleClose}>OK</BasicButton>
      </Box>
    </Window>
  );
}

export default observer(AboutSystem);
