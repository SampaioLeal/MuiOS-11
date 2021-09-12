import { observer } from "mobx-react-lite";
import taskManager from "../stores/taskManager";
import windowManager from "../stores/windowManager";

function WindowManager() {
  const focusedWindow = windowManager.focused;

  return (
    <>
      {windowManager.nonFocused.map((window) => {
        const { Executable, taskId } = window;

        return (
          <Executable
            key={`program-${taskId}`}
            handleClose={() => taskManager.close(taskId)}
            window={window}
          />
        );
      })}

      {focusedWindow && (
        <focusedWindow.Executable
          handleClose={() => taskManager.close(focusedWindow.taskId)}
          window={focusedWindow}
        />
      )}
    </>
  );
}

export default observer(WindowManager);
