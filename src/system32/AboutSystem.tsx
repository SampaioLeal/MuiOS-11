import { Box, Divider, Typography } from "@mui/material";
import BasicButton from "../components/BasicButton";
import Window from "../components/Window";
import { TaskProps } from "../stores/taskManager";

// https://discord.com/channels/327861810768117763/384756018799706123/886398368690098247
function AboutSystem(props: TaskProps) {
  return (
    <Window width={400} height={450} title="About MuiOS" taskProps={props}>
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

export default AboutSystem;
