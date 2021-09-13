import { observer } from "mobx-react-lite";
import taskManager from "../stores/taskManager";
import windowManager from "../stores/windowManager";

function WindowManager() {
  return (
    <>
      {windowManager.active.map((window) => {
        const { Executable, taskId } = window;

        return (
          <Executable
            key={`program-${taskId}`}
            handleClose={() => taskManager.close(taskId)}
            window={window}
          />
        );
      })}
    </>
  );
}

export default observer(WindowManager);
