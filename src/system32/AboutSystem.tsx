import { Box, Divider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import BasicButton from "../components/BasicButton";
import Window from "../components/Window";
import taskManager from "../stores/taskManager";

function AboutSystem(props: TaskProps) {
  return (
    <Window title="About MuiOS" {...props}>
      <Box display="flex" flexDirection="column" height="100%" padding={2}>
        <Typography variant="h2" color="primary" align="center">
          MuiOS 11
        </Typography>

        <Divider />

        <Typography>Material MuiOS</Typography>
        <Typography>Version Dev (OS Build 1)</Typography>
        <Typography>It's free and open source :)</Typography>

        <br />

        <Typography sx={{ flexGrow: 1 }}>
          This web system is made with React, Material-UI and some other stuff
          from JavaScript ecosystem.
        </Typography>

        <Box display="flex" justifyContent="flex-end">
          <BasicButton onClick={() => taskManager.close(props.window.taskId)}>
            OK
          </BasicButton>
        </Box>
      </Box>
    </Window>
  );
}

export default observer(AboutSystem);
